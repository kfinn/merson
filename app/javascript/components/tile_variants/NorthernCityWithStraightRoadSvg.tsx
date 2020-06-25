import React from "react";
import HorizontalThruRoad from "./shared/HorizontalThruRoad";
import HalfTileField from "./shared/HalfTileField";
import { ORIENTATION_SOUTH, ORIENTATION_NORTH } from "../../models/Orientation";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import HalfTileFieldAvoidingCity from "./shared/HalfTileFieldAvoidingCity";

export default function NorthernCityWithStraightRoadSvg() {
    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <HalfTileFieldAvoidingCity orientation={ORIENTATION_NORTH} />
        <HorizontalThruRoad />
        <HalfTileField orientation={ORIENTATION_SOUTH} />
    </g>
}
