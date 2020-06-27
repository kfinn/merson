class Api::V1::RoadSegmentMeeplePlaysController < Api::V1::ApiV1Controller
    def create
        road_segment = current_or_guest_user.road_segments.find(params[:road_segment_id])
        player = current_or_guest_user.players.find_by! game: road_segment.game
        road_segment_meeple_play = TileFeatureMeeplePlay.new({ player: player, tile_feature: road_segment })
        if road_segment_meeple_play.valid?
            road_segment_meeple_play.save!
            head :created
        else
            render_errors_for(road_segment_meeple_play)
        end
    end
end
