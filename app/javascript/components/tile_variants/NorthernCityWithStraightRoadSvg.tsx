import React from "react";
import { CityEdge, RoadEdge } from "../../models/Edge";
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from "../../models/Orientation";
import HalfTileField from "./shared/HalfTileField";
import HalfTileFieldAvoidingCity from "./shared/HalfTileFieldAvoidingCity";
import HorizontalThruRoad from "./shared/HorizontalThruRoad";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import TileVariantProps from './TileVariantProps';

export default function NorthernCityWithStraightRoadSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const eastRoadEdge = tile.eastEdge as RoadEdge
    const northFieldRegion = eastRoadEdge.leftFieldRegion
    const roadSegment = eastRoadEdge.roadSegment
    const southFieldRegion = eastRoadEdge.rightFieldRegion

    return <g>
        <SingleEdgeRegion
            orientation={ORIENTATION_NORTH}
            tileFeature={cityRegion}
        />
        <HalfTileFieldAvoidingCity
            orientation={ORIENTATION_NORTH}
            fieldRegion={northFieldRegion}
        />
        <HorizontalThruRoad roadSegment={roadSegment} />
        <HalfTileField
            orientation={ORIENTATION_SOUTH}
            fieldRegion={southFieldRegion}
        />
    </g>
}
