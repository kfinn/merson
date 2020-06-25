import React from 'react';
import { Corner } from '../../models/Corner';
import TwoEdgeCityRegion from './shared/TwoEdgeCityRegion';
import TwoEdgeFieldRegion from './shared/TwoEdgeFieldRegion';

export default function SingleNorthEastCitySvg() {
    return <g>
        <TwoEdgeCityRegion corner={Corner.NORTH_EAST} />
        <TwoEdgeFieldRegion corner={Corner.SOUTH_WEST} />
    </g>
}
