import React from "react";

export enum ShieldPosition {
    MID_NORTH,
    MID_CENTER,
    MID_EAST,
    NORTH_EAST
}

const TEXT_PROPS_BY_SHIELD_POSITION = {
    [ShieldPosition.MID_NORTH]: { x: 0, y: -20},
    [ShieldPosition.MID_CENTER]: { x: 0, y: 5 },
    [ShieldPosition.MID_EAST]: { x: 33, y: 5 },
    [ShieldPosition.NORTH_EAST]: { x: 5, y: -33 }
}

export default function Shield({ shieldPosition }: { shieldPosition: ShieldPosition }) {
    return <text textAnchor="middle" {...TEXT_PROPS_BY_SHIELD_POSITION[shieldPosition]}>🛡</text>
}
