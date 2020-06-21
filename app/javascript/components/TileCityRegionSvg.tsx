import React from 'react';
import { cityRegionPathStepCollection } from '../models/CityRegionPathStep';
import { Edge, edgesToPathD } from '../models/Edge';

export interface CityRegion {
    id: number
    edges: Edge[]
}

export const CURVE_DEPTH = 0.25

export default function TileCityRegionSvg({ cityRegion }: { cityRegion: CityRegion }) {
    const pathSteps = cityRegionPathStepCollection(cityRegion)
    const pathD = edgesToPathD(cityRegion.edges, pathSteps)
    return <path d={pathD} fill="chocolate" />
}
