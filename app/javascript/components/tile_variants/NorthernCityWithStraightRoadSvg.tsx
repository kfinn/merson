import React from "react";
import { RoadEdge } from "../../models/Edge";
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from "../../models/Orientation";
import HalfTileField from "./shared/HalfTileField";
import HalfTileFieldAvoidingCity from "./shared/HalfTileFieldAvoidingCity";
import HorizontalThruRoad from "./shared/HorizontalThruRoad";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';


export default function NorthernCityWithStraightRoadSvg({ tile }: TileVariantProps) {
    // const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const eastRoadEdge = tile.eastEdge as RoadEdge
    const northFieldRegion = eastRoadEdge.leftFieldRegion
    // const roadSegment = eastRoadEdge.roadSegment
    const southFieldRegion = eastRoadEdge.rightFieldRegion

    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <HalfTileFieldAvoidingCity
            orientation={ORIENTATION_NORTH}
            onClick={useCreateFieldRegionMeeplePlay(northFieldRegion)}
        />
        <HorizontalThruRoad />
        <HalfTileField
            orientation={ORIENTATION_SOUTH}
            onClick={useCreateFieldRegionMeeplePlay(southFieldRegion)}
        />
    </g>
}
