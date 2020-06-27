import React from "react";
import { CityEdge, FieldEdge } from "../../models/Edge";
import { ORIENTATION_SOUTH } from "../../models/Orientation";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import ThreeEdgeRegion from "./shared/ThreeEdgeRegion";
import TileVariantProps from './TileVariantProps';
import { useCreateFieldRegionMeeplePlay, useCreateCityRegionMeeplePlay } from "./shared/tileFeatureActions";


export default function SingleWestNorthEastCitySvg({ tile }: TileVariantProps) {
    const cityRegion = (tile.northEdge as CityEdge).cityRegion
    const fieldRegion = (tile.southEdge as FieldEdge).fieldRegion

    return <g>
        <ThreeEdgeRegion
            className="city"
            orientation={ORIENTATION_SOUTH}
            onClick={useCreateCityRegionMeeplePlay(cityRegion)}
        />
        <SingleEdgeRegion
            className="field"
            orientation={ORIENTATION_SOUTH}
            onClick={useCreateFieldRegionMeeplePlay(fieldRegion)}
        />
    </g>
}
