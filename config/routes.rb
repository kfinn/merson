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
        resource :current_player, only: :show
        resources :tile_plays, only: :create
        resource :game_start, only: :create
      end
    end
  end
end
