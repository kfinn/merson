import React from "react";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { Corner } from "../../../models/Corner";

export default function FieldWithinCornerThruRoad({ corner }: { corner: Corner }) {
    return <path
        className="field"
        d="M -50 11 Q -11 11 -11 50 L -50 50 Z"
        transform={cornerTransformForCornerThruRoad(corner)}
    />
}
