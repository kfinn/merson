import React from "react";
import CornerThruRoad from "./shared/CornerThruRoad";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import { Corner } from "../../models/Corner";

export default function CornerRoadSvg() {
    return <g>
        <path
            className="field"
            d="M -50 -11 Q 11 -11 11 50 L 50 50 L 50 -50 L -50 -50 Z"
        />
        <CornerThruRoad corner={Corner.SOUTH_WEST} />
        <FieldWithinCornerThruRoad corner={Corner.SOUTH_WEST} />
    </g>
}
