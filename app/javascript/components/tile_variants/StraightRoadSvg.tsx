import React from "react";
import { RoadEdge } from "../../models/Edge";
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from "../../models/Orientation";
import HalfTileField from "./shared/HalfTileField";
import HorizontalThruRoad from "./shared/HorizontalThruRoad";
import TileVariantProps from './TileVariantProps';
import { useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";


export default function StraightRoadSvg({ tile }: TileVariantProps) {
    const westRoadEdge = tile.westEdge as RoadEdge
    const northFieldRegion = westRoadEdge.rightFieldRegion
    const roadSegment = westRoadEdge.roadSegment
    const southFieldRegion = westRoadEdge.leftFieldRegion

    return <g>
        <HalfTileField
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
