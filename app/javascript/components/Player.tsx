import pluralize from 'pluralize';
import React, { useContext } from "react";
import { CurrentPlayerContext } from "./Game";
import { meeplePlayClassName } from './tile_variants/shared/Meeple';
import { MeeplePlay } from './TileSvg';

export interface Player {
    id: number
    name: string
    score: number
    remainingMeeples: number
}

export default function Player({ player }: { player: Player }) {
    const currentPlayer = useContext(CurrentPlayerContext)

    return <div>
        <h4 className={`player-name ${meeplePlayClassName({ player })}`}>
            {player.name}
            {
                player.id == currentPlayer.id && ' (you)'
            }
        </h4>
        <div>
            {player.score} {pluralize('point', player.score)}
        </div>
        <div>
            {player.remainingMeeples} {pluralize('meeple', player.remainingMeeples)} remaining
        </div>
    </div>
}
