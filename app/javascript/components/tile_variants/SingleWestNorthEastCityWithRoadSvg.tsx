import React from "react";
import { ORIENTATION_SOUTH } from "../../models/Orientation";
import ThreeEdgeRegion from "./shared/ThreeEdgeRegion";
import TerminalRoad from "./shared/TerminalRoad";

export default function SingleWestNorthEastCityWithRoadSvg() {
    return <g>
        <rect className="field" x="-50" y="20" width="45" height="30" />
        <rect className="field" x="5" y="20" width="45" height="30" />
        <TerminalRoad orientation={ORIENTATION_SOUTH} />
        <ThreeEdgeRegion className="city" orientation={ORIENTATION_SOUTH} />
    </g>
}
