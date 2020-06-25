import React from 'react';
import SingleNorthEastCitySvg from './SingleNorthEastCitySvg';
import Shield, { ShieldPosition } from './shared/Shield';

export default function SingleNorthEastCityWithShieldSvg() {
    return <g>
        <SingleNorthEastCitySvg />
        <Shield shieldPosition={ShieldPosition.NORTH_EAST} />
    </g>
}
