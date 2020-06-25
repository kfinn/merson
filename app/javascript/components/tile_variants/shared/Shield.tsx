import React from "react";

export enum ShieldPosition {
    MID_NORTH,
    MID_CENTER,
    NORTH_EAST
}

const TEXT_PROPS_BY_SHIELD_POSITION = {
    [ShieldPosition.MID_NORTH]: { x: 0, y: -20},
    [ShieldPosition.MID_CENTER]: { x: 0, y: 5 },
    [ShieldPosition.NORTH_EAST]: { x: 25, y: -20 }
}

export default function Shield({ shieldPosition }: { shieldPosition: ShieldPosition }) {
    return <text textAnchor="middle" {...TEXT_PROPS_BY_SHIELD_POSITION[shieldPosition]}>🛡</text>
}
