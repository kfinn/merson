import React from 'react';
import { Corner } from '../../../models/Corner';
import { cornerTransform } from './TwoEdgeCityRegion';
import { fieldClassNames } from './tileFeatureActions';

export default function TwoEdgeFieldRegion({ corner, onClick }: { corner: Corner, onClick?: () => void }) {
    return <path
        className={fieldClassNames(onClick)}
        d="M -50 -50 L 50 -50 L 50 50 C -25 25 -25 25 -50 -50"
        transform={cornerTransform(corner)}
        onClick={onClick}
    />
}

