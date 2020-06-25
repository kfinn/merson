import React from 'react';
import { Orientation, orientationTransform } from '../../../models/Orientation';

export default function SingleEdgeRegion({ className, orientation }: { className: string, orientation: Orientation }) {
    return <path
        d="M 50 -50 C 12.5 -12.5, -12.5 -12.5, -50 -50 L 50 -50"
        className={className}
        transform={orientationTransform(orientation)}
    />
}
