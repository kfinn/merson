import React from "react";
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from "../../models/Orientation";
import HalfTileField from "./shared/HalfTileField";
import HorizontalThruRoad from "./shared/HorizontalThruRoad";

export default function StraightRoadSvg() {
    return <g>
        <HalfTileField orientation={ORIENTATION_NORTH} />
        <HorizontalThruRoad />
        <HalfTileField orientation={ORIENTATION_SOUTH} />
    </g>
}
