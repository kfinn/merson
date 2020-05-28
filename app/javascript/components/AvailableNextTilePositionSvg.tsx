import React from 'react';
import { Point } from "../models/Point";
import { TILE_RADIUS, TILE_SIZE } from './PlayedTileSvg';
import { useSetRecoilState } from 'recoil';
import selectedAvailableNextTilePosition from '../models/selectedAvailableNextTilePosition';

export default function AvailableNextTilePositionSvg({ position }: { position: Point }) {
    const setSelectedAvailableNextTilePosition = useSetRecoilState(selectedAvailableNextTilePosition)

    return <rect
        x={-TILE_RADIUS}
        y={-TILE_RADIUS}
        width={TILE_SIZE}
        height={TILE_SIZE}
        transform={`translate(${position.x * TILE_SIZE}, ${position.y * TILE_SIZE})`}
        fill="lightgray"
        onClick={() => { setSelectedAvailableNextTilePosition(position) }}
        className="available-next-tile-position"
    />
}
