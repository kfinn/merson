import React from "react";
import { Corner } from "../../models/Corner";
import { FieldEdge, RoadEdge } from "../../models/Edge";
import { ORIENTATION_EAST, ORIENTATION_NORTH, ORIENTATION_SOUTH, ORIENTATION_WEST } from "../../models/Orientation";
import FieldWithinAdjacentTerminalRoads from "./shared/FieldWithinAdjacentTerminalRoads";
import HalfTileField from "./shared/HalfTileField";
import RoadTerminus from "./shared/RoadTerminus";
import TerminalRoad from "./shared/TerminalRoad";
import { useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';


export default function ThreeRoadsSvg({ tile }: TileVariantProps) {
    const northFieldRegion = (tile.northEdge as FieldEdge).fieldRegion

    const westRoadSegment = (tile.westEdge as RoadEdge).roadSegment
    const eastRoadSegment = (tile.eastEdge as RoadEdge).roadSegment

    const southRoadEdge = tile.southEdge as RoadEdge
    const southWestFieldRegion = southRoadEdge.rightFieldRegion
    const southRoadSegment = southRoadEdge.roadSegment
    const southEastFieldRegion = southRoadEdge.leftFieldRegion

    return <g>
        <TerminalRoad orientation={ORIENTATION_WEST} />
        <TerminalRoad orientation={ORIENTATION_EAST} />
        <TerminalRoad orientation={ORIENTATION_SOUTH} />
        <HalfTileField
            orientation={ORIENTATION_NORTH}
            onClick={useCreateFieldRegionMeeplePlay(northFieldRegion)}
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
