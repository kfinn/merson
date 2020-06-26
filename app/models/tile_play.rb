class TilePlay
    include ActiveModel::Model

    attr_accessor :player, :x, :y, :orientation_id

    delegate :game, to: :player
    delegate :current_turn, to: :player
    delegate :tile, to: :current_turn, allow_nil: true

    validate :edge_pairs_must_be_valid
    validate :must_have_some_neighbor
    validate :player_must_be_able_to_play_next_tile

    def save!
        tile.transaction do
            raise ActiveRecord::RecordInvalid.new(self) unless valid?

            current_turn.update! tile_played_at: Time.zone.now
            update_tile!
            edge_pairs.each(&:save!)

            game.end_turn! if current_turn.completed?
        end
    end

    private

    def update_tile!
        tile.update! x: x, y: y, orientation: orientation
    end

    def edge_pairs
        @edge_pairs ||= Orientation.all.map do |neighbor_orientation|
            neighboring_tile = tile.game.tiles.find_by(x: x + neighbor_orientation.dx, y: y + neighbor_orientation.dy)
            next unless neighboring_tile.present?

            older_edge = neighboring_tile.edge_with_absolute_orientation(-neighbor_orientation)
            newer_edge = tile.edge_with_absolute_orientation(neighbor_orientation - orientation)

            EdgePair.new(
                older_edge: older_edge,
                newer_edge: newer_edge
            )
        end.compact
    end

    def edge_pairs_must_be_valid
        errors[:base] << 'all edges must match existing tiles' unless edge_pairs.all?(&:valid?)
    end

    def must_have_some_neighbor
        errors[:base] << 'must have at least one neighbor' unless edge_pairs.any?
    end

    def player_must_be_able_to_play_next_tile
        errors[:player] << 'cannot play a tile' unless player.can_play_next_tile?
    end

    def orientation
        @orientation ||= Orientation.find orientation_id
    end
end
