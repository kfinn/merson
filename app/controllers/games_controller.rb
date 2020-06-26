class GamesController < ApplicationController
    def create
        @game = current_or_guest_user.games.create!
        redirect_to game_path(@game.key)
    end

    def show
        game = current_or_guest_user.games.find_by key: params[:id]
        if game.blank?
            redirect_to game_game_preview_path(game_id: params[:id])
        else
            @current_player = game.players.find_by!(user: current_or_guest_user)
        end
    end
end
