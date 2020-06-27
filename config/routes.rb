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
        resources :current_turn_ends, only: :create
      end
      resources :field_regions, only: [] do
        resource :field_region_meeple_play, only: :create
      end
      resources :city_regions, only: [] do
        resource :city_region_meeple_play, only: :create
      end
      resources :road_segments, only: [] do
        resource :road_segment_meeple_play, only: :create
      end
    end
  end
end
