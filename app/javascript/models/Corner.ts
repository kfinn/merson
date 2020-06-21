import { CornerPair } from "./Edge"
import _ from "lodash"

enum VerticalAlignment {
    NORTH, SOUTH
}

enum HorizontalAlignment {
    EAST, WEST
}

export enum Corner {
    NORTH_EAST,
    SOUTH_EAST,
    SOUTH_WEST,
    NORTH_WEST
}

export function cornerToPoint(corner: Corner) {
    return {
        x: horizontalAlignmentX(cornerHorizontalAlignment(corner)),
        y: verticalAlignmentY(cornerVerticalAlignment(corner))
    }
}

function cornerVerticalAlignment(corner: Corner) {
    switch(corner) {
        case Corner.NORTH_EAST:
        case Corner.NORTH_WEST:
            return VerticalAlignment.NORTH
        case Corner.SOUTH_EAST:
        case Corner.SOUTH_WEST:
            return VerticalAlignment.SOUTH
    }
}

function verticalAlignmentY(verticalAlignment: VerticalAlignment) {
    switch(verticalAlignment) {
        case VerticalAlignment.NORTH:
            return -0.5
        case VerticalAlignment.SOUTH:
            return 0.5
    }
}

function cornerHorizontalAlignment(corner: Corner) {
    switch(corner) {
        case Corner.NORTH_EAST:
        case Corner.SOUTH_EAST:
            return HorizontalAlignment.EAST
        case Corner.NORTH_WEST:
        case Corner.SOUTH_WEST:
            return HorizontalAlignment.WEST
    }
}

function horizontalAlignmentX(horizontalAlignment: HorizontalAlignment) {
    switch(horizontalAlignment) {
        case HorizontalAlignment.EAST:
            return 0.5
        case HorizontalAlignment.WEST:
            return -0.5
    }
}

export function cornersAreVerticallyAligned(lhs: Corner, rhs: Corner) {
    return cornerVerticalAlignment(lhs) == cornerVerticalAlignment(rhs)
}

export function cornersAreHorizontallyAligned(lhs: Corner, rhs: Corner) {
    return cornerHorizontalAlignment(lhs) == cornerHorizontalAlignment(rhs)
}

function cornerNextCorner(corner: Corner) {
    switch(corner) {
        case Corner.NORTH_EAST:
            return Corner.SOUTH_EAST
        case Corner.SOUTH_EAST:
            return Corner.SOUTH_WEST
        case Corner.SOUTH_WEST:
            return Corner.NORTH_WEST
        case Corner.NORTH_WEST:
            return Corner.NORTH_EAST
    }
}

export function cornerPairsSequence(from: Corner, to: Corner) {
    if (from == to) {
        return []
    }

    const nextCorner = cornerNextCorner(from)
    return [{ start: from, end: nextCorner }, ...cornerPairsSequence(nextCorner, to)]
}

export function allCornerPairsSequences(start: Corner, end: Corner): CornerPair[][] {
    if (start == end) {
        return []
    }

    const nextCorner = cornerNextCorner(start)
    const minimalPath = [{ start, end }]
    const firstPair = { start, end: nextCorner }
    const allCornerPairsSequencesAfterFirstPair = allCornerPairsSequences(nextCorner, end)
    const allNonMinimalPaths = _.map(allCornerPairsSequencesAfterFirstPair, (sequence) => {
        return [firstPair, ...sequence]
    })

    return [minimalPath, ...allNonMinimalPaths]
}
