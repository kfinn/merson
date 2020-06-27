import React from "react";
import { Corner } from "../../models/Corner";
import { RoadEdge } from "../../models/Edge";
import { ORIENTATION_EAST, ORIENTATION_NORTH, ORIENTATION_SOUTH, ORIENTATION_WEST } from "../../models/Orientation";
import FieldWithinAdjacentTerminalRoads from "./shared/FieldWithinAdjacentTerminalRoads";
import RoadTerminus from "./shared/RoadTerminus";
import TerminalRoad from "./shared/TerminalRoad";
import { useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';


export default function FourRoadsSvg({ tile }: TileVariantProps) {
    // const northRoadSegment = (tile.northEdge as RoadEdge).roadSegment

    const westRoadEdge = tile.westEdge as RoadEdge
    const northWestFieldRegion = westRoadEdge.rightFieldRegion
    const westRoadSegment = westRoadEdge.roadSegment
    const southWestFieldRegion = westRoadEdge.leftFieldRegion

    // const southRoadSegment = (tile.southEdge as RoadEdge).roadSegment

    const eastRoadEdge = tile.eastEdge as RoadEdge
    const northEastFieldRegion = eastRoadEdge.leftFieldRegion
    // const eastRoadSegment = eastRoadEdge.roadSegment
    const southEastFieldRegion = eastRoadEdge.rightFieldRegion

    return <g>
        <TerminalRoad orientation={ORIENTATION_NORTH} />
        <TerminalRoad orientation={ORIENTATION_EAST} />
        <TerminalRoad orientation={ORIENTATION_SOUTH} />
        <TerminalRoad orientation={ORIENTATION_WEST} />

        <FieldWithinAdjacentTerminalRoads
            corner={Corner.NORTH_EAST}
            onClick={useCreateFieldRegionMeeplePlay(northEastFieldRegion)}
        />
        <FieldWithinAdjacentTerminalRoads
            corner={Corner.NORTH_WEST}
            onClick={useCreateFieldRegionMeeplePlay(northWestFieldRegion)}
        />
        <FieldWithinAdjacentTerminalRoads
            corner={Corner.SOUTH_WEST}
            onClick={useCreateFieldRegionMeeplePlay(southWestFieldRegion)}
        />
        <FieldWithinAdjacentTerminalRoads
            corner={Corner.SOUTH_EAST}
            onClick={useCreateFieldRegionMeeplePlay(southEastFieldRegion)}
        />

        <RoadTerminus />
    </g>
}
