import React from "react";
import SingleWestNorthEastCitySvg from "./SingleWestNorthEastCitySvg";
import Shield, { ShieldPosition } from "./shared/Shield";

export default function SingleWestNorthEastCityWithShieldSvg() {
    return <g>
        <SingleWestNorthEastCitySvg />
        <Shield shieldPosition={ShieldPosition.MID_CENTER} />
    </g>
}
