class Edge < ApplicationRecord
    belongs_to :tile
    has_one :game, through: :tile
    belongs_to_active_hash :orientation

    belongs_to :city_region, optional: true

    belongs_to :road_segment, optional: true

    has_one :left_edge_field_region, -> { left_of_road }, class_name: 'EdgeFieldRegion'
    has_one :left_field_region, through: :left_edge_field_region, source: :field_region

    has_one :right_edge_field_region, -> { right_of_road }, class_name: 'EdgeFieldRegion'
    has_one :right_field_region, through: :right_edge_field_region, source: :field_region

    has_one :singular_edge_field_region, -> { singular }, class_name: 'EdgeFieldRegion'
    has_one :field_region, through: :singular_edge_field_region

    has_one :edge_pair_member
    has_one :edge_pair, through: :edge_pair_member

    scope :played, -> { where tile: Tile.played }

    def self.unoccupied
        where.not(id: EdgePairMember.all.select(:edge_id))
    end

    def self.playable
        where type: played.unoccupied.select(:type)
    end

    Orientation.all.each do |orientation|
        scope orientation.edge_scope_name, -> { where orientation_id: orientation.id }
    end

    def facing_position
        Position.new(tile.x + absolute_orientation.dx, tile.y + absolute_orientation.dy)
    end

    def absolute_orientation
        @absolute_orientation ||= orientation + tile.orientation
    end
end
