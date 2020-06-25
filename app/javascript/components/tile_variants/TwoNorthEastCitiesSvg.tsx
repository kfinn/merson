import React from 'react';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import { ORIENTATION_NORTH, ORIENTATION_EAST } from '../../models/Orientation';

export default function TwoNorthEastCitiesSvg() {
    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <SingleEdgeRegion className="city" orientation={ORIENTATION_EAST} />
        <path d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 C 12.5 -12.5, 12.5 12.5, 50 50 L -50 50 L -50 -50" className="field" />
    </g>
}

