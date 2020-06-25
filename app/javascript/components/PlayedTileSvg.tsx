import React from 'react';
import TileSvg, { Tile } from './TileSvg';
import { orientationTransform } from '../models/Orientation';

export interface PlayedTile extends Tile {
    x: number
    y: number
}

export const TILE_SIZE = 100
export const TILE_RADIUS = TILE_SIZE / 2

export default function PlayedTileSvg({ playedTile }: { playedTile: PlayedTile }) {
    const x = playedTile.x * TILE_SIZE
    const y = playedTile.y * TILE_SIZE

    return (
        <g transform={`translate(${x},${y}) ${orientationTransform(playedTile.orientation)}`}>
            <TileSvg tile={playedTile} />
        </g>
    )
}
