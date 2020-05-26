class CityRegion < ApplicationRecord
    has_many :edges
    belongs_to :city

    before_validation :generate_city, on: :create

    private

    def generate_city
        self.city ||= City.new
    end
end
