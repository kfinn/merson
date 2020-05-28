import React from 'react';
import BoardSvg from './BoardSvg';
import { PlayedTile } from './PlayedTileSvg';
import { Tile } from './TileSvg';
import { Point } from '../models/Point';

export interface Game {
    playedTiles: PlayedTile[]
    nextTile: Tile
    availableNextTilePositions: Point[]
}

export default function Game({ game }: { game: Game }) {
    return <BoardSvg playedTiles={game.playedTiles} availableNextTilePositions={game.availableNextTilePositions} />
}
