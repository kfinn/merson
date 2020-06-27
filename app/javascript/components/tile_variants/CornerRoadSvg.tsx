import classNames from "classnames";
import React from "react";
import { Corner } from "../../models/Corner";
import { RoadEdge } from "../../models/Edge";
import CornerThruRoad from "./shared/CornerThruRoad";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import { useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';


export default function CornerRoadSvg({ tile }: TileVariantProps) {
    const westRoadEdge = tile.westEdge as RoadEdge
    const outerFieldRegion = westRoadEdge.rightFieldRegion
    // const roadSegment = westRoadEdge.roadSegment
    const innerFieldRegion = westRoadEdge.leftFieldRegion

    const onClickOuterFieldRegion = useCreateFieldRegionMeeplePlay(outerFieldRegion)

    return <g>
        <path
            className={classNames("field", { 'has-action': !!onClickOuterFieldRegion })}
            d="M -50 -11 Q 11 -11 11 50 L 50 50 L 50 -50 L -50 -50 Z"
            onClick={onClickOuterFieldRegion}
        />
        <CornerThruRoad corner={Corner.SOUTH_WEST} />
        <FieldWithinCornerThruRoad corner={Corner.SOUTH_WEST} onClick={useCreateFieldRegionMeeplePlay(innerFieldRegion)} />
    </g>
}
