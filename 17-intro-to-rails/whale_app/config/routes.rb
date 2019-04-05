Rails.application.routes.draw do
  resources :sailors
resources :merby


  # old way
# get '/merbies' do
# erb :'/merbies/index'
# end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
