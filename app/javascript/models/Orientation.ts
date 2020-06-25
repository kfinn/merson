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

export const ORIENTATION_NORTH: Orientation = { id: OrientationId.NORTH }
export const ORIENTATION_EAST: Orientation = { id: OrientationId.EAST }
export const ORIENTATION_SOUTH: Orientation = { id: OrientationId.SOUTH }
export const ORIENTATION_WEST: Orientation = { id: OrientationId.WEST }

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

export function orientationTransform({ id }: Orientation) {
    switch (id) {
        case OrientationId.NORTH:
            return '';
        case OrientationId.EAST:
            return 'rotate(90)';
        case OrientationId.SOUTH:
            return 'rotate(180)';
        case OrientationId.WEST:
            return 'rotate(270)';
    }
}
