Rails.application.routes.draw do
  # resources :sailors
  # resources :merby

  resources :sailors, only: [:index]
  resources :merbies, only: [:index, :show, :new, :create, :edit, :update]

# old way
# get '/merbies' do
# erb :'/merbies/index'
# end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
