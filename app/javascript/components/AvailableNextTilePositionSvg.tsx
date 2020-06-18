import React from 'react';
import { Point } from "../models/Point";
import { TILE_RADIUS, TILE_SIZE } from './PlayedTileSvg';

interface Props {
    position: Point
    onClick: () => void
}

export default function AvailableNextTilePositionSvg({ position, onClick }: Props) {
    return <rect
        x={-TILE_RADIUS}
        y={-TILE_RADIUS}
        width={TILE_SIZE}
        height={TILE_SIZE}
        transform={`translate(${position.x * TILE_SIZE}, ${position.y * TILE_SIZE})`}
        fill="lightgray"
        onClick={onClick}
        className="available-next-tile-position"
    />
}
