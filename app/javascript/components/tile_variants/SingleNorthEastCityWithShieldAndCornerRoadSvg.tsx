import React from "react";
import Shield, { ShieldPosition } from "./shared/Shield";
import SingleNorthEastCityWithCornerRoadSvg from "./SingleNorthEastCityWithCornerRoadSvg";

export default function SingleNorthEastCityWithShieldAndCornerRoadSvg() {
    return <g>
        <SingleNorthEastCityWithCornerRoadSvg />
        <Shield shieldPosition={ShieldPosition.NORTH_EAST} />
    </g>
}
