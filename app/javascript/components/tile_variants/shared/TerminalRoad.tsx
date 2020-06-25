import React from "react";
import { Orientation, orientationTransform } from "../../../models/Orientation";

export default function TerminalRoad({ orientation }: { orientation: Orientation }) {
    return <path
        d="M -11 -50 L 11 -50 L 11 -11 L 0 0 L -11 -11 Z"
        className="road"
        transform={orientationTransform(orientation)}
    />
}
