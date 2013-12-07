class HomeController < ApplicationController

  def index

  end

  def new

  end

  def make_postcard
    begin
      send_card if charge_card
      respond_to do |format|
        format.json{ render json: {status: 200} }
        format.html{ redirect_to root_path(sanitized_params) }
      end
    rescue
      respond_to do |format|
        format.json{ render json: {status: 422}, :status => :unprocessable_entity}
        format.html{ redirect_to root_path(sanitized_params) }
      end
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


  private

  def discount
    @discount ||= Discount.find_by_code(params[:discount])
  end

  def charge_card
    token = params[:payment_token]
    price = params[:country] == "US" ? 200 : 300 

    price = discount.calculate_discount_price(price) if discount

    if price == 0
      flash[:notice] = "Your free post card is on the way. It should arrive in a few days!"
    else
      begin
        charge = Stripe::Charge.create(
          :amount => price,
          :currency => "usd",
          :card => token,
          :description => params[:email]
        )
        flash[:notice] = "Your postcard was created successfully. It should arrive in a few days!"
      rescue Stripe::CardError => e
        flash[:alert] = "Your credit card was declined. Please try again with a different card."
      end
    end
  end

  def send_card
    @lob = Lob()
    address = 
    @postcard = @lob.postcards.create(
      "",
      {
        name: params[:name],
        address_line1: params[:address1],
        address_line2: params[:address2],
        city: params[:city],
        state: params[:state],
        country: params[:country],
        zip: params[:zip],
        email: params[:email]
      },
      {
        from: ENV['POST_PERFECT_ADDRESS'],
        message: params[:final_message] + "\n\nSent by www.postperfect.co",
        front: params[:photo_chosen].gsub(".png", ".pdf")
      }
    )
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
end
