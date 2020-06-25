import React from "react";
import SingleWestNorthEastCityWithRoadSvg from "./SingleWestNorthEastCityWithRoadSvg";
import Shield, { ShieldPosition } from "./shared/Shield";

export default function SingleWestNorthEastCityWithShieldAndRoadSvg() {
    return <g>
        <SingleWestNorthEastCityWithRoadSvg />
        <Shield shieldPosition={ShieldPosition.MID_NORTH} />
    </g>
}
