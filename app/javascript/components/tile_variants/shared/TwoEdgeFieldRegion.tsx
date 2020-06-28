import React from 'react';
import { Corner } from '../../../models/Corner';
import { cornerTransform } from './TwoEdgeCityRegion';
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from './tileFeatureActions';
import { FieldRegion } from '../../TileSvg';
import Meeple from './Meeple';

const MEEPLE_POSITIONS_BY_CORNER = {
    [Corner.NORTH_WEST]: { x: -21, y: -21 },
    [Corner.SOUTH_WEST]: { x: -21, y: 21 },
    [Corner.SOUTH_EAST]: { x: 21, y: 21 },
    [Corner.NORTH_EAST]: { x: 21, y: -21 }
}

export default function TwoEdgeFieldRegion({ corner, fieldRegion }: { corner: Corner, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)
    return <g>
        <path
            className={fieldClassNames(onClick)}
            d="M -50 -50 L 50 -50 L 50 50 C -25 25 -25 25 -50 -50"
            transform={cornerTransform(corner)}
            onClick={onClick}
        />
        {
            fieldRegion.meeplePlay && (
                <Meeple
                    meeplePlay={fieldRegion.meeplePlay}
                    position={MEEPLE_POSITIONS_BY_CORNER[corner]}
                />
            )
        }
    </g>
}

