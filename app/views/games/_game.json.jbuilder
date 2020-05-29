json.(game, :id, :started_at)

json.played_tiles(
    game.played_tiles.includes(
        city_regions: :edges,
        field_regions: :edges,
        road_segments: :edges
    )
) do |tile|
    json.(tile, :id)

    if tile.x.present?
        json.(tile, :x)
    end

    if tile.y.present?
        json.(tile, :y)
    end

    json.orientation do
        json.(tile.orientation, :id)
    end

    json.field_regions tile.field_regions do |field_region|
        json.(field_region, :id)
        json.edges field_region.edges do |edge|
            json.(edge, :id, :type)
            json.orientation do
                json.(edge.orientation, :id)
            end
        end
    end

    json.city_regions tile.city_regions do |city_region|
        json.(city_region, :id)
        json.edges city_region.edges do |edge|
            json.(edge, :id, :type)
            json.orientation do
                json.(edge.orientation, :id)
            end
        end
    end

    json.road_segments tile.road_segments do |road_segment|
        json.(road_segment, :id)
        json.edges road_segment.edges do |edge|
            json.(edge, :id, :type)
            json.orientation do
                json.(edge.orientation, :id)
            end
        end
    end
end

json.next_tile do
    json.(game.next_tile, :id)

    json.orientation do
        json.(game.next_tile.orientation, :id)
    end

    json.field_regions game.next_tile.field_regions.includes(:edges) do |field_region|
        json.(field_region, :id)
        json.edges field_region.edges do |edge|
            json.(edge, :id, :type)
            json.orientation do
                json.(edge.orientation, :id)
            end
        end
    end

    json.city_regions game.next_tile.city_regions.includes(:edges) do |city_region|
        json.(city_region, :id)
        json.edges city_region.edges do |edge|
            json.(edge, :id, :type)
            json.orientation do
                json.(edge.orientation, :id)
            end
        end
    end

    json.road_segments game.next_tile.road_segments.includes(:edges) do |road_segment|
        json.(road_segment, :id)
        json.edges road_segment.edges do |edge|
            json.(edge, :id, :type)
            json.orientation do
                json.(edge.orientation, :id)
            end
        end
    end
end

json.available_next_tile_positions game.available_next_tile_positions do |position|
    json.(position, :x, :y)
end
