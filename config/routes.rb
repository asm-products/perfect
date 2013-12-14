Perfect::Application.routes.draw do
  devise_for :users

  root to: 'home#index'

  post '/make_postcard' => 'home#make_postcard'

  # get '/share' => 'home#share'
  
  # get '/check_discount' => 'home#check_discount'

  get '/subregion_options' => 'home#subregion_options'
  get '/card_set' => 'home#card_set'
end
