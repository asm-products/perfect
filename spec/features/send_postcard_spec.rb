require "spec_helper"

describe "the postcard sending process", :type => :feature do

  it "clicks 'get started', chooses a postcard, fills out a message, fills out an address, and enters a credit card", js: true do
    visit '/'
    click_button 'Get Started'
    all('.card').first.click
    fill_in 'message', with: 'Hello World'
    click_button 'Where should we send it?'
    fill_in 'name', with: 'John Smith'
    fill_in 'address1', with: '60 Washington Square South'
    fill_in 'city', with: 'New York'
    fill_in 'state', with: 'NY'
    select 'United States', :from => 'country'
    fill_in 'zip', with: '10012'
    fill_in 'email', with: 'test@test.com'
    click_button 'Send now'
    within_frame 'stripe_checkout_app' do
      fill_in 'paymentNumber', with: '4242424242424242'
      fill_in 'paymentExpiry', with: '3/20'
      fill_in 'paymentCVC', with: '434'
      find('[type="submit"]').click
    end
    sleep 10
    page.find(".flash").text.should eq("Your postcard was created successfully. It should arrive in a few days!")
  end

end