import React from "react";
import Shield, { ShieldPosition } from "./shared/Shield";
import SingleEastWestCity from "./SingleEastWestCitySvg";
import TileVariantProps from './TileVariantProps';

export default function SingleEastWestCityWithShieldSvg({ tile }: TileVariantProps) {
    return <g>
        <SingleEastWestCity tile={tile} />
        <Shield shieldPosition={ShieldPosition.MID_CENTER} />
    </g>
}
