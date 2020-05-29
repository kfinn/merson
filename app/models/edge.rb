class Edge < ApplicationRecord
    belongs_to :tile
    belongs_to_active_hash :orientation

    has_many :edge_field_regions
    has_many :field_regions, through: :edge_field_regions

    belongs_to :city_region, optional: true

    belongs_to :road_segment, optional: true

    has_one :left_edge_field_region, -> { left_of_road }, class_name: 'EdgeFieldRegion', foreign_key: :edge_id
    has_one :left_field_region, through: :left_edge_field_region, source: :field_region

    has_one :right_edge_field_region, -> { right_of_road }, class_name: 'EdgeFieldRegion', foreign_key: :edge_id
    has_one :right_field_region, through: :right_edge_field_region, source: :field_region

    def self.unoccupied
        where.not(id: EdgePairMember.all.select(:edge_id))
    end

    Position = Struct.new(:x, :y)
    def facing_position
        Position.new(tile.x + absolute_orientation.dx, tile.y + absolute_orientation.dy)
    end

    def absolute_orientation
        @absolute_orientation ||= orientation + tile.orientation
    end
end
