import React from 'react';
import { Edge } from '../models/Edge';
import { Orientation } from '../models/Orientation';
import { TILE_RADIUS, TILE_SIZE } from './PlayedTileSvg';
import TileCityRegionsSvg from './TileCityRegionsSvg';
import { CityRegion } from './TileCityRegionSvg';
import TileFieldRegionsSvg from './TileFieldRegionsSvg';
import TileRoadSegmentsSvg from './TileRoadSegmentsSvg';

export interface Tile {
    id: number
    orientation: Orientation
    fieldRegions: FieldRegion[]
    cityRegions: CityRegion[]
    roadSegments: RoadSegment[]
}

export interface FieldRegion {
    id: number
    edges: Edge[]
}

export interface RoadSegment {
    id: number
    edges: Edge[]
}

export default function TileSvg({ tile }: { tile: Tile }) {
    return (
        <React.Fragment>
            <rect x={-TILE_RADIUS} y={-TILE_RADIUS} width={TILE_SIZE} height={TILE_SIZE} />
            <TileCityRegionsSvg cityRegions={tile.cityRegions}>
                <TileRoadSegmentsSvg roadSegments={tile.roadSegments}>
                    <TileFieldRegionsSvg fieldRegions={tile.fieldRegions} />
                </TileRoadSegmentsSvg>
            </TileCityRegionsSvg>
        </React.Fragment>
    )
}
