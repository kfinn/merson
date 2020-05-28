json.(game, :id, :started_at)

json.played_tiles(
    game.played_tiles.includes(
        field_regions: :edges,
        city_regions: :edges,
        road_segments: :edges
    )
) do |played_tile|
    json.partial! played_tile
end

json.next_tile do
    json.partial! game.next_tile
end

json.available_next_tile_positions game.available_next_tile_positions do |position|
    json.(position, :x, :y)
end
