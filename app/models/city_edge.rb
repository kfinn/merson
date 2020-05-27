class CityEdge < Edge
    validates :city_region, presence: true
    before_validation :generate_city_region, on: :create

    private

    def generate_city_region
        self.city_region ||= CityRegion.new
    end
end
