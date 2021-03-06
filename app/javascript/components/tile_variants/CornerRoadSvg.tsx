import React from "react";
import { Corner } from "../../models/Corner";
import { RoadEdge } from "../../models/Edge";
import CornerThruRoad from "./shared/CornerThruRoad";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';
import Meeple from "./shared/Meeple";
import DebugTileFeatureId from "./shared/DebugTileFeatureId";

export default function CornerRoadSvg({ tile }: TileVariantProps) {
    const westRoadEdge = tile.westEdge as RoadEdge
    const outerFieldRegion = westRoadEdge.rightFieldRegion
    const roadSegment = westRoadEdge.roadSegment
    const innerFieldRegion = westRoadEdge.leftFieldRegion

    const onClickOuterFieldRegion = useCreateFieldRegionMeeplePlay(outerFieldRegion)

    return <g>
        <g>
            <path
                className={fieldClassNames(onClickOuterFieldRegion)}
                d="M -50 -11 Q 11 -11 11 50 L 50 50 L 50 -50 L -50 -50 Z"
                onClick={onClickOuterFieldRegion}
            />
            <DebugTileFeatureId position={{ x: 12, y: 0 - 12 }} tileFeature={outerFieldRegion} />
            {
                outerFieldRegion.meeplePlay && (
                    <Meeple
                        meeplePlay={outerFieldRegion.meeplePlay}
                        position={{ x: 12, y: 0-12 }}
                    />
                )
            }
        </g>
        <CornerThruRoad
            corner={Corner.SOUTH_WEST}
            roadSegment={roadSegment}
        />
        <FieldWithinCornerThruRoad
            corner={Corner.SOUTH_WEST}
            fieldRegion={innerFieldRegion}
        />
    </g>
}
