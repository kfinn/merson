import SingleEastWestCity from "./SingleEastWestCitySvg";
import React from "react";
import Shield, { ShieldPosition } from "./shared/Shield";

export default function SingleEastWestCityWithShieldSvg() {
    return <g>
        <SingleEastWestCity />
        <Shield shieldPosition={ShieldPosition.MID_CENTER} />
    </g>
}
