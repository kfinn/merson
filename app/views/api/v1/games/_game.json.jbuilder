json.(game, :id, :started_at, :upcoming_tiles_count)

json.played_tiles(
    game
    .played_tiles
    .includes(
        edges: {
            city_region: [:meeple_play],
            singular_field_region: [:meeple_play],
            left_field_region: [:meeple_play],
            right_field_region: [:meeple_play],
            road_segment: [:meeple_play]
        }
    )
) do |tile|
    json.partial! tile
end

if game.turn && !game.turn.tile.played?
    json.turn do
        json.tile do
            json.partial! game.turn.tile
        end
    end
end

json.players(
    game
    .players
    .ordered
    .select('*')
    .select_remaining_meeples
) do |player|
    json.partial! player
end
