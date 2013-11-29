class HomeController < ApplicationController

  def index

  end

  def make_postcard
    send_card if charge_card
    redirect_to root_path
  end

  def share

  end


  private

  def charge_card
    token = params[:payment_token]
    price = params[:country] == "US" ? 200 : 300 

    begin
      charge = Stripe::Charge.create(
        :amount => price,
        :currency => "usd",
        :card => token,
        :description => params[:email]
      )
      flash[:notice] = "Your postcard was created successfully. It should arrive in a few days!"
    rescue Stripe::CardError => e
      flash[:notice] = "Your credit card was declined. Please try again with a different card."
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

end
