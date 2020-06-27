import React from 'react';
import { Corner } from '../../models/Corner';
import { CityEdge, FieldEdge } from '../../models/Edge';
import TwoEdgeCityRegion from './shared/TwoEdgeCityRegion';
import TwoEdgeFieldRegion from './shared/TwoEdgeFieldRegion';
import TileVariantProps from './TileVariantProps';

export default function SingleNorthEastCitySvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion
    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <TwoEdgeCityRegion
            corner={Corner.NORTH_EAST}
            cityRegion={cityRegion}
        />
        <TwoEdgeFieldRegion
            corner={Corner.SOUTH_WEST}
            fieldRegion={fieldRegion}
        />
    </g>
}
