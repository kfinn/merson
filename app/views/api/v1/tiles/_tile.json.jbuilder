json.(tile, :id, :x, :y)

json.tile_variant do
    json.(tile.tile_variant, :id)
end

json.orientation do
    json.(tile.orientation, :id)
end
