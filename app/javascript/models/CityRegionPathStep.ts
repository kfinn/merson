import _ from "lodash";
import { TILE_SIZE } from "../components/PlayedTileSvg";
import { CityRegion, CURVE_DEPTH } from "../components/TileCityRegionSvg";
import { Corner, cornersAreHorizontallyAligned, cornersAreVerticallyAligned, cornerToPoint, allCornerPairsSequences } from "./Corner";
import { CornerPair, cornerPairToString, edgeCornerPair, edgeOrdering } from "./Edge";

export type CityRegionPathStep = (from: Corner, to: Corner) => string
export type CityRegionPathStepCollection = (from: Corner, to: Corner) => CityRegionPathStep

export function cityRegionPathStepCollectionFindPath(
    cityRegionPathStepCollection: CityRegionPathStepCollection,
    start: Corner,
    end: Corner
) {
    const possibleCornerPairsSequences = allCornerPairsSequences(start, end)

    const possiblePaths = _.map(possibleCornerPairsSequences, (possibleCornerPairsSequence) => {
        return _.map(possibleCornerPairsSequence, ({ start, end }) => {
            const cityRegionPathStep = cityRegionPathStepCollection(start, end)
            if (cityRegionPathStep) {
                return () => ( cityRegionPathStep(start, end) )
            }
        })
    })

    const foundPath = _.find(possiblePaths, _.every) as (() => string)[]

    if (foundPath) {
        const appliedPathSteps = _.map(foundPath, (pathStep) => pathStep())
        const fullPath = _.join(appliedPathSteps, ' ')
        return fullPath
    }
    return linearCityRegionPathStep(start, end)
}

export function cityRegionPathStepCollectionMerge(lhs: CityRegionPathStepCollection, rhs: CityRegionPathStepCollection): CityRegionPathStepCollection {
    return (from: Corner, to: Corner) => {
        return lhs(from, to) || rhs(from, to)
    }
}

export function cityRegionPathStepCollectionConvertToExterior(collection: CityRegionPathStepCollection) {
    return (from: Corner, to: Corner) => {
        return collection(to, from)
    }
}

export function cityRegionPathStepCollection(cityRegion: CityRegion): CityRegionPathStepCollection {
    const sortedEdges = _.sortBy(cityRegion.edges, edgeOrdering)
    const sortedCornerPairs = _.map(sortedEdges, edgeCornerPair)

    let lastCornerPair = _.last(sortedCornerPairs)
    const cityPathSteps = {}
    _.each(sortedCornerPairs, (cornerPair) => {
        const pathStep = cityCornerPairConnectionPathStep(lastCornerPair, cornerPair.start)
        const pathCornerPair = {
            start: lastCornerPair.end,
            end: cornerPair.start
        }
        cityPathSteps[cornerPairToString(pathCornerPair)] = pathStep
        lastCornerPair = cornerPair
    })

    return (from: Corner, to: Corner) => {
        return cityPathSteps[cornerPairToString({ start: from, end: to })]
    }
}

export const EMPTY_CITY_REGION_PATH_STEP_COLLECTION: CityRegionPathStepCollection = () => null

function cityCornerPairConnectionPathStep(lastEdgeCornerPair: CornerPair, nextEdgeCornerPairStart: Corner) {
    if (lastEdgeCornerPair.end == nextEdgeCornerPairStart) {
        linearCityRegionPathStep
    }

    if (cornersAreHorizontallyAligned(lastEdgeCornerPair.end, nextEdgeCornerPairStart)) {
        return verticalCurvedCityRegionPathStep
    } else if (cornersAreVerticallyAligned(lastEdgeCornerPair.end, nextEdgeCornerPairStart)) {
        return horizontalCurvedCityRegionPathStep
    } else {
        return diagonalCityRegionPathStep(lastEdgeCornerPair.start)
    }
}

export function linearCityRegionPathStep(_from: Corner, to: Corner) {
    const toPoint = cornerToPoint(to)
    return `L ${toPoint.x * TILE_SIZE} ${toPoint.y * TILE_SIZE}`
}

export function verticalCurvedCityRegionPathStep(from: Corner, to: Corner) {
    const fromPoint = cornerToPoint(from)
    const toPoint = cornerToPoint(to)
    return `C ` +
        `${fromPoint.x * TILE_SIZE * CURVE_DEPTH} ${fromPoint.y * TILE_SIZE * CURVE_DEPTH}, ` +
        `${toPoint.x * TILE_SIZE * CURVE_DEPTH} ${toPoint.y * TILE_SIZE * CURVE_DEPTH}, ` +
        `${toPoint.x * TILE_SIZE} ${toPoint.y * TILE_SIZE}`
}

export function horizontalCurvedCityRegionPathStep(from: Corner, to: Corner) {
    const fromPoint = cornerToPoint(from)
    const toPoint = cornerToPoint(to)
    return `C ` +
        `${fromPoint.x * TILE_SIZE * CURVE_DEPTH} ${fromPoint.y * TILE_SIZE * CURVE_DEPTH}, ` +
        `${toPoint.x * TILE_SIZE * CURVE_DEPTH} ${toPoint.y * TILE_SIZE * CURVE_DEPTH}, ` +
        `${toPoint.x * TILE_SIZE} ${toPoint.y * TILE_SIZE}`
}

export function diagonalCityRegionPathStep(interiorCorner: Corner) {
    const interiorCornerPoint = cornerToPoint(interiorCorner)
    return (_from: Corner, to: Corner) => {
        const toPoint = cornerToPoint(to)
        return `C ` +
            `${interiorCornerPoint.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${interiorCornerPoint.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
            `${interiorCornerPoint.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${interiorCornerPoint.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
            `${toPoint.x * TILE_SIZE} ${toPoint.y * TILE_SIZE}`
    }
}
