import React from "react";
import { ORIENTATION_SOUTH } from "../../models/Orientation";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import ThreeEdgeRegion from "./shared/ThreeEdgeRegion";

export default function SingleWestNorthEastCitySvg() {
    return <g>
        <ThreeEdgeRegion className="city" orientation={ORIENTATION_SOUTH} />
        <SingleEdgeRegion className="field" orientation={ORIENTATION_SOUTH} />
    </g>
}
