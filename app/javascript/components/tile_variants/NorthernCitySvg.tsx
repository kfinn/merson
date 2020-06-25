import React from 'react';
import { ORIENTATION_NORTH } from '../../models/Orientation';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import ThreeEdgeRegion from './shared/ThreeEdgeRegion';

export default function NorthernCitySvg() {
    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <ThreeEdgeRegion className="field" orientation={ORIENTATION_NORTH} />
    </g>
}
