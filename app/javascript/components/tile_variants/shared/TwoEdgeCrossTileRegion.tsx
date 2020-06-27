import React from 'react';
import { actionableClassNames } from './tileFeatureActions';

export enum Axis {
    HORIZONTAL, VERTICAL
}

function axisTransform(axis) {
    switch(axis) {
        case Axis.HORIZONTAL:
            return ''
        case Axis.VERTICAL:
            return 'rotate(90)'
    }
}

export default function TwoEdgeCrossTileRegion({ className, axis, onClick }: { className: string, axis: Axis, onClick?: () => void }) {
    return <path
        className={actionableClassNames(className, onClick)}
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 50 C 12.5 12.5, -12.5 12.5, -50 50 L -50 -50"
        transform={axisTransform(axis)}
        onClick={onClick}
    />

}
