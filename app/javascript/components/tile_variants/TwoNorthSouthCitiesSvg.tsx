import React from "react";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from "../../models/Orientation";
import TwoEdgeCrossTileRegion, { Axis } from "./shared/TwoEdgeCrossTileRegion";

export default function TwoNorthSouthCitiesSvg() {
    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <TwoEdgeCrossTileRegion className="field" axis={Axis.HORIZONTAL} />
        <SingleEdgeRegion className="city" orientation={ORIENTATION_SOUTH} />
    </g>
}
