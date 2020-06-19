import _ from 'lodash';
import React from 'react';
import { cornerPairToString, edgesToSortedCorners, edgesToPathD } from '../models/Edge';
import { TILE_SIZE } from './PlayedTileSvg';
import { FieldRegion } from "./TileSvg";

interface Props {
    fieldRegion: FieldRegion
    interestingPathSteps: { [index: string]: string }
    index: number
}

export default function TileFieldRegionSvg({ fieldRegion, interestingPathSteps, index }: Props) {
    const COLOR_VARIANTS = ['#00FF00', '#008800', '#004400']
    const pathD = edgesToPathD(fieldRegion.edges, interestingPathSteps)
    return <path d={pathD} fill={COLOR_VARIANTS[index]} />
}
