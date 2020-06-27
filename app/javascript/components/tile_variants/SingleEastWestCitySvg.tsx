import React from 'react';
import { CityEdge, FieldEdge } from '../../models/Edge';
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from '../../models/Orientation';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import TwoEdgeCrossTileRegion, { Axis } from './shared/TwoEdgeCrossTileRegion';
import TileVariantProps from './TileVariantProps';

export default function SingleEastWestCitySvg({ tile }: TileVariantProps) {
    const northFieldRegion = (tile.northEdge as FieldEdge).fieldRegion
    const cityRegion = (tile.eastEdge as CityEdge).cityRegion
    const southFieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <SingleEdgeRegion
            orientation={ORIENTATION_NORTH}
            tileFeature={northFieldRegion}
        />
        <TwoEdgeCrossTileRegion
            axis={Axis.HORIZONTAL}
            tileFeature={cityRegion}
        />
        <SingleEdgeRegion
            orientation={ORIENTATION_SOUTH}
            tileFeature={southFieldRegion}
        />
    </g>
}
