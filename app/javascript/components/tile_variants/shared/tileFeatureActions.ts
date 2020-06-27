import Api from "../../../models/Api"
import { FieldRegion, CityRegion } from "../../TileSvg"
import { useContext } from "react"
import { AvailableActionsContext } from "../../Game"
import _ from "lodash"
import classNames from "classnames"

export function useCreateFieldRegionMeeplePlay(fieldRegion: FieldRegion) {
    const { availableFieldRegions } = useContext(AvailableActionsContext)
    if (_.some(availableFieldRegions, (availableFieldRegion) => availableFieldRegion.id == fieldRegion.id)) {
        return () => {
            Api
                .post(`field_regions/${fieldRegion.id}/field_region_meeple_play`)
                .catch(console.log)
        }
    }
    return null
}

export function useCreateCityRegionMeeplePlay(cityRegion: CityRegion) {
    const { availableCityRegions } = useContext(AvailableActionsContext)
    if (_.some(availableCityRegions, (availableCityRegion) => availableCityRegion.id == cityRegion.id)) {
        return () => {
            Api
                .post(`city_regions/${cityRegion.id}/city_region_meeple_play`)
                .catch(console.log)
        }
    }
    return null
}

export function actionableClassNames(className: string, hasAction: any) {
    return classNames(
        className,
        { 'has-action': hasAction }
    )
}

export function fieldClassNames(hasAction: any) {
    return actionableClassNames('field', hasAction)
}

export function cityClassNames(hasAction: any) {
    return actionableClassNames('city', hasAction)
}
