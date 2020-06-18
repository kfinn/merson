import React from 'react';
import { TILE_RADIUS, TILE_SIZE } from './PlayedTileSvg';
import { FieldRegion } from "./TileSvg";

export default function TileFieldRegionSvg({ fieldRegion, index }: { fieldRegion: FieldRegion, index: number }) {
    const COLOR_VARIANTS = ['#00FF00', '#008800', '#004400']

    return <React.Fragment>
        <rect x={-TILE_RADIUS} y={-TILE_RADIUS} width={TILE_SIZE} height={TILE_SIZE} fill={COLOR_VARIANTS[index]} />
    </React.Fragment>
}
