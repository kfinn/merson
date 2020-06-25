import React from "react";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { ORIENTATION_NORTH, ORIENTATION_WEST, ORIENTATION_EAST, ORIENTATION_SOUTH } from "../../models/Orientation";
import HalfTileFieldAvoidingCity from "./shared/HalfTileFieldAvoidingCity";
import TerminalRoad from "./shared/TerminalRoad";
import FieldWithinAdjacentTerminalRoads from "./shared/FieldWithinAdjacentTerminalRoads";
import { Corner } from "../../models/Corner";
import RoadTerminus from "./shared/RoadTerminus";

export default function CityWithThreeRoadsSvg() {
    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <HalfTileFieldAvoidingCity orientation={ORIENTATION_NORTH} />
        <TerminalRoad orientation={ORIENTATION_WEST} />
        <TerminalRoad orientation={ORIENTATION_EAST} />
        <TerminalRoad orientation={ORIENTATION_SOUTH} />
        <FieldWithinAdjacentTerminalRoads corner={Corner.SOUTH_WEST} />
        <FieldWithinAdjacentTerminalRoads corner={Corner.SOUTH_EAST} />
        <RoadTerminus />
    </g>
}
