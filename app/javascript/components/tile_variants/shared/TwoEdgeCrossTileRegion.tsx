import React from 'react';
import { actionableClassNames, useCreateTileFeatureMeeplePlay, tileFeatureClassNames } from './tileFeatureActions';
import { TileFeature } from '../../TileSvg';
import Meeple from './Meeple';
import DebugTileFeatureId from './DebugTileFeatureId';

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
    return <g>
        <path
            className={tileFeatureClassNames(tileFeature, onClick)}
            d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 50 C 12.5 12.5, -12.5 12.5, -50 50 L -50 -50"
            transform={axisTransform(axis)}
            onClick={onClick}
        />
        <DebugTileFeatureId position={{ x: 0, y: 0}} tileFeature={tileFeature} />
        {
            tileFeature.meeplePlay && (
                <Meeple
                    meeplePlay={tileFeature.meeplePlay}
                    position={{ x: 0, y: 0 }}
                />
            )
        }
    </g>
}
