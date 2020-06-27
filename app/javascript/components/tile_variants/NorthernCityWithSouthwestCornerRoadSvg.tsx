import React from "react";
import { Corner } from "../../models/Corner";
import { RoadEdge } from "../../models/Edge";
import { ORIENTATION_NORTH } from "../../models/Orientation";
import CornerThruRoad from "./shared/CornerThruRoad";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';


export default function NorthernCityWithSouthwestCornerRoadSvg({ tile }: TileVariantProps) {
    // const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const westRoadEdge = tile.westEdge as RoadEdge
    const outerFieldRegion = westRoadEdge.rightFieldRegion
    // const roadSegment = westRoadEdge.roadSegment
    const innerFieldRegion = westRoadEdge.leftFieldRegion

    const onClickOuterFieldRegion = useCreateFieldRegionMeeplePlay(outerFieldRegion)

    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <path
            className={fieldClassNames(onClickOuterFieldRegion)}
            d="M -50 -11 Q 11 -11 11 50 L 50 50 L 50 -50 C 12.5 -12.5, -12.5 -12.5, -50 -50 Z"
            onClick={onClickOuterFieldRegion}
        />
        <CornerThruRoad corner={Corner.SOUTH_WEST} />
        <FieldWithinCornerThruRoad
            corner={Corner.SOUTH_WEST}
            onClick={useCreateFieldRegionMeeplePlay(innerFieldRegion)}
        />
    </g>
}
