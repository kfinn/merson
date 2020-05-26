class Tile < ApplicationRecord
    has_many :edges
    belongs_to_active_hash :orientation, optional: true
    belongs_to_active_hash :tile_variant

    def tile_variant=(tile_variant)
        self.tile_variant_id=tile_variant.id
        tile_variant.build self if tile_variant.present?
    end

    validate :must_have_four_edges

    private

    def must_have_four_edges
        errors[:edges] << 'must have four edges' unless edges.size == 4
    end
end
