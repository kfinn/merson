import React from 'react';
import Shield, { ShieldPosition } from './shared/Shield';
import TileVariantProps from './TileVariantProps';


export default function SingleAllSidesCityWithShieldSvg({ tile }: TileVariantProps) {
    // const cityRegion = (tile.northEdge as CityEdge).cityRegion

    return <g>
        <rect x="-50" y="-50" width="100" height="100" className="city" />
        <Shield shieldPosition={ShieldPosition.MID_CENTER} />
    </g>
}
