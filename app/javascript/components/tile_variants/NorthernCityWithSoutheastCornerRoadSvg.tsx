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

export default function NorthernCityWithSoutheastCornerRoadSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const eastRoadEdge = tile.eastEdge as RoadEdge
    const outerFieldRegion = eastRoadEdge.leftFieldRegion
    const roadSegment = eastRoadEdge.roadSegment
    const innerFieldRegion = eastRoadEdge.rightFieldRegion

    const onClickOuterFieldRegion = useCreateFieldRegionMeeplePlay(outerFieldRegion)

    return <g>
        <SingleEdgeRegion
            tileFeature={cityRegion}
            orientation={ORIENTATION_NORTH}
        />
        <g>
            <path
                className={fieldClassNames(onClickOuterFieldRegion)}
                d="M -50 50 L -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 -11 Q -11 -11 -11 50 Z"
                onClick={onClickOuterFieldRegion}
            />
            {
                outerFieldRegion.meeplePlay && (
                    <Meeple
                        meeplePlay={outerFieldRegion.meeplePlay}
                        position={{ x: -20, y: 10 }}
                    />
                )
            }
        </g>
        <CornerThruRoad corner={Corner.SOUTH_EAST} roadSegment={roadSegment} />
        <FieldWithinCornerThruRoad
            corner={Corner.SOUTH_EAST}
            fieldRegion={innerFieldRegion}
        />
    </g>
}
