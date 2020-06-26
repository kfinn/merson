json.(current_player, :id, :name)

json.status do
    json.actor(
        if current_player.game.turn.nil?
            'someone'
        elsif current_player.game.turn.player == current_player
            'you'
        else
            current_player.game.turn.player.name
        end
    )

    json.action(
        if !current_player.game.started?
            'start the game'
        else
            'play a tile'
        end
    )
end

json.game do
    json.partial! current_player.game
end

json.available_next_tile_positions current_player.available_next_tile_positions do |position|
    json.(position, :x, :y)
end
