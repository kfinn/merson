import _ from 'lodash';
import React from 'react';
import { cityRegionPathStepCollection, cityRegionPathStepCollectionConvertToExterior, cityRegionPathStepCollectionMerge, EMPTY_CITY_REGION_PATH_STEP_COLLECTION } from '../models/CityRegionPathStep';
import TileFieldRegionSvg from './TileFieldRegionSvg';
import { Tile } from "./TileSvg";

export default function TileFieldRegionsSvg({ tile: { fieldRegions, cityRegions } }: { tile: Tile }) {
    const cityRegionPathSteps = _.reduce(cityRegions, (acc, cityRegion) => {
        const cityRegionInteriorPathStepCollection = cityRegionPathStepCollection(cityRegion)
        const cityRegionExteriorPathStepCollection = cityRegionPathStepCollectionConvertToExterior(cityRegionInteriorPathStepCollection)
        return cityRegionPathStepCollectionMerge(acc, cityRegionExteriorPathStepCollection)
    }, EMPTY_CITY_REGION_PATH_STEP_COLLECTION)

    return <React.Fragment>
        {
            _.map(fieldRegions, (fieldRegion, index) => (
                <TileFieldRegionSvg
                    cityRegionPathSteps={cityRegionPathSteps}
                    fieldRegion={fieldRegion}
                    index={index}
                    key={fieldRegion.id}
                />
            ))
        }
    </React.Fragment>
}
