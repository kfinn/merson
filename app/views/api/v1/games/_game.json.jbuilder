json.(game, :id, :started_at)

json.played_tiles game.played_tiles do |tile|
    json.partial! tile
end

if game.turn
    json.turn do
        json.tile do
            json.partial! game.turn.tile
        end
    end
end

json.players game.players do |player|
    json.(
        player,
        :id,
        :name
    )
end
