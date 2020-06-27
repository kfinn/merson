import React from 'react';
import { Orientation, orientationTransform } from '../../../models/Orientation';
import { FieldRegion } from '../../TileSvg';
import { fieldClassNames, useCreateFieldRegionMeeplePlay } from './tileFeatureActions';

export default function HalfTileFieldAvoidingCity({ orientation, fieldRegion }: { orientation: Orientation, fieldRegion: FieldRegion }) {
    const onClick = useCreateFieldRegionMeeplePlay(fieldRegion)

    return <path
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 -11 L -50 -11 L -50 -50"
        className={fieldClassNames(onClick)}
        transform={orientationTransform(orientation)}
        onClick={onClick}
    />
}
