import Api from "../../../models/Api"
import { FieldRegion, CityRegion, RoadSegment, TileFeature, TileFeatureType } from "../../TileSvg"
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

export function useCreateRoadSegmentMeeplePlay(roadSegment: RoadSegment) {
    const { availableRoadSegments } = useContext(AvailableActionsContext)
    if (_.some(availableRoadSegments, (availableRoadSegment) => availableRoadSegment.id == roadSegment.id)) {
        return () => {
            Api
                .post(`road_segments/${roadSegment.id}/road_segment_meeple_play`)
                .catch(console.log)
        }
    }
    return null
}

export function useCreateTileFeatureMeeplePlay(tileFeature: TileFeature) {
    const creators = {
        [TileFeatureType.FIELD_REGION]: useCreateFieldRegionMeeplePlay(tileFeature as FieldRegion),
        [TileFeatureType.CITY_REGION]: useCreateCityRegionMeeplePlay(tileFeature as CityRegion),
        [TileFeatureType.ROAD_SEGMENT]: useCreateRoadSegmentMeeplePlay(tileFeature as RoadSegment)
    }

    return creators[tileFeature.type]
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

export function roadSegmentClassNames(hasAction: any) {
    return actionableClassNames('road', hasAction)
}

export function tileFeatureClassNames({ type }: TileFeature, hasAction: any) {
    const classNamesByTileFeatureType = {
        [TileFeatureType.CITY_REGION]: 'city',
        [TileFeatureType.FIELD_REGION]: 'field',
        [TileFeatureType.ROAD_SEGMENT]: 'road'
    }

    return actionableClassNames(classNamesByTileFeatureType[type], hasAction)
}
