class FieldRegion < ApplicationRecord
    has_many :edge_field_regions
    has_many :edges, through: :edge_field_regions
    belongs_to :field

    before_validation :generate_field, on: :create

    private

    def generate_field
        self.field ||= Field.new
    end
end
