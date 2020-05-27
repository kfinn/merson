json.(tile, :id)

if tile.x.present?
    json.(tile, :x)
end

if tile.y.present?
    json.(tile, :y)
end

json.orientation do
    json.partial! tile.orientation
end

json.field_regions tile.field_regions.includes(:edges) do |field_region|
    json.(field_region, :id)
    json.edges field_region.edges do |edge|
        json.(edge, :id, :type)
        json.orientation do
            json.partial! edge.orientation
        end
    end
end

json.city_regions tile.city_regions.includes(:edges) do |city_region|
    json.(city_region, :id)
    json.edges city_region.edges do |edge|
        json.(edge, :id, :type)
        json.orientation do
            json.partial! edge.orientation
        end
    end
end

json.road_segments tile.road_segments.includes(:edges) do |road_segment|
    json.(road_segment, :id)
    json.edges road_segment.edges do |edge|
        json.(edge, :id, :type)
        json.orientation do
            json.partial! edge.orientation
        end
    end
end
