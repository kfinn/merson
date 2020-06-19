import { Orientation, OrientationId, orientationOrdering } from "./Orientation";
import { Point, pointToString, pointEquals } from "./Point";
import _ from "lodash";
import { TILE_SIZE } from "../components/PlayedTileSvg";

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

const EDGE_CORNERS_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: { start: { x: -0.5, y: -0.5 }, end: { x: 0.5, y: -0.5 } },
    [OrientationId.EAST]: { start: { x: 0.5, y: -0.5 }, end: { x: 0.5, y: 0.5 } },
    [OrientationId.SOUTH]: { start: { x: 0.5, y: 0.5 }, end: { x: -0.5, y: 0.5 } },
    [OrientationId.WEST]: { start: { x: -0.5, y: 0.5 }, end: { x: -0.5, y: -0.5 } },
}

export interface CornerPair {
    start: Point,
    end: Point,
}

export function edgeCornerPair({ orientation }: Edge): CornerPair {
    return EDGE_CORNERS_BY_ORIENTATION_ID[orientation.id]
}

export function edgeOrdering({ orientation }: Edge) {
    return orientationOrdering(orientation)
}

export function edgesToSortedCorners(edges: Edge[]) {
    const sortedEdges = _.sortBy(edges, edgeOrdering)
    const sortedCornerPairs = _.map(sortedEdges, edgeCornerPair)
    return cornerPairsToCorners(sortedCornerPairs)
}

export function edgesToPathD(edges: Edge[], interestingPathSteps?: { [index: string]: string }) {
    const corners = edgesToSortedCorners(edges)

    let lastCorner = _.last(corners)
    const svgMoves = [`M ${lastCorner.x * TILE_SIZE} ${lastCorner.y * TILE_SIZE}`]
    _.each(corners, (corner) => {
        const interestingPath = interestingPathSteps[cornerPairToString({ start: lastCorner, end: corner })]
        if (interestingPath) {
            svgMoves.push(interestingPath)
        } else {
            svgMoves.push(`L ${corner.x * TILE_SIZE} ${corner.y * TILE_SIZE}`)
        }
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

export function cornerPairToString({ start, end }: CornerPair) {
    return `{ start: ${pointToString(start)}, end: ${pointToString(end)} }`
}

export function cornerPairsToCorners(cornerPairs: CornerPair[]) {
    const corners = [_.first(cornerPairs).start]
    _.each(cornerPairs, ({ start, end }) => {
        if (!pointEquals(_.last(corners), start)) {
            corners.push(start)
        }
        corners.push(end)
    })

    return corners
}
