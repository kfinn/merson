import React from "react";
import { cornerTransformForCornerThruRoad } from "./CornerThruRoad";
import { Corner } from "../../../models/Corner";
import classNames from "classnames";
import { fieldClassNames } from "./tileFeatureActions";

export default function FieldWithinAdjacentTerminalRoads({ corner, onClick }: { corner: Corner, onClick?: () => void }) {
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
