import React from 'react';
import { TILE_RADIUS, TILE_SIZE } from './PlayedTileSvg';
import { FieldRegion } from "./TileSvg";

export default function TileFieldRegionSvg({ fieldRegion }: { fieldRegion: FieldRegion }) {
    return <React.Fragment>
        <rect x={-TILE_RADIUS} y={-TILE_RADIUS} width={TILE_SIZE} height={TILE_SIZE} fill="green" />
    </React.Fragment>
}
