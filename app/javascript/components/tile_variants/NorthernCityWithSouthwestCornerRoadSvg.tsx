import React from "react";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { ORIENTATION_NORTH } from "../../models/Orientation";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import CornerThruRoad from "./shared/CornerThruRoad";
import { Corner } from "../../models/Corner";

export default function NorthernCityWithSouthwestCornerRoadSvg() {
    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <path
            className="field"
            d="M -50 -11 Q 11 -11 11 50 L 50 50 L 50 -50 C 12.5 -12.5, -12.5 -12.5, -50 -50 Z"
        />
        <CornerThruRoad corner={Corner.SOUTH_WEST} />
        <FieldWithinCornerThruRoad corner={Corner.SOUTH_WEST} />
    </g>
}
