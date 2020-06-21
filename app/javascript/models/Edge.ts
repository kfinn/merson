import { Orientation, OrientationId, orientationOrdering } from "./Orientation";
import { Point, pointToString, pointEquals } from "./Point";
import _ from "lodash";
import { TILE_SIZE } from "../components/PlayedTileSvg";
import { CityRegionPathStepCollection, linearCityRegionPathStep, cityRegionPathStepCollectionFindPath } from "./CityRegionPathStep";
import { Corner, cornerToPoint } from "./Corner";

export interface Edge {
    id: number
    type: EdgeType
    orientation: Orientation
}

export interface RoadEdge extends Edge {
    type: EdgeType.ROAD_EDGE
    leftFieldRegion: { id: number }
    rightFieldRegion: { id: number }
}

enum EdgeType {
    CITY_EDGE = 'CityEdge',
    FIELD_EDGE = 'FieldEdge',
    ROAD_EDGE = 'RoadEdge'
}

const EDGE_CORNER_PAIRS_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: { start: Corner.NORTH_WEST, end: Corner.NORTH_EAST },
    [OrientationId.EAST]: { start: Corner.NORTH_EAST, end: Corner.SOUTH_EAST },
    [OrientationId.SOUTH]: { start: Corner.SOUTH_EAST, end: Corner.SOUTH_WEST },
    [OrientationId.WEST]: { start: Corner.SOUTH_WEST, end: Corner.NORTH_WEST },
}

export interface CornerPair {
    start: Corner,
    end: Corner,
}

export function edgeCornerPair({ orientation }: Edge): CornerPair {
    return EDGE_CORNER_PAIRS_BY_ORIENTATION_ID[orientation.id]
}

export function edgeOrdering({ orientation }: Edge) {
    return orientationOrdering(orientation)
}

export function edgesToSortedCorners(edges: Edge[]) {
    const sortedEdges = _.sortBy(edges, edgeOrdering)
    const sortedCornerPairs = _.map(sortedEdges, edgeCornerPair)
    return cornerPairsToCorners(sortedCornerPairs)
}

export function edgesToPathD(edges: Edge[], pathSteps: CityRegionPathStepCollection) {
    const corners = edgesToSortedCorners(edges)

    let lastCorner = _.last(corners)
    const cornerPoint = cornerToPoint(lastCorner)
    const svgMoves = [`M ${cornerPoint.x * TILE_SIZE} ${cornerPoint.y * TILE_SIZE}`]
    _.each(corners, (corner) => {
        const pathStep = cityRegionPathStepCollectionFindPath(pathSteps, lastCorner, corner)
        svgMoves.push(pathStep)
        lastCorner = corner
    })
    return _.join(svgMoves, ' ')
}

const EDGE_CENTERS_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: { x: 0, y: -0.5 },
    [OrientationId.EAST]: { x: 0.5, y: 0 },
    [OrientationId.SOUTH]: { x: 0, y: 0.5 },
    [OrientationId.WEST]: { x: -0.5, y: 0 },
}

export function edgeCenter({ orientation }: Edge): Point {
    return EDGE_CENTERS_BY_ORIENTATION_ID[orientation.id]
}

export function cornerPairReverse({ start, end }: CornerPair): CornerPair {
    return { start: end, end: start }
}

export function cornerPairToString({ start, end }: CornerPair): string {
    return JSON.stringify({ start, end })
}

export function cornerPairFromString(s: string): CornerPair {
    const { start, end } = JSON.parse(s)
    return { start, end }
}

export function cornerPairsToCorners(cornerPairs: CornerPair[]) {
    const corners = [_.first(cornerPairs).start]
    _.each(cornerPairs, ({ start, end }) => {
        if (_.last(corners) != start) {
            corners.push(start)
        }
        corners.push(end)
    })

    return corners
}
