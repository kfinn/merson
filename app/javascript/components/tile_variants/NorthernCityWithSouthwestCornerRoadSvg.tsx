import React from "react";
import { Corner } from "../../models/Corner";
import { CityEdge, RoadEdge } from "../../models/Edge";
import { ORIENTATION_NORTH } from "../../models/Orientation";
import CornerThruRoad from "./shared/CornerThruRoad";
import FieldWithinCornerThruRoad from "./shared/FieldWithinCornerThruRoad";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';
import Meeple from "./shared/Meeple";

export default function NorthernCityWithSouthwestCornerRoadSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const westRoadEdge = tile.westEdge as RoadEdge
    const outerFieldRegion = westRoadEdge.rightFieldRegion
    const roadSegment = westRoadEdge.roadSegment
    const innerFieldRegion = westRoadEdge.leftFieldRegion

    const onClickOuterFieldRegion = useCreateFieldRegionMeeplePlay(outerFieldRegion)

    return <g>
        <SingleEdgeRegion
            orientation={ORIENTATION_NORTH}
            tileFeature={cityRegion}
        />
        <g>
            <path
                className={fieldClassNames(onClickOuterFieldRegion)}
                d="M -50 -11 Q 11 -11 11 50 L 50 50 L 50 -50 C 12.5 -12.5, -12.5 -12.5, -50 -50 Z"
                onClick={onClickOuterFieldRegion}
            />
            {
                outerFieldRegion.meeplePlay && (
                    <Meeple
                        meeplePlay={outerFieldRegion.meeplePlay}
                        position={{ x: 15, y: 15 }}
                    />
                )
            }
        </g>
        <CornerThruRoad corner={Corner.SOUTH_WEST} roadSegment={roadSegment} />
        <FieldWithinCornerThruRoad
            corner={Corner.SOUTH_WEST}
            fieldRegion={innerFieldRegion}
        />
    </g>
}
