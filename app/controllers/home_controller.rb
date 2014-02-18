class HomeController < ApplicationController

  before_filter(only: :subregion_options){
    locale = params[:locale]
    Carmen.i18n_backend.locale = locale if locale
  } 

  def index
    
  end

  def new

    @card_categories = s3_helper.card_categories_for_select
    @postcards = s3_helper.available_cards(@card_categories[0][1])
    
  end

  def make_postcard
    send_card if free_card || charge_card
    respond_to do |format|
      format.json{ render json: {status: 200} }
      format.html{ redirect_to root_path(sanitized_params) }
    end
  end

  def share

  end

  def check_discount
    respond_to do |format|
      format.json{
        render json: discount ? discount : {}
      }
    end
  end

  def subregion_options
    render partial: 'subregion_select'
  end

  def card_set
    @cards = s3_helper.available_cards(params[:category])
    render partial: 'card_set'
  end

  private

  def discount
    @discount ||= Discount.find_by_code(params[:code].upcase)
  end

  def free_card
    if discount.present? && discount.dtype == "percent" && discount.amount == 100.0 && discount.uses > 0
      discount.uses -= 1
      discount.save
      return true
    elsif discount.present? && discount.uses <= 0
      flash[:notice] = "Sorry, your discount was invalid."
      return false
    else
      return false
    end
  end

  def charge_card

    token = params[:payment_token]
    if token.present?
      price = params[:address][:country] == "US" ? 200 : 300 

      price = discount.calculate_discount_price(price) if discount

      if price == 0
        flash[:notice] = "Your free post card is on the way. It should arrive in a few days!"
      else
        begin
          customer = Stripe::Customer.create(
            :card => token
          )

          charge = Stripe::Charge.create(
            :amount => price,
            :currency => "usd",
            :customer => customer.id,
            :description => params[:email]
          )

        rescue Stripe::CardError => e
          flash[:alert] = "Your credit card was declined. Please try again with a different card."
        end
      end
    else
      return false
    end
  end

  def save_card
    @address = Address.where(params[:address]).first || Address.create(params[:address])
    @persisted_postcard = Postcard.create(params[:postcard])
  end

  def send_card
    save_card
    @lob = Lob()
    front = @persisted_postcard.front(params)
    @postcard = @lob.postcards.create(
      name: @persisted_postcard.id,
      to: @address.for_lob,
      from: ENV['POST_PERFECT_ADDRESS'],
      message: @persisted_postcard.message + "\n\nSent by www.postperfect.co",
      front: front
    )
    @persisted_postcard.lob_id = @postcard["id"]
    @address.lob_id = @postcard["to"]["id"]
    @address.save
    @persisted_postcard.address = @address
    File.delete(front) if front.class.to_s == "File"
    flash[:notice] = "Your postcard was created successfully. It should arrive in a few days!" if @address.save && @persisted_postcard.save!
  end

  def sanitized_params
    if flash[:alert].present?
      [:action, :authenticity_token, :payment_token, :utf8].each do |param|
        params.delete(param)
      end
      params
    else
      {}
    end
  end

  def s3_helper
    @s3_helper ||= ::S3Helper.new
  end
end
