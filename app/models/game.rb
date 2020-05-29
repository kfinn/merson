class Game < ApplicationRecord
    has_many :players

    has_many :tiles
    has_many :played_tiles, -> { played }, class_name: 'Tile'
    has_one :next_tile, -> { upcoming }, class_name: 'Tile'

    before_validation :generate!, on: :create

    def started?
        started_at.present?
    end

    def joinable?
        !started?
    end

    Position = Struct.new(:x, :y)
    def available_next_tile_positions
        unless instance_variable_defined?(:@available_next_tile_positions)
            occupied_positions = Set.new
            positions_neighboring_occupied_positions = Set.new
            played_tiles.each do |tile|
                occupied_positions << Position.new(tile.x, tile.y)

                positions_neighboring_occupied_positions << Position.new(tile.x, tile.y - 1)
                positions_neighboring_occupied_positions << Position.new(tile.x + 1, tile.y)
                positions_neighboring_occupied_positions << Position.new(tile.x, tile.y + 1)
                positions_neighboring_occupied_positions << Position.new(tile.x - 1, tile.y)
            end

            @available_next_tile_positions = positions_neighboring_occupied_positions - occupied_positions
        end
        @available_next_tile_positions
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
