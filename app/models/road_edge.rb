class RoadEdge < Edge
    has_one :road, through: :road_segment
    has_one :left_field, through: :left_field_region, source: :field
    has_one :right_field, through: :right_field_region, source: :field

    validates :road_segment, :left_field_region, :right_field_region, presence: true
    before_validation :generate_features, on: :create

    def merge_edge_features!(newer_edge)
        newer_edge.road_segment.update! road: road
        newer_edge.left_field_region.update! field: right_field
        newer_edge.right_field_region.update! field: left_field
    end

    private

    def generate_features
        self.left_field_region ||= FieldRegion.new
        self.right_field_region ||= FieldRegion.new
        self.road_segment ||= RoadSegment.new
    end
end
