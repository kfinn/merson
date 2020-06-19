import _ from 'lodash';
import React from 'react';
import { Edge, edgeCornerPair, CornerPair, edgeOrdering, cornerPairToString, cornerPairsToCorners } from '../models/Edge';
import { Point, pointEquals } from '../models/Point';
import { TILE_SIZE } from './PlayedTileSvg';

export interface CityRegion {
    id: number
    edges: Edge[]
}

export const CURVE_DEPTH = 0.25

function cityCornerPairConnectionPathStep(lastEdgeCornerPair: CornerPair, nextEdgeCornerPairStart: Point) {
    if (pointEquals(lastEdgeCornerPair.end, nextEdgeCornerPairStart)) {
        return;
    }

    if (lastEdgeCornerPair.end.x == nextEdgeCornerPairStart.x) {
        return `C ` +
            `${lastEdgeCornerPair.end.x * TILE_SIZE * CURVE_DEPTH} ${lastEdgeCornerPair.end.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${nextEdgeCornerPairStart.x * TILE_SIZE * CURVE_DEPTH} ${nextEdgeCornerPairStart.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${nextEdgeCornerPairStart.x * TILE_SIZE} ${nextEdgeCornerPairStart.y * TILE_SIZE}`
    } else if (lastEdgeCornerPair.end.y == nextEdgeCornerPairStart.y) {
        return `C ` +
            `${lastEdgeCornerPair.end.x * TILE_SIZE * CURVE_DEPTH} ${lastEdgeCornerPair.end.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${nextEdgeCornerPairStart.x * TILE_SIZE * CURVE_DEPTH} ${nextEdgeCornerPairStart.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${nextEdgeCornerPairStart.x * TILE_SIZE} ${nextEdgeCornerPairStart.y * TILE_SIZE}`
    } else {
        const interiorCorner = lastEdgeCornerPair.start
        return `C ` +
            `${interiorCorner.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${interiorCorner.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
            `${interiorCorner.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${interiorCorner.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
            `${nextEdgeCornerPairStart.x * TILE_SIZE} ${nextEdgeCornerPairStart.y * TILE_SIZE}`
    }
}

export default function TileCityRegionSvg({ cityRegion }: { cityRegion: CityRegion }) {
    const sortedEdges = _.sortBy(cityRegion.edges, edgeOrdering)
    const sortedCornerPairs = _.map(sortedEdges, edgeCornerPair)

    let lastCornerPair = _.last(sortedCornerPairs)
    const interestingPathSteps = {}
    _.each(sortedCornerPairs, (cornerPair) => {
        const pathStep = cityCornerPairConnectionPathStep(lastCornerPair, cornerPair.start)
        if (pathStep) {
            const pathCornerPair = {
                start: lastCornerPair.end,
                end: cornerPair.start
            }
            interestingPathSteps[cornerPairToString(pathCornerPair)] = pathStep
            lastCornerPair = cornerPair
        }
    })

    const corners = cornerPairsToCorners(sortedCornerPairs)

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

    return <path d={_.join(svgMoves, ' ')} fill="brown" />
}
