import React from 'react';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from '../../models/Orientation';
import TwoEdgeCrossTileRegion, { Axis } from './shared/TwoEdgeCrossTileRegion';

export default function SingleEastWestCitySvg() {
    return <g>
        <SingleEdgeRegion className="field" orientation={ORIENTATION_NORTH} />
        <TwoEdgeCrossTileRegion className="city" axis={Axis.HORIZONTAL} />
        <SingleEdgeRegion className="field" orientation={ORIENTATION_SOUTH} />
    </g>
}
