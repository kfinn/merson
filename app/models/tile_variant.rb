class TileVariant < ActiveHash::Base
    include ActiveHash::Enum
    enum_accessor :id
    self.data = [
        {
            id: 'northern_city',
            count: 5,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::NORTH,
                    city_region: city_region
                )

                field_region = FieldRegion.new city_region_borders: [city_region_border]
                [Orientation::EAST, Orientation::SOUTH, Orientation::WEST].each do |orientation|
                    edges << FieldEdge.new(
                        orientation: orientation,
                        singular_field_region: field_region
                    )
                end
            end
        }, {
            id: 'single_east_west_city',
            count: 1,
            build_edges_proc: lambda do |edges|
                north_city_region_border = CityRegionBorder.new
                south_city_region_border = CityRegionBorder.new

                city_region = CityRegion.new city_region_borders: [north_city_region_border, south_city_region_border]
                [Orientation::EAST, Orientation::WEST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                north_field_region = FieldRegion.new city_region_borders: [north_city_region_border]
                edges << FieldEdge.new(
                    orientation: Orientation::NORTH,
                    singular_field_region: north_field_region
                )

                south_field_region = FieldRegion.new city_region_borders: [south_city_region_border]
                edges << FieldEdge.new(
                    orientation: Orientation::SOUTH,
                    singular_field_region: south_field_region
                )
            end
        }, {
            id: 'single_north_east_city',
            count: 3,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]
                [Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                field_region = FieldRegion.new city_region_borders: [city_region_border]
                [Orientation::SOUTH, Orientation::WEST].each do |orientation|
                    edges << FieldEdge.new(
                        orientation: orientation,
                        singular_field_region: field_region
                    )
                end
            end
        }, {
            id: 'two_north_south_cities',
            count: 3,
            build_edges_proc: lambda do |edges|
                north_city_region_border = CityRegionBorder.new
                north_city_region = CityRegion.new city_region_borders: [north_city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::NORTH,
                    city_region: north_city_region
                )

                south_city_region_border = CityRegionBorder.new
                south_city_region = CityRegion.new city_region_borders: [south_city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::SOUTH,
                    city_region: south_city_region
                )

                field_region = FieldRegion.new city_region_borders: [north_city_region_border, south_city_region_border]
                [Orientation::EAST, Orientation::WEST].each do |orientation|
                    edges << FieldEdge.new(
                        orientation: orientation,
                        singular_field_region: field_region
                    )
                end
            end
        }, {
            id: 'two_north_east_cities',
            count: 2,
            build_edges_proc: lambda do |edges|
                north_city_region_border = CityRegionBorder.new
                north_city_region = CityRegion.new city_region_borders: [north_city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::NORTH,
                    city_region: north_city_region
                )

                east_city_region_border = CityRegionBorder.new
                east_city_region = CityRegion.new city_region_borders: [east_city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::EAST,
                    city_region: east_city_region
                )

                field_region = FieldRegion.new city_region_borders: [north_city_region_border, east_city_region_border]
                [Orientation::SOUTH, Orientation::WEST].each do |orientation|
                    edges << FieldEdge.new(
                        orientation: orientation,
                        singular_field_region: field_region
                    )
                end
            end
        }, {
            id: 'single_east_west_city_with_shield',
            count: 2,
            build_edges_proc: lambda do |edges|
                north_city_region_border = CityRegionBorder.new
                south_city_region_border = CityRegionBorder.new

                city_region = CityRegion.new city_region_borders: [north_city_region_border, south_city_region_border], shield: true
                [Orientation::EAST, Orientation::WEST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                north_field_region = FieldRegion.new city_region_borders: [north_city_region_border]
                edges << FieldEdge.new(
                    orientation: Orientation::NORTH,
                    singular_field_region: north_field_region
                )

                south_field_region = FieldRegion.new city_region_borders: [south_city_region_border]
                edges << FieldEdge.new(
                    orientation: Orientation::SOUTH,
                    singular_field_region: south_field_region
                )
            end
        }, {
            id: 'single_north_east_city_with_shield',
            count: 2,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border], shield: true
                [Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                field_region = FieldRegion.new city_region_borders: [city_region_border]
                [Orientation::SOUTH, Orientation::WEST].each do |orientation|
                    edges << FieldEdge.new(
                        orientation: orientation,
                        singular_field_region: field_region
                    )
                end
            end
        }, {
            id: 'single_west_north_east_city',
            count: 3,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]
                [Orientation::WEST, Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                edges << FieldEdge.new(
                    orientation: Orientation::SOUTH,
                    singular_field_region: FieldRegion.new(city_region_borders: [city_region_border])
                )
            end
        }, {
            id: 'single_west_north_east_city_with_shield',
            count: 1,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border], shield: true
                [Orientation::WEST, Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                edges << FieldEdge.new(
                    orientation: Orientation::SOUTH,
                    singular_field_region: FieldRegion.new(city_region_borders: [city_region_border])
                )
            end
        }, {
            id: 'single_all_sides_city_with_shield',
            count: 1,
            build_edges_proc: lambda do |edges|
                city_region = CityRegion.new(shield: true)
                Orientation.all.each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end
            end
        }, {
            id: 'straight_road',
            count: 8,
            build_edges_proc: lambda do |edges|
                north_field_region = FieldRegion.new
                south_field_region = FieldRegion.new
                road_segment = RoadSegment.new

                edges << FieldEdge.new(
                    orientation: Orientation::NORTH,
                    singular_field_region: north_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::EAST,
                    left_field_region: north_field_region,
                    right_field_region: south_field_region,
                    road_segment: road_segment
                )

                edges << FieldEdge.new(
                    orientation: Orientation::SOUTH,
                    singular_field_region: south_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: south_field_region,
                    right_field_region: north_field_region,
                    road_segment: road_segment
                )
            end
        }, {
            id: 'corner_road',
            count: 9,
            build_edges_proc: lambda do |edges|
                northeast_field_region = FieldRegion.new
                southwest_field_region = FieldRegion.new
                road_segment = RoadSegment.new

                edges << FieldEdge.new(
                    orientation: Orientation::NORTH,
                    singular_field_region: northeast_field_region
                )

                edges << FieldEdge.new(
                    orientation: Orientation::EAST,
                    singular_field_region: northeast_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: northeast_field_region,
                    right_field_region: southwest_field_region,
                    road_segment: road_segment
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: southwest_field_region,
                    right_field_region: northeast_field_region,
                    road_segment: road_segment
                )
            end
        }, {
            id: 'northern_city_with_straight_road',
            count: 3,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::NORTH,
                    city_region: city_region
                )

                north_field_region = FieldRegion.new city_region_borders: [city_region_border]
                south_field_region = FieldRegion.new
                road_segment = RoadSegment.new

                edges << RoadEdge.new(
                    orientation: Orientation::EAST,
                    left_field_region: north_field_region,
                    right_field_region: south_field_region,
                    road_segment: road_segment
                )

                edges << FieldEdge.new(
                    orientation: Orientation::SOUTH,
                    singular_field_region: south_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: south_field_region,
                    right_field_region: north_field_region,
                    road_segment: road_segment
                )
            end
        }, {
            id: 'northern_city_with_southwest_corner_road',
            count: 3,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::NORTH,
                    city_region: city_region
                )

                northeast_field_region = FieldRegion.new city_region_borders: [city_region_border]
                southwest_field_region = FieldRegion.new
                road_segment = RoadSegment.new

                edges << FieldEdge.new(
                    orientation: Orientation::EAST,
                    singular_field_region: northeast_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: northeast_field_region,
                    right_field_region: southwest_field_region,
                    road_segment: road_segment
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: southwest_field_region,
                    right_field_region: northeast_field_region,
                    road_segment: road_segment
                )
            end
        }, {
            id: 'northern_city_with_southeast_corner_road',
            count: 3,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]
                edges << CityEdge.new(
                    orientation: Orientation::NORTH,
                    city_region: city_region
                )

                northwest_field_region = FieldRegion.new city_region_borders: [city_region_border]
                southeast_field_region = FieldRegion.new
                road_segment = RoadSegment.new

                edges << RoadEdge.new(
                    orientation: Orientation::EAST,
                    left_field_region: northwest_field_region,
                    right_field_region: southeast_field_region,
                    road_segment: road_segment
                )

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: southeast_field_region,
                    right_field_region: northwest_field_region,
                    road_segment: road_segment
                )

                edges << FieldEdge.new(
                    orientation: Orientation::WEST,
                    singular_field_region: northwest_field_region
                )
            end
        }, {
            id: 'single_west_north_east_city_with_road',
            count: 1,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]

                [Orientation::WEST, Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: FieldRegion.new(city_region_borders: [city_region_border]),
                    right_field_region: FieldRegion.new(city_region_borders: [city_region_border])
                )
            end
        }, {
            id: 'single_west_north_east_city_with_shield_and_road',
            count: 2,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border], shield: true

                [Orientation::WEST, Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: FieldRegion.new(city_region_borders: [city_region_border]),
                    right_field_region: FieldRegion.new(city_region_borders: [city_region_border])
                )
            end
        }, {
            id: 'single_north_east_city_with_corner_road',
            count: 3,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border]
                northeast_field_region = FieldRegion.new city_region_borders: [city_region_border]
                southwest_field_region = FieldRegion.new
                road_segment = RoadSegment.new

                [Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: northeast_field_region,
                    right_field_region: southwest_field_region,
                    road_segment: road_segment
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: southwest_field_region,
                    right_field_region: northeast_field_region,
                    road_segment: road_segment
                )
            end
        }, {
            id: 'single_north_east_city_with_shield_and_corner_road',
            count: 2,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                city_region = CityRegion.new city_region_borders: [city_region_border], shield: true
                northeast_field_region = FieldRegion.new city_region_borders: [city_region_border]
                southwest_field_region = FieldRegion.new
                road_segment = RoadSegment.new

                [Orientation::NORTH, Orientation::EAST].each do |orientation|
                    edges << CityEdge.new(
                        orientation: orientation,
                        city_region: city_region
                    )
                end

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: northeast_field_region,
                    right_field_region: southwest_field_region,
                    road_segment: road_segment
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: southwest_field_region,
                    right_field_region: northeast_field_region,
                    road_segment: road_segment
                )
            end
        }, {
            id: 'three_roads',
            count: 4,
            build_edges_proc: lambda do |edges|
                north_field_region = FieldRegion.new
                southeast_field_region = FieldRegion.new
                southwest_field_region = FieldRegion.new

                edges << FieldEdge.new(
                    orientation: Orientation::NORTH,
                    singular_field_region: north_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::EAST,
                    left_field_region: north_field_region,
                    right_field_region: southeast_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: southeast_field_region,
                    right_field_region: southwest_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: southwest_field_region,
                    right_field_region: north_field_region
                )
            end
        }, {
            id: 'city_with_three_roads',
            count: 3,
            build_edges_proc: lambda do |edges|
                city_region_border = CityRegionBorder.new
                north_field_region = FieldRegion.new city_region_borders: [city_region_border]
                southeast_field_region = FieldRegion.new
                southwest_field_region = FieldRegion.new

                edges << CityEdge.new(
                    orientation: Orientation::NORTH,
                    city_region: CityRegion.new(city_region_borders: [city_region_border])
                )

                edges << RoadEdge.new(
                    orientation: Orientation::EAST,
                    left_field_region: north_field_region,
                    right_field_region: southeast_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: southeast_field_region,
                    right_field_region: southwest_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: southwest_field_region,
                    right_field_region: north_field_region
                )
            end
        }, {
            id: 'four_roads',
            count: 1,
            build_edges_proc: lambda do |edges|
                northwest_field_region = FieldRegion.new
                northeast_field_region = FieldRegion.new
                southeast_field_region = FieldRegion.new
                southwest_field_region = FieldRegion.new

                edges << RoadEdge.new(
                    orientation: Orientation::NORTH,
                    left_field_region: northwest_field_region,
                    right_field_region: northeast_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::EAST,
                    left_field_region: northeast_field_region,
                    right_field_region: southeast_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::SOUTH,
                    left_field_region: southeast_field_region,
                    right_field_region: southwest_field_region
                )

                edges << RoadEdge.new(
                    orientation: Orientation::WEST,
                    left_field_region: southwest_field_region,
                    right_field_region: northwest_field_region
                )
            end
        }
    ]

    def build(tile)
        tile.edges = [].tap { |edges| self.build_edges_proc.call(edges) }
    end

    def self.for_deck
        all.flat_map { |variant| Array.new(variant.count) { variant } }
    end

    def self.starting_tile_variant
        NORTHERN_CITY_WITH_STRAIGHT_ROAD
    end
end
