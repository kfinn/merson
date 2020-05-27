import React from 'react';
import { Orientation } from './Game';

export interface Tile {
    id: number
    orientation: Orientation
    fieldRegions: FieldRegion[]
    cityRegions: CityRegion[]
    roadSegments: RoadSegment[]
}

export interface PlayedTile extends Tile {
    x: number
    y: number
}

interface FieldRegion {
    id: number
    edges: Edge[]
}

interface CityRegion {
    id: number
    edges: Edge[]
}

interface RoadSegment {
    id: number
    edges: Edge[]
}

interface Edge {
    id: number
    type: EdgeType
    orientation: Orientation
}

enum EdgeType {
    CITY_EDGE = 'CityEdge',
    FIELD_EDGE = 'FieldEdge',
    ROAD_EDGE = 'RoadEdge'
}

export const TILE_SIZE = 100
const TILE_RADIUS = TILE_SIZE / 2

export default function PlayedTileSvg({ playedTile }: { playedTile: PlayedTile }) {
    const x = playedTile.x * TILE_SIZE - TILE_RADIUS
    const y = playedTile.y * TILE_SIZE - TILE_RADIUS

    return (
        <rect
            x={x}
            y={y}
            width={TILE_SIZE}
            height={TILE_SIZE}
        />
    )
}
