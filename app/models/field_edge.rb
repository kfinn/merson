class FieldEdge < Edge
    has_one :edge_field_region, foreign_key: :edge_id
    has_one :field_region, through: :edge_field_region

    before_validation :generate_field_region, on: :create

    private

    def generate_field_region
        self.field_region ||= FieldRegion.new
    end
end
