import React from 'react';
import { actionableClassNames, useCreateTileFeatureMeeplePlay, tileFeatureClassNames } from './tileFeatureActions';
import { TileFeature } from '../../TileSvg';

export enum Axis {
    HORIZONTAL, VERTICAL
}

function axisTransform(axis: Axis) {
    switch(axis) {
        case Axis.HORIZONTAL:
            return ''
        case Axis.VERTICAL:
            return 'rotate(90)'
    }
}

export default function TwoEdgeCrossTileRegion({ tileFeature, axis }: { tileFeature: TileFeature, axis: Axis }) {
    const onClick = useCreateTileFeatureMeeplePlay(tileFeature)
    return <path
        className={tileFeatureClassNames(tileFeature, onClick)}
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 50 C 12.5 12.5, -12.5 12.5, -50 50 L -50 -50"
        transform={axisTransform(axis)}
        onClick={onClick}
    />

}
