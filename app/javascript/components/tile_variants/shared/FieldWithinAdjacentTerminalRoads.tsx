import React from "react";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { Corner } from "../../../models/Corner";

export default function FieldWithinAdjacentTerminalRoads({ corner }: { corner: Corner }) {
    return <rect
        className="field"
        x="-50"
        y="11"
        height="39"
        width="39"
        transform={cornerTransformForCornerThruRoad(corner)}
    />
}
