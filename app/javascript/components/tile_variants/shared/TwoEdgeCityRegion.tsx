import React from 'react';
import { Corner } from '../../../models/Corner';

export function cornerTransform(corner: Corner) {
    switch (corner) {
        case Corner.NORTH_EAST:
            return ''
        case Corner.SOUTH_EAST:
            return 'rotate(90)'
        case Corner.SOUTH_WEST:
            return 'rotate(180)'
        case Corner.NORTH_WEST:
            return 'rotate(270)'
    }
}

export default function TwoEdgeCityRegion({ corner }: { corner: Corner }) {
    return <path
        className="city"
        d="M -50 -50 L 50 -50 L 50 50 C 25 -25, 25 -25, -50 -50"
        transform={cornerTransform(corner)}
    />
}
