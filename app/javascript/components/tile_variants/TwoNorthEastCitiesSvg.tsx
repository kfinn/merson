import React from 'react';
import { CityEdge, FieldEdge } from '../../models/Edge';
import { ORIENTATION_EAST, ORIENTATION_NORTH } from '../../models/Orientation';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from './shared/tileFeatureActions';
import TileVariantProps from './TileVariantProps';


export default function TwoNorthEastCitiesSvg({ tile }: TileVariantProps) {
    const northCityRegion = (tile.northEdge as CityEdge).cityRegion
    const eastCityRegion = (tile.eastEdge as CityEdge).cityRegion

    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion
    const onClickFieldRegion = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <SingleEdgeRegion className="city" orientation={ORIENTATION_EAST} />
        <path
            d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 C 12.5 -12.5, 12.5 12.5, 50 50 L -50 50 L -50 -50"
            className={fieldClassNames(onClickFieldRegion)}
            onClick={onClickFieldRegion}
        />
    </g>
}

