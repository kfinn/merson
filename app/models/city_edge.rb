class CityEdge < Edge
    has_one :city, through: :city_region

    validates :city_region, presence: true
    before_validation :generate_city_region, on: :create

    def merge_edge_features!(newer_edge)
        newer_edge.city_region.update! city: city
    end

    private

    def generate_city_region
        self.city_region ||= CityRegion.new
    end
end
