import React from "react";
import Shield, { ShieldPosition } from "./shared/Shield";
import SingleNorthEastCityWithCornerRoadSvg from "./SingleNorthEastCityWithCornerRoadSvg";

import TileVariantProps from './TileVariantProps';

export default function SingleNorthEastCityWithShieldAndCornerRoadSvg({ tile }: TileVariantProps) {
    return <g>
        <SingleNorthEastCityWithCornerRoadSvg tile={tile} />
        <Shield shieldPosition={ShieldPosition.NORTH_EAST} />
    </g>
}
