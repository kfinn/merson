import React from "react";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { Corner } from "../../../models/Corner";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./tileFeatureActions";
import { FieldRegion } from "../../TileSvg";
import Meeple from "./Meeple";
import { MEEPLE_POSITIONS_BY_CORNER } from "./FieldWithinAdjacentTerminalRoads";

export default function FieldWithinCornerThruRoad({ corner, fieldRegion }: { corner: Corner, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <g>
        <path
            className={fieldClassNames(onClick)}
            d="M -50 11 Q -11 11 -11 50 L -50 50 Z"
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
