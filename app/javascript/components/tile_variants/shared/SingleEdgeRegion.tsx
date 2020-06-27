import React from 'react';
import { Orientation, orientationTransform } from '../../../models/Orientation';
import { TileFeature } from '../../TileSvg';
import { tileFeatureClassNames, useCreateTileFeatureMeeplePlay } from './tileFeatureActions';

export default function SingleEdgeRegion({ tileFeature, orientation }: { tileFeature: TileFeature, orientation: Orientation }) {
    const onClick = useCreateTileFeatureMeeplePlay(tileFeature)
    return <path
        d="M 50 -50 C 12.5 -12.5, -12.5 -12.5, -50 -50 L 50 -50"
        className={tileFeatureClassNames(tileFeature, onClick)}
        transform={orientationTransform(orientation)}
        onClick={onClick}
    />
}
