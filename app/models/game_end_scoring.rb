class GameEndScoring
    attr_reader :game

    def initialize(game)
        @game = game
    end

    def apply!
        roads_to_score.each(&:score!)
        cities_to_score.each { |city| city.score!(scale: 0.5) }
        fields_to_score.each(&:score!)
    end

    def roads_to_score
        @roads_to_score ||= Road.with_meeple_plays
    end

    def cities_to_score
        @cities_to_score ||= City.with_meeple_plays
    end

    def fields_to_score
        @fields_to_score ||= Field.with_meeple_plays
    end
end
