class Road < ApplicationRecord
    has_many :road_segments

    def occupied?
        road_segments.any?(&:has_meeple_play?)
    end
end
