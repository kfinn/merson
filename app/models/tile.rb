class Tile < ApplicationRecord
    include GameChanging

    belongs_to :game

    has_many :edges

    Orientation.all.each do |orientation|
        has_one(
            orientation.edge_relation_name,
            -> { public_send(orientation.edge_scope_name) },
            class_name: 'Edge'
        )
    end

    def self.includes_edge_specific_turns
        includes(*Orientation.all.map(&:edge_relation_name))
    end

    has_many :city_regions, -> { distinct }, through: :edges
    has_many :field_regions, -> { distinct }, through: :edges
    has_many :road_segments, -> { distinct }, through: :edges

    has_one :turn

    belongs_to_active_hash :orientation
    belongs_to_active_hash :tile_variant

    validate :must_have_four_edges
    validate :x_and_y_must_be_mutually_present
    validates :orientation, inclusion: { in: Orientation.all }

    scope :played, -> { where.not(x: nil).where.not(y: nil) }
    scope :unplayed, -> { where(x: nil, y: nil) }
    scope :upcoming, -> { unplayed.order(:ordering) }

    def self.with_unoccupied_edge
        where id: Edge.unoccupied.select(:tile_id)
    end

    def tile_variant=(tile_variant)
        self.tile_variant_id=tile_variant.id
        tile_variant.build self if tile_variant.present?
    end

    def edge_with_absolute_orientation(orientation)
        edge_with_relative_orientation(orientation - self.orientation)
    end

    def edge_with_relative_orientation(orientation)
        public_send(orientation.edge_relation_name)
    end

    def played?
        x.present? && y.present?
    end

    def position
        Position.new(x, y)
    end

    private

    def must_have_four_edges
        errors[:edges] << 'must have four edges' unless edges.size == 4
    end

    def x_and_y_must_be_mutually_present
        errors[:base] << 'must set both x and y' if x.present? ^ y.present?
    end
end
