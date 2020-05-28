import React from 'react';
import BoardSvg from './BoardSvg';
import { PlayedTile } from './PlayedTileSvg';
import { Tile } from './TileSvg';
import { Point } from '../models/Point';
import { RecoilRoot } from 'recoil';

export interface Game {
    playedTiles: PlayedTile[]
    nextTile: Tile
    availableNextTilePositions: Point[]
}

export default function Game({ game }: { game: Game }) {
    return <RecoilRoot>
        <BoardSvg game={game} />
    </RecoilRoot>
}
