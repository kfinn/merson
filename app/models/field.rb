class Field < ApplicationRecord
    has_many :field_regions

    def occupied?
        field_regions.any?(&:has_meeple_play?)
    end
end
