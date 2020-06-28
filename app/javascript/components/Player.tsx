import React, { useContext } from "react";
import { CurrentPlayerContext } from "./Game";

export interface Player {
    id: number
    name: string
}

export default function Player({ player }: { player: Player }) {
    const currentPlayer = useContext(CurrentPlayerContext)

    return <div>
        <h4>
            {player.name}
            {
                player.id == currentPlayer.id && ' (you)'
            }
        </h4>
    </div>
}
