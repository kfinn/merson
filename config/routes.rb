Rails.application.routes.draw do
  devise_for :users
  root to: "home#get"
  get 'home/get'

  resources :games, only: [:create, :show] do
    resource :game_preview, only: :show
    resource :players, only: :create
  end
end
