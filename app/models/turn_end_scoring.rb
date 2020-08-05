class TurnEndScoring
    attr_reader :game

    def initialize(game)
        @game = game
    end

    def apply!
        roads_to_score.each(&:score!)
        cities_to_score.each(&:score!)
    end

    def roads_to_score
        @roads_to_score ||= Road.with_meeple_plays(completed_road_meeple_plays)
    end

    def completed_road_meeple_plays
        game.road_segment_meeple_plays.where(tile_feature: completed_road_segments)
    end

    def completed_road_segments
        game.road_segments.with_completed_road
    end

    def cities_to_score
        City.with_meeple_plays(completed_city_meeple_plays)
    end

    def completed_city_meeple_plays
        game.city_region_meeple_plays.where(tile_feature: completed_city_regions)
    end

    def completed_city_regions
        game.city_regions.with_completed_city
    end
end
