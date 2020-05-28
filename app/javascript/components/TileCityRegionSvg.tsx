import React from 'react';
import { Edge, edgeOrdering, edgeCorners, Point, EdgeCorners } from '../models/Edge';
import _ from 'lodash';
import { TILE_SIZE } from './PlayedTileSvg';

export interface CityRegion {
    id: number
    edges: Edge[]
}

const CURVE_DEPTH = 0.25

function edgeCornersConnectionPathStep(lastEdgeCorners: EdgeCorners, nextEdgeCornersStart: Point) {
    if (lastEdgeCorners.end.x != nextEdgeCornersStart.x || lastEdgeCorners.end.y != nextEdgeCornersStart.y) {
        if (lastEdgeCorners.end.x == nextEdgeCornersStart.x) {
            return `C ` +
                `${lastEdgeCorners.end.x * TILE_SIZE * CURVE_DEPTH} ${lastEdgeCorners.end.y * TILE_SIZE * CURVE_DEPTH}, ` +
                `${nextEdgeCornersStart.x * TILE_SIZE * CURVE_DEPTH} ${nextEdgeCornersStart.y * TILE_SIZE * CURVE_DEPTH}, ` +
                `${nextEdgeCornersStart.x * TILE_SIZE} ${nextEdgeCornersStart.y * TILE_SIZE}`
        } else if (lastEdgeCorners.end.y == nextEdgeCornersStart.y) {
            return `C ` +
                `${lastEdgeCorners.end.x * TILE_SIZE * CURVE_DEPTH} ${lastEdgeCorners.end.y * TILE_SIZE * CURVE_DEPTH}, ` +
                `${nextEdgeCornersStart.x * TILE_SIZE * CURVE_DEPTH} ${nextEdgeCornersStart.y * TILE_SIZE * CURVE_DEPTH}, ` +
                `${nextEdgeCornersStart.x * TILE_SIZE} ${nextEdgeCornersStart.y * TILE_SIZE}`
        } else {
            const sharedCorner = lastEdgeCorners.start
            return `C ` +
                `${sharedCorner.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${sharedCorner.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
                `${sharedCorner.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${sharedCorner.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
                `${nextEdgeCornersStart.x * TILE_SIZE} ${nextEdgeCornersStart.y * TILE_SIZE}`
        }
    }
}

export default function TileCityRegionSvg({ cityRegion }: { cityRegion: CityRegion }) {
    const sortedEdges = _.sortBy(cityRegion.edges, edgeOrdering)
    const sortedEdgesCorners = _.map(sortedEdges, edgeCorners)

    let lastEdgeCorners = _.last(sortedEdgesCorners)
    const svgMoves = [`M ${lastEdgeCorners.end.x * TILE_SIZE} ${lastEdgeCorners.end.y * TILE_SIZE}`]
    _.each(sortedEdgesCorners, (edgeCorners, index) => {
        const { start, end } = edgeCorners
        svgMoves.push(edgeCornersConnectionPathStep(lastEdgeCorners, start))
        svgMoves.push(`L ${end.x * TILE_SIZE} ${end.y * TILE_SIZE}`)
        lastEdgeCorners = edgeCorners
    })

    return <path d={_.join(svgMoves, ' ')} fill="brown" />
}
