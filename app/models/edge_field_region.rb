class EdgeFieldRegion < ApplicationRecord
    belongs_to :edge
    belongs_to :field_region

    scope :left_of_road, -> { where(left_of_road: true) }
    scope :right_of_road, -> { where(left_of_road: false) }
end
