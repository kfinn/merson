import React from 'react';
import { Orientation, orientationTransform } from '../../../models/Orientation';
import { actionableClassNames, useCreateTileFeatureMeeplePlay, tileFeatureClassNames } from './tileFeatureActions';
import { TileFeature } from '../../TileSvg';

export default function ThreeEdgeRegion({ tileFeature, orientation }: { tileFeature: TileFeature, orientation: Orientation, onClick?: () => void }) {
    const onClick = useCreateTileFeatureMeeplePlay(tileFeature)
    return <path
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 50 L -50 50 L -50 -50"
        className={tileFeatureClassNames(tileFeature, onClick)}
        transform={orientationTransform(orientation)}
        onClick={onClick}
    />
}
