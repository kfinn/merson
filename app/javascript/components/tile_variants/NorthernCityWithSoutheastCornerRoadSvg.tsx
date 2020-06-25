import React from "react";
import { ORIENTATION_NORTH } from "../../models/Orientation";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { Corner } from "../../models/Corner";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import CornerThruRoad from "./shared/CornerThruRoad";

export default function NorthernCityWithSoutheastCornerRoadSvg() {
    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <path
            className="field"
            d="M -50 50 L -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 -11 Q -11 -11 -11 50 Z"
        />
        <CornerThruRoad corner={Corner.SOUTH_EAST} />
        <FieldWithinCornerThruRoad corner={Corner.SOUTH_EAST} />
    </g>
}
