import React from "react";
import TwoEdgeCityRegion from "./shared/TwoEdgeCityRegion";
import { Corner } from "../../models/Corner";
import CornerThruRoad from "./shared/CornerThruRoad";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";

export default function SingleNorthEastCityWithCornerRoadSvg() {
    return <g>
        <TwoEdgeCityRegion corner={Corner.NORTH_EAST} />
        <path
            className="field"
            d="M -50 -11 Q 11 -11 11 50 L 50 50 C 25 -25 25 -25 -50 -50 Z"
        />
        <CornerThruRoad corner={Corner.SOUTH_WEST} />
        <FieldWithinCornerThruRoad corner={Corner.SOUTH_WEST} />
    </g>
}
