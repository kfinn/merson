import React from 'react';
import BoardSvg from './BoardSvg';
import { PlayedTile } from './PlayedTileSvg';
import { Tile } from './TileSvg';

export interface Game {
    playedTiles: PlayedTile[]
    nextTile: Tile
}

export default function Game({ game }: { game: Game }) {
    return <BoardSvg playedTiles={game.playedTiles} />
}
