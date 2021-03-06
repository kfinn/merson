class GamesController < ApplicationController
    def create
        @game = current_or_guest_user.games.create!
        redirect_to game_path(@game.key)
    end

    def show
        game = Game.find_by! key: params[:id]
        @current_player = game.players.find_by(user: current_or_guest_user)
        if @current_player.blank?
            redirect_to game_game_preview_path(game_id: params[:id])
        end
    end
end
