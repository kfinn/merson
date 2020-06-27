import React from "react";
import Shield, { ShieldPosition } from "./shared/Shield";
import SingleWestNorthEastCitySvg from "./SingleWestNorthEastCitySvg";
import TileVariantProps from './TileVariantProps';


export default function SingleWestNorthEastCityWithShieldSvg({ tile }: TileVariantProps) {
    return <g>
        <SingleWestNorthEastCitySvg tile={tile} />
        <Shield shieldPosition={ShieldPosition.MID_CENTER} />
    </g>
}
