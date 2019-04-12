Rails.application.routes.draw do
  resources :purchases, only: [:new, :create, :show, :index]
  resources :customers
  resources :brews, only: [:index, :destroy, :new, :create, :edit, :update, :show]
  get "/brews/strongest", to: "brews#strongest", as: "brews_strongest"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
