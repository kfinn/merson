class Api::V1::CityRegionMeeplePlaysController < Api::V1::ApiV1Controller
    def create
        city_region = current_or_guest_user.city_regions.find(params[:city_region_id])
        player = current_or_guest_user.players.find_by! game: city_region.game
        city_region_meeple_play = TileFeatureMeeplePlay.new({ player: player, tile_feature: city_region })
        if city_region_meeple_play.valid?
            city_region_meeple_play.save!
            head :created
        else
            render_errors_for(city_region_meeple_play)
        end
    end
end
