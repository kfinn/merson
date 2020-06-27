json.(tile, :id, :x, :y)

json.tile_variant do
    json.(tile.tile_variant, :id)
end

json.orientation do
    json.(tile.orientation, :id)
end

Orientation.all.each do |orientation|
    json.set! orientation.edge_relation_name do
        json.partial! tile.edge_with_relative_orientation(orientation)
    end
end
