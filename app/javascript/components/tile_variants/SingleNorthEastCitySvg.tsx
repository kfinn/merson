import React from 'react';
import { Corner } from '../../models/Corner';
import { CityEdge, FieldEdge } from '../../models/Edge';
import { useCreateFieldRegionMeeplePlay, useCreateCityRegionMeeplePlay } from './shared/tileFeatureActions';
import TwoEdgeCityRegion from './shared/TwoEdgeCityRegion';
import TwoEdgeFieldRegion from './shared/TwoEdgeFieldRegion';
import TileVariantProps from './TileVariantProps';


export default function SingleNorthEastCitySvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion
    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <TwoEdgeCityRegion
            corner={Corner.NORTH_EAST}
            onClick={useCreateCityRegionMeeplePlay(cityRegion)}
        />
        <TwoEdgeFieldRegion
            corner={Corner.SOUTH_WEST}
            onClick={useCreateFieldRegionMeeplePlay(fieldRegion)}
        />
    </g>
}
