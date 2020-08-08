import React from 'react';
import { Orientation, orientationTransform, OrientationId } from '../../../models/Orientation';
import { TileFeature } from '../../TileSvg';
import { tileFeatureClassNames, useCreateTileFeatureMeeplePlay } from './tileFeatureActions';
import Meeple from './Meeple';
import DebugTileFeatureId from './DebugTileFeatureId';

const MEEPLE_POSITIONS_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: { x: 0, y: 2 },
    [OrientationId.EAST]: { x: -38, y: 0 },
    [OrientationId.SOUTH]: { x: 0, y: -38 },
    [OrientationId.WEST]: { x: 2, y: 0 }
}

export default function ThreeEdgeRegion({ tileFeature, orientation }: { tileFeature: TileFeature, orientation: Orientation, onClick?: () => void }) {
    const onClick = useCreateTileFeatureMeeplePlay(tileFeature)
    return <g>
        <path
            d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 50 L -50 50 L -50 -50"
            className={tileFeatureClassNames(tileFeature, onClick)}
            transform={orientationTransform(orientation)}
            onClick={onClick}
        />
        <DebugTileFeatureId position={MEEPLE_POSITIONS_BY_ORIENTATION_ID[orientation.id]} tileFeature={tileFeature} />
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
