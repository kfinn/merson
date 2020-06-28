import React from "react";
import { Game } from "./Game";
import _ from "lodash";
import Player from "./Player";

export default function PlayerList({ game }: {  game: Game }) {
    return <div>
        <h3>Players</h3>
        {
            _.map(game.players, (player) => (
                <Player player={player} key={player.id} />
            ))
        }
    </div>
}
