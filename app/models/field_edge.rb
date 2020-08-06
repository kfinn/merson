class FieldEdge < Edge
    has_one :field, through: :singular_field_region

    validates :singular_field_region, presence: true
    before_validation :generate_field_region, on: :create

    def merge_edge_features!(newer_edge)
        newer_edge.field.merge! field
    end

    private

    def generate_field_region
        self.singular_field_region ||= FieldRegion.new
    end
end
