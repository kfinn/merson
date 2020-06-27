import React from "react";
import { CityEdge, FieldEdge } from "../../models/Edge";
import { ORIENTATION_NORTH, ORIENTATION_SOUTH } from "../../models/Orientation";
import SingleEdgeRegion from "./shared/SingleEdgeRegion";
import { useCreateFieldRegionMeeplePlay } from "./shared/tileFeatureActions";
import TwoEdgeCrossTileRegion, { Axis } from "./shared/TwoEdgeCrossTileRegion";
import TileVariantProps from './TileVariantProps';


export default function TwoNorthSouthCitiesSvg({ tile }: TileVariantProps) {
    const northCityRegion = (tile.northEdge as CityEdge).cityRegion
    const fieldRegion = (tile.eastEdge as FieldEdge).fieldRegion
    const southCityRegion = (tile.southEdge as CityEdge).cityRegion

    return <g>
        <SingleEdgeRegion className="city" orientation={ORIENTATION_NORTH} />
        <TwoEdgeCrossTileRegion
            className="field"
            axis={Axis.HORIZONTAL}
            onClick={useCreateFieldRegionMeeplePlay(fieldRegion)}
        />
        <SingleEdgeRegion className="city" orientation={ORIENTATION_SOUTH} />
    </g>
}
