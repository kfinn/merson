class CityEdge < Edge
    belongs_to :city_region

    before_validation :generate_city_region, on: :create

    private

    def generate_city_region
        self.city_region ||= CityRegion.new
    end
end
