import React from "react"
import { Game } from "./Game"
import Api from "../models/Api"

export default function StartGameButton({ game } : { game: Game }) {
    const onClick = () => {
        Api.post(`games/${game.id}/game_start`)
    }

    return <button onClick={onClick}>Start Game</button>
}
