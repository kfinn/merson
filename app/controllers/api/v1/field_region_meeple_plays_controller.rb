class Api::V1::FieldRegionMeeplePlaysController < Api::V1::ApiV1Controller
    def create
        field_region = current_or_guest_user.field_regions.find(params[:field_region_id])
        player = current_or_guest_user.players.find_by! game: field_region.game
        field_region_meeple_play = FieldRegionMeeplePlay.new({ player: player, field_region: field_region })
        if field_region_meeple_play.valid?
            field_region_meeple_play.save!
            head :created
        else
            render_errors_for(field_region_meeple_play)
        end
    end
end
