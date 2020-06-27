import React from 'react';
import { FieldEdge } from '../../models/Edge';
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from '../../models/Orientation';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import { useCreateFieldRegionMeeplePlay } from './shared/tileFeatureActions';
import TwoEdgeCrossTileRegion, { Axis } from './shared/TwoEdgeCrossTileRegion';
import TileVariantProps from './TileVariantProps';


export default function SingleEastWestCitySvg({ tile }: TileVariantProps) {
    const northFieldRegion = (tile.northEdge as FieldEdge).fieldRegion
    // const cityRegion = (tile.eastEdge as CityEdge).cityRegion
    const southFieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <SingleEdgeRegion
            className="field"
            orientation={ORIENTATION_NORTH}
            onClick={useCreateFieldRegionMeeplePlay(northFieldRegion)}
        />
        <TwoEdgeCrossTileRegion className="city" axis={Axis.HORIZONTAL} />
        <SingleEdgeRegion
            className="field"
            orientation={ORIENTATION_SOUTH}
            onClick={useCreateFieldRegionMeeplePlay(southFieldRegion)}
        />
    </g>
}
