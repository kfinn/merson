import React from "react";
import { Orientation, orientationTransform, OrientationId } from "../../../models/Orientation";
import { RoadSegment } from "../../TileSvg";
import { useCreateRoadSegmentMeeplePlay, roadSegmentClassNames } from "./tileFeatureActions";
import Meeple from "./Meeple";
import DebugTileFeatureId from "./DebugTileFeatureId";

const MEEPLE_POSITIONS_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: { x: 0, y: -36 },
    [OrientationId.EAST]: { x: 36, y: 0 },
    [OrientationId.SOUTH]: { x: 0, y: 36 },
    [OrientationId.WEST]: { x: -36, y: 0 }
}

export default function TerminalRoad({ orientation, roadSegment }: { orientation: Orientation, roadSegment: RoadSegment }) {
    const onClick = useCreateRoadSegmentMeeplePlay(roadSegment)
    return <g>
        <path
            d="M -11 -50 L 11 -50 L 11 -11 L 0 0 L -11 -11 Z"
            className={roadSegmentClassNames(onClick)}
            transform={orientationTransform(orientation)}
            onClick={onClick}
        />
        <DebugTileFeatureId position={MEEPLE_POSITIONS_BY_ORIENTATION_ID[orientation.id]} tileFeature={roadSegment} />
        {
            roadSegment.meeplePlay && (
                <Meeple
                    meeplePlay={roadSegment.meeplePlay}
                    position={MEEPLE_POSITIONS_BY_ORIENTATION_ID[orientation.id]}
                />
            )
        }
    </g>
}
