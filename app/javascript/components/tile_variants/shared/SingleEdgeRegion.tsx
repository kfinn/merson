import React from 'react';
import { Orientation, orientationTransform, OrientationId } from '../../../models/Orientation';
import { TileFeature } from '../../TileSvg';
import { tileFeatureClassNames, useCreateTileFeatureMeeplePlay } from './tileFeatureActions';
import Meeple from './Meeple';

const MEEPLE_POSITIONS_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: { x: 0, y: -36 },
    [OrientationId.EAST]: { x: 36, y: 0 },
    [OrientationId.SOUTH]: { x: 0, y: 36 },
    [OrientationId.WEST]: { x: -36, y: 0 }
}

export default function SingleEdgeRegion({ tileFeature, orientation }: { tileFeature: TileFeature, orientation: Orientation }) {
    const onClick = useCreateTileFeatureMeeplePlay(tileFeature)
    return <g>
        <path
            d="M 50 -50 C 12.5 -12.5, -12.5 -12.5, -50 -50 L 50 -50"
            className={tileFeatureClassNames(tileFeature, onClick)}
            transform={orientationTransform(orientation)}
            onClick={onClick}
        />
        {
            tileFeature.meeplePlay && (
                <Meeple
                    meeplePlay={tileFeature.meeplePlay}
                    position={MEEPLE_POSITIONS_BY_ORIENTATION_ID[orientation.id]}
                />
            )
        }
    </g>
}
