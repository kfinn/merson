import React from 'react';
import { Orientation, orientationTransform } from '../../../models/Orientation';
import { actionableClassNames } from './tileFeatureActions';

export default function ThreeEdgeRegion({ className, orientation, onClick }: { className: string, orientation: Orientation, onClick?: () => void }) {
    return <path
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 50 L -50 50 L -50 -50"
        className={actionableClassNames(className, onClick)}
        transform={orientationTransform(orientation)}
        onClick={onClick}
    />
}
