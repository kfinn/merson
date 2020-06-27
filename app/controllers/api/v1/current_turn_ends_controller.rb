class Api::V1::CurrentTurnEndsController < Api::V1::ApiV1Controller
    def create
        game = current_or_guest_user.games.find(params[:game_id])
        player = current_or_guest_user.players.find_by! game: game
        current_turn_end = CurrentTurnEnd.new({ player: player })
        if current_turn_end.valid?
            current_turn_end.save!
            head :created
        else
            render_errors_for(current_turn_end)
        end
    end
end
