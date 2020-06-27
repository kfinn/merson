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
        elsif !current_player.game.turn.tile_played?
            'play a tile'
        elsif !current_player.game.turn.meeple_played?
            'play a meeple or end the turn'
        end
    )
end

json.game do
    json.partial! current_player.game
end

json.available_next_tile_positions current_player.available_next_tile_positions do |position|
    json.(position, :x, :y)
end

json.available_field_regions current_player.available_field_regions do |field_region|
    json.partial! field_region
end

json.can_end_turn current_player.can_end_turn?
