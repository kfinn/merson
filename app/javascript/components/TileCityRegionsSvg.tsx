import React from 'react'
import TileCityRegionSvg, { CityRegion } from './TileCityRegionSvg'
import _ from 'lodash'

export default function TileCityRegionsSvg({ cityRegions, children }: React.PropsWithChildren<{ cityRegions: CityRegion[] }>) {

    return <React.Fragment>
        {
            _.map(cityRegions, (cityRegion) => (
                <TileCityRegionSvg cityRegion={cityRegion} key={cityRegion.id} />
            ))
        }
        {children}
    </React.Fragment>
}
