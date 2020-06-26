class Api::V1::TilePlaysController < Api::V1::ApiV1Controller
    def create
        player = current_or_guest_user.players.find_by!(game_id: params[:game_id])
        tile_play = TilePlay.new({ player: player }.merge(create_params))
        if tile_play.valid?
            tile_play.save!
            head :created
        else
            render_errors_for(tile_play)
        end
    end

    def create_params
        params.require(:tile_play).permit(:x, :y, :orientation_id)
    end
end
