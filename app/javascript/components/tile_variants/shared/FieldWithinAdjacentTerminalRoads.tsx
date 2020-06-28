import React from "react";
import { Corner } from "../../../models/Corner";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./tileFeatureActions";
import { FieldRegion } from "../../TileSvg";
import Meeple from "./Meeple";

export const MEEPLE_POSITIONS_BY_CORNER = {
    [Corner.NORTH_WEST]: { x: -29, y: -29 },
    [Corner.SOUTH_WEST]: { x: -29, y: 29 },
    [Corner.SOUTH_EAST]: { x: 29, y: 29 },
    [Corner.NORTH_EAST]: { x: 29, y: -29 }
}

export default function FieldWithinAdjacentTerminalRoads({ corner, fieldRegion }: { corner: Corner, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <g>
        <rect
            className={fieldClassNames(onClick)}
            x="-50"
            y="11"
            height="39"
            width="39"
            transform={cornerTransformForCornerThruRoad(corner)}
            onClick={onClick}
        />
        {
            fieldRegion.meeplePlay && (
                <Meeple
                    meeplePlay={fieldRegion.meeplePlay}
                    position={MEEPLE_POSITIONS_BY_CORNER[corner]}
                />
            )
        }
    </g>
}
