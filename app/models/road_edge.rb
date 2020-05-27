class RoadEdge < Edge
    validates :road_segment, :left_field_region, :right_field_region, presence: true
    before_validation :generate_features, on: :create

    private

    def generate_features
        self.left_field_region ||= FieldRegion.new
        self.right_field_region ||= FieldRegion.new
        self.road_segment ||= RoadSegment.new
    end
end
