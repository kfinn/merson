class Turn < ApplicationRecord
    belongs_to :player
    has_one :game, through: :player
    belongs_to :tile

    scope :current, -> { where id: Game.all.select(:turn_id) }

    validate :must_play_tile_before_meeple

    before_validation :pick_next_tile, on: :create

    delegate :has_meeple?, to: :player, prefix: true

    def current?
        game.turn == self
    end

    def pick_next_tile
        self.tile = game.tiles.playable.upcoming.first
    end

    def can_play_next_tile?
        current? && !tile_played?
    end

    def can_play_meeple?
        current? &&
            tile_played? &&
            !meeple_played? &&
            player_has_meeple?
    end

    def can_play_meeple_on_tile_feature?(tile_feature)
        can_play_meeple? && tile_feature.tile == tile
    end

    def can_end_turn?
        tile_played? && !ended?
    end

    def completed?
        ended? || (tile_played? && available_tile_features.empty?)
    end

    def build_next_turn
        Turn.new(player: player.next_player)
    end

    def available_next_tile_positions
        unless instance_variable_defined?(:@available_next_tile_positions)
            if !can_play_next_tile?
                @available_next_tile_positions = []
            else
                @available_next_tile_positions = game.unoccupied_played_tile_edges.includes(:tile).map(&:facing_position).uniq
            end
        end
        @available_next_tile_positions
    end

    def available_tile_features
        @available_tile_features ||= available_city_regions + available_field_regions + available_road_segments
    end

    def available_field_regions
        unless instance_variable_defined?(:@available_field_regions)
            if !can_play_meeple?
                @available_field_regions = []
            else
                @available_field_regions = tile.field_regions.with_unoccupied_field
            end
        end
        @available_field_regions
    end

    def available_city_regions
        unless instance_variable_defined?(:@available_city_regions)
            if !can_play_meeple?
                @available_city_regions = []
            else
                @available_city_regions = tile.city_regions.with_unoccupied_city
            end
        end
        @available_city_regions
    end

    def available_road_segments
        unless instance_variable_defined?(:@available_road_segments)
            if !can_play_meeple?
                @available_road_segments = []
            else
                @available_road_segments = tile.road_segments.with_unoccupied_road
            end
        end
        @available_road_segments
    end

    def tile_played?
        tile_played_at.present?
    end

    def meeple_played?
        meeple_played_at.present?
    end

    def ended?
        ended_at.present?
    end

    def end!
        update! ended_at: Time.zone.now
    end

    private

    def must_play_tile_before_meeple
        errors[:meeple_played_at] << 'must play tile first' if meeple_played? && !tile_played?
    end
end
