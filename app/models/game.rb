class Game < ApplicationRecord
    has_many :players

    has_many :tiles
    has_many :played_tiles, -> { played }, class_name: 'Tile'

    has_many :unoccupied_played_tile_edges, -> { unoccupied }, through: :played_tiles, source: :edges

    has_many :city_regions, through: :tiles
    has_many :field_regions, through: :tiles
    has_many :road_segments, through: :tiles

    has_many :road_segment_meeple_plays, through: :road_segments, source: :meeple_play
    has_many :city_region_meeple_plays, through: :city_regions, source: :meeple_play

    belongs_to :turn, optional: true
    has_many :turns, through: :players

    before_validation :generate!, on: :create

    after_commit :changed!

    def started?
        started_at.present?
    end

    def joinable?
        !started?
    end

    def changed!
        GamesChannel.broadcast_to(self, {})
    end

    def end_turn!
        transaction do
            TurnEndScoring.new(self).apply!

            turn.end!

            tile_draw = TileDraw.new(self)
            if tile_draw.tile.present?
                next_turn = turn.build_next_turn tile: tile_draw.tile
                next_turn.save!
                update! turn: next_turn
            else
                end_game!
            end
        end
    end

    def end_game!
        GameEndScoring.new(self).apply!
    end

    def available_next_tile_positions
        @available_next_tile_positions ||= unoccupied_played_tile_edges.includes(:tile).map(&:facing_position).uniq
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
