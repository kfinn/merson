import React from 'react';

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

export default function TwoEdgeCrossTileRegion({ className, axis }: { className: string, axis: Axis }) {
    return <path
        className={className}
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 50 C 12.5 12.5, -12.5 12.5, -50 50 L -50 -50"
        transform={axisTransform(axis)}
    />

}
