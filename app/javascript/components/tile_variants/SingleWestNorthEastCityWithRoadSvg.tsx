import React from "react";
import { CityEdge, RoadEdge } from "../../models/Edge";
import { ORIENTATION_SOUTH } from "../../models/Orientation";
import TerminalRoad from "./shared/TerminalRoad";
import ThreeEdgeRegion from "./shared/ThreeEdgeRegion";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';
import Meeple from "./shared/Meeple";

export default function SingleWestNorthEastCityWithRoadSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const southRoadEdge = tile.southEdge as RoadEdge
    const westFieldRegion = southRoadEdge.rightFieldRegion
    const roadSegment = southRoadEdge.roadSegment
    const eastFieldRegion = southRoadEdge.leftFieldRegion

    const onClickWestFieldRegion = useCreateFieldRegionMeeplePlay(westFieldRegion)
    const onClickEastFieldRegion = useCreateFieldRegionMeeplePlay(eastFieldRegion)

    return <g>
        <g>
            <rect
                className={fieldClassNames(onClickWestFieldRegion)}
                x="-50"
                y="20"
                width="45"
                height="30"
                onClick={onClickWestFieldRegion}
            />
            {
                westFieldRegion.meeplePlay && (
                    <Meeple
                        meeplePlay={westFieldRegion.meeplePlay}
                        position={{ x: -20, y: 40}}
                    />
                )
            }
        </g>
        <g>
            <rect
                className={fieldClassNames(onClickEastFieldRegion)}
                x="5"
                y="20"
                width="45"
                height="30"
                onClick={onClickEastFieldRegion}
            />
            {
                eastFieldRegion.meeplePlay && (
                    <Meeple
                        meeplePlay={eastFieldRegion.meeplePlay}
                        position={{ x: 20, y: 40 }}
                    />
                )
            }
        </g>
        <TerminalRoad orientation={ORIENTATION_SOUTH} roadSegment={roadSegment} />
        <ThreeEdgeRegion
            orientation={ORIENTATION_SOUTH}
            tileFeature={cityRegion}
        />
    </g>
}
