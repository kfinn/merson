import React from "react";
import TerminalRoad from "./shared/TerminalRoad";
import { ORIENTATION_NORTH, ORIENTATION_EAST, ORIENTATION_SOUTH, ORIENTATION_WEST } from "../../models/Orientation";
import FieldWithinAdjacentTerminalRoads from "./shared/FieldWithinAdjacentTerminalRoads";
import { Corner } from "../../models/Corner";
import RoadTerminus from "./shared/RoadTerminus";

export default function FourRoadsSvg() {
    return <g>
        <TerminalRoad orientation={ORIENTATION_NORTH} />
        <TerminalRoad orientation={ORIENTATION_EAST} />
        <TerminalRoad orientation={ORIENTATION_SOUTH} />
        <TerminalRoad orientation={ORIENTATION_WEST} />

        <FieldWithinAdjacentTerminalRoads corner={Corner.NORTH_EAST} />
        <FieldWithinAdjacentTerminalRoads corner={Corner.NORTH_WEST} />
        <FieldWithinAdjacentTerminalRoads corner={Corner.SOUTH_WEST} />
        <FieldWithinAdjacentTerminalRoads corner={Corner.SOUTH_EAST} />

        <RoadTerminus />
    </g>
}
