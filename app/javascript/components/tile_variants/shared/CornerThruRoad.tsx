import React from "react";
import { Corner } from "../../../models/Corner";

export function cornerTransformForCornerThruRoad(corner: Corner) {
    switch(corner) {
        case Corner.NORTH_EAST:
            return 'rotate(180)'
        case Corner.SOUTH_EAST:
            return 'rotate(270)'
        case Corner.SOUTH_WEST:
            return ''
        case Corner.NORTH_WEST:
            return 'rotate(90)'
    }
}

export default function CornerThruRoad({ corner }: { corner: Corner }) {
    return <path
        className="road"
        d="M -50 -11 Q 11 -11 11 50 L -11 50 Q -11 11 -50 11 Z"
        transform={cornerTransformForCornerThruRoad(corner)}
    />
}
