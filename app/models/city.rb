class City < ApplicationRecord
    has_many :city_regions

    def occupied?
        city_regions.any?(&:has_meeple_play?)
    end
end
