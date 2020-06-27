import React from "react";
import { RoadSegment } from "../../TileSvg";
import { useCreateRoadSegmentMeeplePlay, roadSegmentClassNames } from "./tileFeatureActions";

export default function HorizontalThruRoad({ roadSegment }: { roadSegment?: RoadSegment }) {
    const onClick = useCreateRoadSegmentMeeplePlay(roadSegment)

    return <rect
        className={roadSegmentClassNames(onClick)}
        x="-50"
        y="-11"
        width="100"
        height="22"
        onClick={onClick}
    />
}
