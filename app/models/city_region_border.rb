class CityRegionBorder < ApplicationRecord
    belongs_to :city_region
    has_one :city, through: :city_region

    belongs_to :field_region
end
