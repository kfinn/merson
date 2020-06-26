class Api::V1::CurrentPlayersController < Api::V1::ApiV1Controller
    def show
        @current_player = current_or_guest_user.players.find_by!(game_id: params[:game_id])
    end
end
