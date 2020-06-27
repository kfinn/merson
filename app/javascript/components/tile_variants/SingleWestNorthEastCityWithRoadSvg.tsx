import React from "react";
import { CityEdge, RoadEdge } from "../../models/Edge";
import { ORIENTATION_SOUTH } from "../../models/Orientation";
import TerminalRoad from "./shared/TerminalRoad";
import ThreeEdgeRegion from "./shared/ThreeEdgeRegion";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TileVariantProps from './TileVariantProps';

export default function SingleWestNorthEastCityWithRoadSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion

    const southRoadEdge = tile.southEdge as RoadEdge
    const westFieldRegion = southRoadEdge.rightFieldRegion
    const roadSegment = southRoadEdge.roadSegment
    const eastFieldRegion = southRoadEdge.leftFieldRegion

    const onClickWestFieldRegion = useCreateFieldRegionMeeplePlay(westFieldRegion)
    const onClickEastFieldRegion = useCreateFieldRegionMeeplePlay(eastFieldRegion)

    return <g>
        <rect
            className={fieldClassNames(onClickWestFieldRegion)}
            x="-50"
            y="20"
            width="45"
            height="30"
            onClick={onClickWestFieldRegion}
        />
        <rect
            className={fieldClassNames(onClickEastFieldRegion)}
            x="5"
            y="20"
            width="45"
            height="30"
            onClick={onClickEastFieldRegion}
        />
        <TerminalRoad orientation={ORIENTATION_SOUTH} roadSegment={roadSegment} />
        <ThreeEdgeRegion
            orientation={ORIENTATION_SOUTH}
            tileFeature={cityRegion}
        />
    </g>
}
