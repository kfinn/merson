class Field < ApplicationRecord
    has_many :field_regions

    def occupied?
        field_regions.any?(&:has_meeple_play?)
    end

    def merge!(field)
        return if self == field
        transaction do
            field_regions.find_each do |field_region|
                field_region.update! field: field
            end
            destroy!
        end
    end
end
