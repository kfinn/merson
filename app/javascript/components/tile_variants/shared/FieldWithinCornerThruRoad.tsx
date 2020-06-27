import React from "react";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { Corner } from "../../../models/Corner";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./tileFeatureActions";
import { FieldRegion } from "../../TileSvg";

export default function FieldWithinCornerThruRoad({ corner, fieldRegion }: { corner: Corner, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <path
        className={fieldClassNames(onClick)}
        d="M -50 11 Q -11 11 -11 50 L -50 50 Z"
        transform={cornerTransformForCornerThruRoad(corner)}
        onClick={onClick}
    />
}
