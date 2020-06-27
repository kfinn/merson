import React from 'react';
import Shield, { ShieldPosition } from './shared/Shield';
import TileVariantProps from './TileVariantProps';
import { CityEdge } from '../../models/Edge';
import { useCreateCityRegionMeeplePlay, cityClassNames } from './shared/tileFeatureActions';


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
