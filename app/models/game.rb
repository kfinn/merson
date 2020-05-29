class Game < ApplicationRecord
    has_many :players

    has_many :tiles
    has_many :played_tiles, -> { played }, class_name: 'Tile'
    has_one :next_tile, -> { upcoming }, class_name: 'Tile'

    has_many :unoccupied_played_tile_edges, -> { unoccupied }, through: :played_tiles, source: :edges

    before_validation :generate!, on: :create

    def started?
        started_at.present?
    end

    def joinable?
        !started?
    end

    def available_next_tile_positions
        @available_next_tile_positions ||= unoccupied_played_tile_edges.includes(:tile).map(&:facing_position).uniq
    end

    def changed!
        GamesChannel.broadcast_to(self, {})
    end

    private

    def generate!
        self.key = 3.words.join('-')

        tiles.build(
            tile_variant: TileVariant.starting_tile_variant,
            ordering: -1,
            x: 0,
            y: 0
        )

        TileVariant.for_deck.shuffle.map.with_index do |tile_variant, index|
            tiles.build(
                tile_variant: tile_variant,
                ordering: index
            )
        end
    end
end
