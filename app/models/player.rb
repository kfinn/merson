class Player < ApplicationRecord
    MEEPLES_PER_PLAYER = 8

    include GameChanging

    belongs_to :user
    belongs_to :game

    has_many :turns
    has_one :current_turn, -> { current }, class_name: 'Turn'

    has_many :meeple_plays

    scope :ordered, -> { order :ordering }

    def self.select_remaining_meeples
        select(<<~SQL.squish)
            (#{
                MeeplePlay
                    .where('player_id = players.id')
                    .select("#{MEEPLES_PER_PLAYER} - count(*)")
                    .to_sql
            }) AS remaining_meeples
        SQL
    end

    delegate(
        :can_play_next_tile?,
        :can_play_meeple_on_tile_feature?,
        :can_end_turn?,
        :available_field_regions,
        :available_city_regions,
        :available_road_segments,
        to: :current_turn,
        allow_nil: true
    )

    def name
        super || "Player #{id}"
    end

    def next_player
        @next_player ||= later_players.ordered.first || game.players.ordered.first
    end

    def later_players
        game.players.where('ordering > ?', ordering)
    end

    def available_next_tile_positions
        current_turn&.available_next_tile_positions || []
    end

    def has_meeple?
        meeple_plays.size < MEEPLES_PER_PLAYER
    end

    def earn_points!(points)
        update! score: score + points
    end

    def remaining_meeples
        @remaining_meeples ||= attributes.fetch('remaining_meeples') { calculate_remaining_meeples }
    end

    def calculate_remaining_meeples
        MEEPLES_PER_PLAYER - meeple_plays.size
    end
end
