import { Orientation, orientationTransform } from "../../../models/Orientation";
import React from "react";

export default function HalfTileField({ orientation }: { orientation: Orientation }) {
    return <rect
        x="-50"
        y="-50"
        height="39"
        width="100"
        transform={orientationTransform(orientation)}
        className="field"
    />
}
