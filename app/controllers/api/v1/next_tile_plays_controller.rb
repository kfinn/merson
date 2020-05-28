class Api::V1::NextTilePlaysController < Api::V1::ApiV1Controller
    def create
        game = current_or_guest_user.games.find(params[:game_id])
        next_tile_play = TilePlay.new({ tile: game.next_tile }.merge(create_params))
        if next_tile_play.valid?
            next_tile_play.save!
            head :created
        else
            render_errors_for(next_tile_play)
        end
    end

    def create_params
        params.require(:next_tile_play).permit(:x, :y, :orientation_id)
    end
end
