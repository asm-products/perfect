class HomeController < ApplicationController

  def index
  end

  def make_postcard

    token = params[:payment_token]
    price = params[:country] == "US" ? 200 : 300 

    begin
      charge = Stripe::Charge.create(
        :amount => price, # amount in cents, again
        :currency => "usd",
        :card => token,
        :description => params[:email]
      )
      
      @lob = Lob()
      address = {
        name: params[:name],
        address_line1: params[:address1],
        address_line2: params[:address2],
        city: params[:city],
        state: params[:state],
        country: params[:country],
        zip: params[:zip],
        email: params[:email]
      }
      @postcard = @lob.postcards.create(
        "",
        address,
        {
          from: ENV['POST_PERFECT_ADDRESS'],
          message: params[:final_message] + "\n\nSent by www.postperfect.co",
          front: "https://dl.dropboxusercontent.com/u/38199/" + params[:photo_chosen].gsub('/assets/', '')[0..-5] + '.pdf'
        }
      )
      flash[:notice] = "Your postcard was created successfully. It should arrive in a few days!"
    rescue Stripe::CardError => e
      flash[:notice] = "Your credit card was declined. Please try again with a different card."
      # The card has been declined
    end
    redirect_to root_path
  end

end
