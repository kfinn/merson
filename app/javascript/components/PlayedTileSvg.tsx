import React from 'react';
import TileSvg, { Tile } from './TileSvg';
import { Orientation, OrientationId } from '../models/Orientation';

export interface PlayedTile extends Tile {
    x: number
    y: number
}

export const TILE_SIZE = 100
export const TILE_RADIUS = TILE_SIZE / 2

export function transformForOrientation({ id }: Orientation) {
    switch (id) {
        case OrientationId.NORTH:
            return ''
        case OrientationId.EAST:
            return 'rotate(90)'
        case OrientationId.SOUTH:
            return 'rotate(180)'
        case OrientationId.WEST:
            return 'rotate(270)'
    }
}

export default function PlayedTileSvg({ playedTile }: { playedTile: PlayedTile }) {
    const x = playedTile.x * TILE_SIZE
    const y = playedTile.y * TILE_SIZE

    return (
        <g transform={`translate(${x},${y}) ${transformForOrientation(playedTile.orientation)}`}>
            <TileSvg tile={playedTile} />
        </g>
    )
}
