import React from "react";
import { Corner } from "../../models/Corner";
import { CityEdge, RoadEdge } from "../../models/Edge";
import { ORIENTATION_EAST, ORIENTATION_NORTH, ORIENTATION_SOUTH, ORIENTATION_WEST } from "../../models/Orientation";
import FieldWithinAdjacentTerminalRoads from "./shared/FieldWithinAdjacentTerminalRoads";
import HalfTileFieldAvoidingCity from "./shared/HalfTileFieldAvoidingCity";
import RoadTerminus from "./shared/RoadTerminus";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import TerminalRoad from "./shared/TerminalRoad";
import { useCreateFieldRegionMeeplePlay, useCreateCityRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';


export default function CityWithThreeRoadsSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const westRoadEdge = tile.westEdge as RoadEdge
    const northFieldRegion = westRoadEdge.rightFieldRegion
    // const westRoadSegment = westRoadEdge.roadSegment
    const southWestFieldRegion = westRoadEdge.leftFieldRegion

    // const southRoadSegment = (tile.southEdge as RoadEdge).roadSegment

    const eastRoadEdge = tile.eastEdge as RoadEdge
    const southEastFieldRegion = eastRoadEdge.rightFieldRegion
    // const eastRoadSegment = eastRoadEdge.roadSegment

    return <g>
        <SingleEdgeRegion
            className="city"
            orientation={ORIENTATION_NORTH}
            onClick={useCreateCityRegionMeeplePlay(cityRegion)}
        />
        <HalfTileFieldAvoidingCity
            orientation={ORIENTATION_NORTH}
            onClick={useCreateFieldRegionMeeplePlay(northFieldRegion)}
        />
        <TerminalRoad orientation={ORIENTATION_WEST} />
        <TerminalRoad orientation={ORIENTATION_EAST} />
        <TerminalRoad orientation={ORIENTATION_SOUTH} />
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
