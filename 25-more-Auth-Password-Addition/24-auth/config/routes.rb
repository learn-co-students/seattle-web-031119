Rails.application.routes.draw do
  resources :users
  resources :students, only: [:show, :new, :index, :create]
  root 'students#index'

  get '/login', to: 'auth#login'
  post '/login', to: 'auth#create'

  delete '/logout', to: 'auth#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
