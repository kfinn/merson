import React from "react";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { Corner } from "../../../models/Corner";
import { fieldClassNames } from "./tileFeatureActions";

export default function FieldWithinCornerThruRoad({ corner, onClick }: { corner: Corner, onClick?: () => void }) {
    return <path
        className={fieldClassNames(onClick)}
        d="M -50 11 Q -11 11 -11 50 L -50 50 Z"
        transform={cornerTransformForCornerThruRoad(corner)}
        onClick={onClick}
    />
}
