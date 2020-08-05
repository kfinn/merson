import { Orientation, orientationTransform, OrientationId } from "../../../models/Orientation";
import React from "react";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./tileFeatureActions";
import { FieldRegion } from "../../TileSvg";
import Meeple from "./Meeple";
import DebugTileFeatureId from "./DebugTileFeatureId";

export default function HalfTileField({ orientation, fieldRegion }: { orientation: Orientation, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <g>
        <rect
            x="-50"
            y="-50"
            height="39"
            width="100"
            transform={orientationTransform(orientation)}
            className={fieldClassNames(onClick)}
            onClick={onClick}
        />
        <DebugTileFeatureId position={{ x: 0, y: orientation.id == OrientationId.NORTH ? -32 : 32 }} tileFeature={fieldRegion} />
        {
            fieldRegion.meeplePlay && (
                <Meeple
                    meeplePlay={fieldRegion.meeplePlay}
                    position={{ x: 0, y: orientation.id == OrientationId.NORTH ? -32 : 32 }}
                />
            )
        }
    </g>
}
