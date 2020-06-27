import React from 'react';
import { CityEdge } from '../../models/Edge';
import Shield, { ShieldPosition } from './shared/Shield';
import { cityClassNames, useCreateCityRegionMeeplePlay } from './shared/tileFeatureActions';
import TileVariantProps from './TileVariantProps';

export default function SingleAllSidesCityWithShieldSvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion
    const onClick = useCreateCityRegionMeeplePlay(cityRegion)

    return <g>
        <rect
            x="-50"
            y="-50"
            width="100"
            height="100"
            className={cityClassNames(onClick)}
            onClick={onClick}
        />
        <Shield shieldPosition={ShieldPosition.MID_CENTER} />
    </g>
}
