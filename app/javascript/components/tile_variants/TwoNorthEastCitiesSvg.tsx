import React from 'react';
import { CityEdge, FieldEdge } from '../../models/Edge';
import { ORIENTATION_EAST, ORIENTATION_NORTH } from '../../models/Orientation';
import SingleEdgeRegion from './shared/SingleEdgeRegion';
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from './shared/tileFeatureActions';
import TileVariantProps from './TileVariantProps';
import Meeple from './shared/Meeple';

export default function TwoNorthEastCitiesSvg({ tile }: TileVariantProps) {
    const northCityRegion = (tile.northEdge as CityEdge).cityRegion
    const eastCityRegion = (tile.eastEdge as CityEdge).cityRegion

    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion
    const onClickFieldRegion = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <g>
        <SingleEdgeRegion
            orientation={ORIENTATION_NORTH}
            tileFeature={northCityRegion}
        />
        <SingleEdgeRegion
            orientation={ORIENTATION_EAST}
            tileFeature={eastCityRegion}
        />
        <g>
            <path
                d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 C 12.5 -12.5, 12.5 12.5, 50 50 L -50 50 L -50 -50"
                className={fieldClassNames(onClickFieldRegion)}
                onClick={onClickFieldRegion}
            />
            {
                fieldRegion.meeplePlay && (
                    <Meeple
                        meeplePlay={fieldRegion.meeplePlay}
                        position={{ x: -5, y: 5 }}
                    />
                )
            }
        </g>
    </g>
}

