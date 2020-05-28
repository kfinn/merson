Rails.application.routes.draw do
  devise_for :users
  root to: "home#get"
  get 'home/get'

  resources :games, only: [:create, :show] do
    resource :game_preview, only: :show
    resource :players, only: :create
  end

  namespace :api do
    namespace :v1 do
      resources :games, only: [] do
        resources :next_tile_plays, only: :create
      end
    end
  end
end
