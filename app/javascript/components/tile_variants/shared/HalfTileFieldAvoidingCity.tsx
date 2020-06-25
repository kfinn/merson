import React from 'react';
import { Orientation, orientationTransform } from '../../../models/Orientation';

export default function HalfTileFieldAvoidingCity({ orientation }: { orientation: Orientation }) {
    return <path
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 -11 L -50 -11 L -50 -50"
        className="field"
        transform={orientationTransform(orientation)}
    />
}
