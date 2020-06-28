import { MeeplePlay } from "../../TileSvg";
import React from "react";
import { Point } from "../../../models/Point";
import { Orientation, OrientationId } from "../../../models/Orientation";

interface Props {
    position: Point
    meeplePlay: MeeplePlay
}

export default function Meeple({ meeplePlay, position: { x, y } }: Props) {
    return <g transform={`translate(${x}, ${y})`}>
        <text className="meeple">
            {meeplePlay.player.id} ({meeplePlay.meepleIndex})
        </text>
    </g>
}
