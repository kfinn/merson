import React from 'react';
import { Corner } from '../../../models/Corner';
import { cornerTransform } from './TwoEdgeCityRegion';

export default function TwoEdgeFieldRegion({ corner }: { corner: Corner }) {
    return <path
        className="field"
        d="M -50 -50 L 50 -50 L 50 50 C -25 25 -25 25 -50 -50"
        transform={cornerTransform(corner)}
    />
}

