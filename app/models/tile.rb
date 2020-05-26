class Tile < ApplicationRecord
    has_many :edges
    belongs_to_active_hash :orientation, optional: true
    belongs_to_active_hash :tile_variant

    validate :must_have_four_edges
    validate :x_and_y_must_be_mutually_present

    scope :played, -> { where.not(x: nil, y: nil) }

    def tile_variant=(tile_variant)
        self.tile_variant_id=tile_variant.id
        tile_variant.build self if tile_variant.present?
    end

    private

    def must_have_four_edges
        errors[:edges] << 'must have four edges' unless edges.size == 4
    end

    def x_and_y_must_be_mutually_present
        errors[:base] << 'must set both x and y' if x.present? ^ y.present?
    end
end
