import React from 'react';
import { FieldEdge } from '../../models/Edge';
import { ORIENTATION_NORTH } from '../../models/Orientation';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import ThreeEdgeRegion from './shared/ThreeEdgeRegion';
import { useCreateFieldRegionMeeplePlay } from './shared/tileFeatureActions';
import TileVariantProps from './TileVariantProps';


export default function NorthernCitySvg({ tile }: TileVariantProps) {
    // const cityRegion = (tile.northEdge as CityEdge).cityRegion
    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <ThreeEdgeRegion className="field" orientation={ORIENTATION_NORTH} onClick={useCreateFieldRegionMeeplePlay(fieldRegion)} />
    </g>
}
