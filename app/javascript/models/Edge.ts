import { Orientation, OrientationId, orientationOrdering } from "./Orientation";
import { Point } from "./Point";

export interface Edge {
    id: number
    type: EdgeType
    orientation: Orientation
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

export interface EdgeCorners {
    start: Point,
    end: Point,
}

export function edgeCorners({ orientation }: Edge): EdgeCorners {
    return EDGE_CORNERS_BY_ORIENTATION_ID[orientation.id]
}

export function edgeOrdering({ orientation }: Edge) {
    return orientationOrdering(orientation)
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
