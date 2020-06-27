import React from "react";
import { Corner } from "../../../models/Corner";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./tileFeatureActions";
import { FieldRegion } from "../../TileSvg";

export default function FieldWithinAdjacentTerminalRoads({ corner, fieldRegion }: { corner: Corner, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <rect
        className={fieldClassNames(onClick)}
        x="-50"
        y="11"
        height="39"
        width="39"
        transform={cornerTransformForCornerThruRoad(corner)}
        onClick={onClick}
    />
}
