import _ from "lodash"

export enum OrientationId {
    NORTH = 'north',
    EAST = 'east',
    SOUTH = 'south',
    WEST = 'west',
}

export interface Orientation {
    id: OrientationId
}

const NEXT_ORIENTATION_ID_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: OrientationId.EAST,
    [OrientationId.EAST]: OrientationId.SOUTH,
    [OrientationId.SOUTH]:OrientationId.WEST,
    [OrientationId.WEST]: OrientationId.NORTH,
}

const PREVIOUS_ORIENTATION_ID_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: OrientationId.WEST,
    [OrientationId.EAST]: OrientationId.NORTH,
    [OrientationId.SOUTH]: OrientationId.EAST,
    [OrientationId.WEST]: OrientationId.SOUTH,
}

export function orientationNextOrientation({ id } : Orientation) {
    return { id: NEXT_ORIENTATION_ID_BY_ORIENTATION_ID[id] }
}

export function orientationPreviousOrientation({ id }: Orientation) {
    return { id: PREVIOUS_ORIENTATION_ID_BY_ORIENTATION_ID[id]}
}

const ADJACENT_ORIENTATION_IDS_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: [orientationPreviousOrientation({ id: OrientationId.NORTH }).id, orientationNextOrientation({ id: OrientationId.NORTH}).id],
    [OrientationId.EAST]: [orientationPreviousOrientation({ id: OrientationId.EAST }).id, orientationNextOrientation({ id: OrientationId.EAST}).id],
    [OrientationId.SOUTH]: [orientationPreviousOrientation({ id: OrientationId.SOUTH }).id, orientationNextOrientation({ id: OrientationId.SOUTH}).id],
    [OrientationId.WEST]: [orientationPreviousOrientation({ id: OrientationId.WEST }).id, orientationNextOrientation({ id: OrientationId.WEST}).id],
}

export function orientationsAreAdjacent(orientation1: Orientation, orientation2: Orientation) {
    return _.includes(ADJACENT_ORIENTATION_IDS_BY_ORIENTATION_ID[orientation1.id], orientation2.id)
}

const ORIENTATION_ORDERING_BY_ORIENTATION_ID = {
    [OrientationId.NORTH]: 0,
    [OrientationId.EAST]: 1,
    [OrientationId.SOUTH]: 2,
    [OrientationId.WEST]: 3,
}

export function orientationOrdering({ id }: Orientation) {
    return ORIENTATION_ORDERING_BY_ORIENTATION_ID[id]
}
