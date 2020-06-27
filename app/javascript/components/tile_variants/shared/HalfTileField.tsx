import { Orientation, orientationTransform } from "../../../models/Orientation";
import React from "react";
import { fieldClassNames } from "./tileFeatureActions";

export default function HalfTileField({ orientation, onClick }: { orientation: Orientation, onClick?: () => void }) {
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
