class Api::V1::GameStartsController < Api::V1::ApiV1Controller
    def create
        game = current_or_guest_user.games.find(params[:game_id])
        game_start = GameStart.new({ game: game })
        if game_start.valid?
            game_start.save!
            head :created
        else
            render_errors_for(game_start)
        end
    end
end
