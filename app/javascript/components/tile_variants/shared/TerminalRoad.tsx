import React from "react";
import { Orientation, orientationTransform } from "../../../models/Orientation";
import { RoadSegment } from "../../TileSvg";
import { useCreateRoadSegmentMeeplePlay, roadSegmentClassNames } from "./tileFeatureActions";

export default function TerminalRoad({ orientation, roadSegment }: { orientation: Orientation, roadSegment?: RoadSegment }) {
    const onClick = useCreateRoadSegmentMeeplePlay(roadSegment)
    return <path
        d="M -11 -50 L 11 -50 L 11 -11 L 0 0 L -11 -11 Z"
        className={roadSegmentClassNames(onClick)}
        transform={orientationTransform(orientation)}
        onClick={onClick}
    />
}
