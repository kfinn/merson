import React from "react";
import { RoadSegment } from "../../TileSvg";
import { useCreateRoadSegmentMeeplePlay, roadSegmentClassNames } from "./tileFeatureActions";
import Meeple from "./Meeple";
import DebugTileFeatureId from "./DebugTileFeatureId";

export default function HorizontalThruRoad({ roadSegment }: { roadSegment: RoadSegment }) {
    const onClick = useCreateRoadSegmentMeeplePlay(roadSegment)

    return <g>
        <rect
            className={roadSegmentClassNames(onClick)}
            x="-50"
            y="-11"
            width="100"
            height="22"
            onClick={onClick}
        />
        <DebugTileFeatureId position={{ x: 0, y: 0 }} tileFeature={roadSegment} />
        {
            roadSegment.meeplePlay && (
                <Meeple
                    meeplePlay={roadSegment.meeplePlay}
                    position={{ x: 0, y: 0 }}
                />
            )
        }
    </g>
}
