import React from "react";
import { Corner } from "../../models/Corner";
import { CityEdge, RoadEdge } from "../../models/Edge";
import { ORIENTATION_EAST, ORIENTATION_NORTH, ORIENTATION_SOUTH, ORIENTATION_WEST } from "../../models/Orientation";
import FieldWithinAdjacentTerminalRoads from "./shared/FieldWithinAdjacentTerminalRoads";
import HalfTileFieldAvoidingCity from "./shared/HalfTileFieldAvoidingCity";
import RoadTerminus from "./shared/RoadTerminus";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import TerminalRoad from "./shared/TerminalRoad";
import TileVariantProps from './TileVariantProps';

export default function CityWithThreeRoadsSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const westRoadEdge = tile.westEdge as RoadEdge
    const northFieldRegion = westRoadEdge.rightFieldRegion
    const westRoadSegment = westRoadEdge.roadSegment
    const southWestFieldRegion = westRoadEdge.leftFieldRegion

    const southRoadSegment = (tile.southEdge as RoadEdge).roadSegment

    const eastRoadEdge = tile.eastEdge as RoadEdge
    const southEastFieldRegion = eastRoadEdge.rightFieldRegion
    const eastRoadSegment = eastRoadEdge.roadSegment

    return <g>
        <SingleEdgeRegion
            tileFeature={cityRegion}
            orientation={ORIENTATION_NORTH}
        />
        <HalfTileFieldAvoidingCity
            orientation={ORIENTATION_NORTH}
            fieldRegion={northFieldRegion}
        />
        <TerminalRoad orientation={ORIENTATION_WEST} roadSegment={westRoadSegment} />
        <TerminalRoad orientation={ORIENTATION_EAST} roadSegment={eastRoadSegment} />
        <TerminalRoad orientation={ORIENTATION_SOUTH} roadSegment={southRoadSegment} />
        <FieldWithinAdjacentTerminalRoads
            corner={Corner.SOUTH_WEST}
            fieldRegion={southWestFieldRegion}
        />
        <FieldWithinAdjacentTerminalRoads
            corner={Corner.SOUTH_EAST}
            fieldRegion={southEastFieldRegion}
        />
        <RoadTerminus />
    </g>
}
