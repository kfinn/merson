import React from "react";
import Shield, { ShieldPosition } from "./shared/Shield";
import SingleWestNorthEastCityWithRoadSvg from "./SingleWestNorthEastCityWithRoadSvg";
import TileVariantProps from './TileVariantProps';


export default function SingleWestNorthEastCityWithShieldAndRoadSvg({ tile }: TileVariantProps) {
    return <g>
        <SingleWestNorthEastCityWithRoadSvg tile={tile} />
        <Shield shieldPosition={ShieldPosition.MID_NORTH} />
    </g>
}
