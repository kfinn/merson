import React from "react";
import { Corner } from "../../models/Corner";
import { CityEdge, RoadEdge } from "../../models/Edge";
import CornerThruRoad from "./shared/CornerThruRoad";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TwoEdgeCityRegion from "./shared/TwoEdgeCityRegion";
import TileVariantProps from './TileVariantProps';

export default function SingleNorthEastCityWithCornerRoadSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const westRoadEdge = tile.westEdge as RoadEdge
    const outerFieldRegion = westRoadEdge.rightFieldRegion
    const roadSegment = westRoadEdge.roadSegment
    const innerFieldRegion = westRoadEdge.leftFieldRegion

    const onClickOuterFieldRegion = useCreateFieldRegionMeeplePlay(outerFieldRegion)

    return <g>
        <TwoEdgeCityRegion
            corner={Corner.NORTH_EAST}
            cityRegion={cityRegion}
        />
        <path
            className={fieldClassNames(onClickOuterFieldRegion)}
            d="M -50 -11 Q 11 -11 11 50 L 50 50 C 25 -25 25 -25 -50 -50 Z"
            onClick={onClickOuterFieldRegion}
        />
        <CornerThruRoad corner={Corner.SOUTH_WEST} roadSegment={roadSegment} />
        <FieldWithinCornerThruRoad
            corner={Corner.SOUTH_WEST}
            fieldRegion={innerFieldRegion}
        />
    </g>
}
