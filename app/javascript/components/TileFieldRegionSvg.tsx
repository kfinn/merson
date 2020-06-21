import React from 'react';
import { edgesToPathD } from '../models/Edge';
import { FieldRegion } from "./TileSvg";
import { CityRegionPathStepCollection } from '../models/CityRegionPathStep';

interface Props {
    fieldRegion: FieldRegion
    cityRegionPathSteps: CityRegionPathStepCollection
    index: number
}

export default function TileFieldRegionSvg({ fieldRegion, cityRegionPathSteps, index }: Props) {
    const COLOR_VARIANTS = ['#00FF00', '#008800', '#004400']
    const pathD = edgesToPathD(fieldRegion.edges, cityRegionPathSteps)
    return <path d={pathD} fill={COLOR_VARIANTS[index]} />
}
