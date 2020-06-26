class Turn < ApplicationRecord
    belongs_to :player
    has_one :game, through: :player
    belongs_to :tile

    scope :current, -> { where id: Game.all.select(:turn_id) }

    before_validation :pick_next_tile, on: :create

    def pick_next_tile
        self.tile = game.tiles.upcoming.first
    end

    def can_play_next_tile?
        tile_played_at.blank?
    end

    def completed?
        tile_played_at.present?
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
end
