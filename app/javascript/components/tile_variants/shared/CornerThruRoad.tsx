import React from "react";
import { Corner } from "../../../models/Corner";
import { useCreateRoadSegmentMeeplePlay, roadSegmentClassNames } from "./tileFeatureActions";
import { RoadSegment } from "../../TileSvg";
import Meeple from "./Meeple";

export function cornerTransformForCornerThruRoad(corner: Corner) {
    switch(corner) {
        case Corner.NORTH_EAST:
            return 'rotate(180)'
        case Corner.SOUTH_EAST:
            return 'rotate(270)'
        case Corner.SOUTH_WEST:
            return ''
        case Corner.NORTH_WEST:
            return 'rotate(90)'
    }
}

export function cornerMeeplePositionForCornerThruRoad(corner: Corner) {
    switch(corner) {
        case Corner.NORTH_EAST:
            return { x: 11, y: -11 }
        case Corner.SOUTH_EAST:
            return { x: 11, y: 11 }
        case Corner.SOUTH_WEST:
            return { x: -11, y: 11 }
        case Corner.NORTH_WEST:
            return { x: -11, y: -11 }
    }
}

export default function CornerThruRoad({ corner, roadSegment }: { corner: Corner, roadSegment?: RoadSegment }) {
    const onClick = useCreateRoadSegmentMeeplePlay(roadSegment)

    return <g>
        <path
            className={roadSegmentClassNames(onClick)}
            d="M -50 -11 Q 11 -11 11 50 L -11 50 Q -11 11 -50 11 Z"
            transform={cornerTransformForCornerThruRoad(corner)}
            onClick={onClick}
        />
        {
            roadSegment.meeplePlay && (
                <Meeple
                    meeplePlay={roadSegment.meeplePlay}
                    position={cornerMeeplePositionForCornerThruRoad(corner)}
                />
            )
        }
    </g>
}
