class RoadSegment < ApplicationRecord
    has_many :edges
    belongs_to :road

    before_validation :generate_road, on: :create

    private

    def generate_road
        self.road ||= Road.new
    end
end
