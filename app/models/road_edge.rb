class RoadEdge < Edge
    belongs_to :road_segment

    has_one :left_edge_field_region, -> { left_of_road }, class_name: 'EdgeFieldRegion', foreign_key: :edge_id
    has_one :left_field_region, through: :left_edge_field_region, source: :field_region

    has_one :right_edge_field_region, -> { right_of_road }, class_name: 'EdgeFieldRegion', foreign_key: :edge_id
    has_one :right_field_region, through: :right_edge_field_region, source: :field_region

    before_validation :generate_features, on: :create

    private

    def generate_features
        self.left_field_region ||= FieldRegion.new
        self.right_field_region ||= FieldRegion.new
        self.road_segment ||= RoadSegment.new
    end
end
