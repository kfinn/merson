class Api::V1::GamesController < Api::V1::ApiV1Controller
    def show
        @game = current_or_guest_user.games.find params[:id]
    end
end
