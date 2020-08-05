class TileDraw
    attr_reader :game
    delegate :available_next_tile_positions, to: :game

    def initialize(game)
        @game = game
    end

    def tile
        unless instance_variable_defined?(:@tile)
            @tile = game.tiles.upcoming.find_each.find do |tile|
                game.available_next_tile_positions.any? do |position|
                    Orientation.all.any? do |tile_play_orientation|
                        Orientation.all.all? do |tile_neighbor_relative_orientation|
                            edge = tile.edge_with_absolute_orientation(tile_neighbor_relative_orientation - tile_play_orientation)

                            neighbor_position = Position.new(
                                position.x + tile_neighbor_relative_orientation.dx,
                                position.y + tile_neighbor_relative_orientation.dy
                            )
                            neighbor = tiles_by_position[neighbor_position]

                            neighbor_edge = neighbor&.edge_with_absolute_orientation(-tile_neighbor_relative_orientation)

                            neighbor_edge.blank? || edge.type == neighbor_edge.type
                        end
                    end
                end
            end
        end
        @tile
    end

    def tiles_by_position
        @tiles_by_position ||= game.tiles.with_unoccupied_edge.index_by(&:position)
    end
end
