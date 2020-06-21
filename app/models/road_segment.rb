class RoadSegment < ApplicationRecord
    has_many :edges
    belongs_to :road

    before_validation :generate_road, on: :create

    validate :must_not_have_more_than_two_edges

    private

    def generate_road
        self.road ||= Road.new
    end

    def must_not_have_more_than_two_edges
        errors[:edges] << 'cannot have more than two edges' unless edges.size <= 2
    end
end
