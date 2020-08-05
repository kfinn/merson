import React from 'react';
import { Orientation, orientationTransform, OrientationId } from '../../../models/Orientation';
import { FieldRegion } from '../../TileSvg';
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from './tileFeatureActions';
import Meeple from './Meeple';
import DebugTileFeatureId from './DebugTileFeatureId';

export default function HalfTileFieldAvoidingCity({ orientation, fieldRegion }: { orientation: Orientation, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <g>
        <path
            d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 -11 L -50 -11 L -50 -50"
            className={fieldClassNames(onClick)}
            transform={orientationTransform(orientation)}
            onClick={onClick}
        />
        <DebugTileFeatureId position={{ x: -32, y: orientation.id == OrientationId.NORTH ? -32 : 32 }} tileFeature={fieldRegion} />
        {
            fieldRegion.meeplePlay && (
                <Meeple
                    meeplePlay={fieldRegion.meeplePlay}
                    position={{ x: -32, y: orientation.id == OrientationId.NORTH ? -32 : 32 }}
                />
            )
        }
    </g>
}
