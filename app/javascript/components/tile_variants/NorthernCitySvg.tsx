import React from 'react';
import { CityEdge, FieldEdge } from '../../models/Edge';
import { ORIENTATION_NORTH } from '../../models/Orientation';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import ThreeEdgeRegion from './shared/ThreeEdgeRegion';
import TileVariantProps from './TileVariantProps';

export default function NorthernCitySvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion
    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <SingleEdgeRegion
            tileFeature={cityRegion}
            orientation={ORIENTATION_NORTH}
        />
        <ThreeEdgeRegion
            tileFeature={fieldRegion}
            orientation={ORIENTATION_NORTH}
        />
    </g>
}
