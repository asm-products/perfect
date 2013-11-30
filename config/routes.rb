Perfect::Application.routes.draw do
  root to: 'home#index'

  post '/make_postcard' => 'home#make_postcard'

  get '/share' => 'home#share'
  
  get '/check_discount' => 'home#check_discount'
end
