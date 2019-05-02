Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :notes, only: [:index, :update, :create, :destroy]
      get 'my_custom_route', to: 'custom#beef'
      get 'roulette', to: 'custom#roulette'
    end
  end
end
