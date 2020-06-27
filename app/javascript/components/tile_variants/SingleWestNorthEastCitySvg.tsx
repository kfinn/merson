import React from "react";
import { CityEdge, FieldEdge } from "../../models/Edge";
import { ORIENTATION_SOUTH } from "../../models/Orientation";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import ThreeEdgeRegion from "./shared/ThreeEdgeRegion";
import TileVariantProps from './TileVariantProps';

export default function SingleWestNorthEastCitySvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion
    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <ThreeEdgeRegion
            orientation={ORIENTATION_SOUTH}
            tileFeature={cityRegion}
        />
        <SingleEdgeRegion
            orientation={ORIENTATION_SOUTH}
            tileFeature={fieldRegion}
        />
    </g>
}
