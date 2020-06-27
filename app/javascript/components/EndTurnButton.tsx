import { Game, AvailableActionsContext } from "./Game";
import Api from "../models/Api";
import { useContext } from "react";
import React from "react";

export default function EndTurnButton({ game }: { game: Game }) {
    const { canEndTurn } = useContext(AvailableActionsContext)

    const onClick = () => {
        Api.post(`games/${game.id}/current_turn_ends`)
    }

    return <button
        onClick={canEndTurn ? onClick : null}
        disabled={!canEndTurn}
    >
        End Turn
    </button>
}
