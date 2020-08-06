json.(tile, :id, :x, :y)

json.tile_variant do
    json.(tile.tile_variant, :id)
end

json.orientation do
    json.(tile.orientation, :id)
end

tile.edges.each do |edge|
    json.set! edge.orientation.edge_relation_name do
        json.partial! edge
    end
end
