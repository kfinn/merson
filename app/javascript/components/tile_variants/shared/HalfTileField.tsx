import { Orientation, orientationTransform } from "../../../models/Orientation";
import React from "react";
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from "./tileFeatureActions";
import { FieldRegion } from "../../TileSvg";

export default function HalfTileField({ orientation, fieldRegion }: { orientation: Orientation, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <rect
        x="-50"
        y="-50"
        height="39"
        width="100"
        transform={orientationTransform(orientation)}
        className={fieldClassNames(onClick)}
        onClick={onClick}
    />
}
