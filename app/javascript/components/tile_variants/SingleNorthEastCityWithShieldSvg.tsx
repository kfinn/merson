import React from 'react';
import Shield, { ShieldPosition } from './shared/Shield';
import SingleNorthEastCitySvg from './SingleNorthEastCitySvg';
import TileVariantProps from './TileVariantProps';

export default function SingleNorthEastCityWithShieldSvg({ tile }: TileVariantProps) {
    return <g>
        <SingleNorthEastCitySvg tile={tile} />
        <Shield shieldPosition={ShieldPosition.NORTH_EAST} />
    </g>
}
