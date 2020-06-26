import React from "react";
import { CurrentPlayer } from "./Game";

export default function CurrentPlayerStatus({ currentPlayer }: { currentPlayer: CurrentPlayer }) {
    return <div>
        Waiting for {currentPlayer.status.actor} to {currentPlayer.status.action}.
    </div>
}
