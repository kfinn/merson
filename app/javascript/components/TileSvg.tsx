import React from 'react';
import TileCityRegionsSvg from './TileCityRegionsSvg';
import TileConstrainedByCityRegionsSvg from './TileConstrainedByCityRegionsSvg';
import { TILE_SIZE } from './PlayedTileSvg';
import { CityRegion } from './TileCityRegionSvg';
import { Edge } from '../models/Edge';
import { Orientation } from '../models/Orientation';

export interface Tile {
    id: number
    orientation: Orientation
    fieldRegions: FieldRegion[]
    cityRegions: CityRegion[]
    roadSegments: RoadSegment[]
}

interface FieldRegion {
    id: number
    edges: Edge[]
}

interface RoadSegment {
    id: number
    edges: Edge[]
}

export default function TileSvg({ tile }: { tile: Tile }) {
    return (
        <React.Fragment>
            <rect x={-TILE_SIZE / 2} y={-TILE_SIZE / 2} width={TILE_SIZE} height={TILE_SIZE} />
            <TileCityRegionsSvg cityRegions={tile.cityRegions}>
                <TileConstrainedByCityRegionsSvg tile={tile} />
            </TileCityRegionsSvg>
        </React.Fragment>
    )
}
