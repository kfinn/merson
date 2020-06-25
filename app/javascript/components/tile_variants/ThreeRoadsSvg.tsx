import React from "react";
import TerminalRoad from "./shared/TerminalRoad";
import { ORIENTATION_WEST, ORIENTATION_SOUTH, ORIENTATION_EAST, OrientationId, ORIENTATION_NORTH } from "../../models/Orientation";
import HalfTileField from "./shared/HalfTileField";
import { Corner } from "../../models/Corner";
import FieldWithinAdjacentTerminalRoads from "./shared/FieldWithinAdjacentTerminalRoads";
import RoadTerminus from "./shared/RoadTerminus";

export default function ThreeRoadsSvg() {
    return <g>
        <TerminalRoad orientation={ORIENTATION_WEST} />
        <TerminalRoad orientation={ORIENTATION_EAST} />
        <TerminalRoad orientation={ORIENTATION_SOUTH} />
        <HalfTileField orientation={ORIENTATION_NORTH} />
        <FieldWithinAdjacentTerminalRoads corner={Corner.SOUTH_WEST} />
        <FieldWithinAdjacentTerminalRoads corner={Corner.SOUTH_EAST} />
        <RoadTerminus />
    </g>
}
