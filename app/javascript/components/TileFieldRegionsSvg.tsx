import _ from 'lodash';
import React from 'react';
import { CornerPair, cornerPairToString, edgeCornerPair, edgeOrdering } from '../models/Edge';
import { Point, pointEquals } from '../models/Point';
import { TILE_SIZE } from './PlayedTileSvg';
import { CURVE_DEPTH } from './TileCityRegionSvg';
import TileFieldRegionSvg from './TileFieldRegionSvg';
import { Tile } from "./TileSvg";

function fieldCornerPairConnectionPathStepAroundCity(lastEdgeCornerPair: CornerPair, nextEdgeCornerPairStart: Point) {
    if (pointEquals(lastEdgeCornerPair.end, nextEdgeCornerPairStart)) {
        return;
    }

    if (lastEdgeCornerPair.end.x == nextEdgeCornerPairStart.x) {
        return `C ` +
            `${nextEdgeCornerPairStart.x * TILE_SIZE * CURVE_DEPTH} ${nextEdgeCornerPairStart.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${lastEdgeCornerPair.end.x * TILE_SIZE * CURVE_DEPTH} ${lastEdgeCornerPair.end.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${lastEdgeCornerPair.end.x * TILE_SIZE} ${lastEdgeCornerPair.end.y * TILE_SIZE}`
    } else if (lastEdgeCornerPair.end.y == nextEdgeCornerPairStart.y) {
        return `C ` +
        `${nextEdgeCornerPairStart.x * TILE_SIZE * CURVE_DEPTH} ${nextEdgeCornerPairStart.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${lastEdgeCornerPair.end.x * TILE_SIZE * CURVE_DEPTH} ${lastEdgeCornerPair.end.y * TILE_SIZE * CURVE_DEPTH}, ` +
            `${lastEdgeCornerPair.end.x * TILE_SIZE} ${lastEdgeCornerPair.end.y * TILE_SIZE}`
    } else {
        const interiorCorner = lastEdgeCornerPair.start
        return `C ` +
            `${interiorCorner.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${interiorCorner.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
            `${interiorCorner.x * TILE_SIZE * (CURVE_DEPTH * 2)} ${interiorCorner.y * TILE_SIZE * (CURVE_DEPTH * 2)}, ` +
            `${lastEdgeCornerPair.end.x * TILE_SIZE} ${lastEdgeCornerPair.end.y * TILE_SIZE}`
    }
}


export default function TileFieldRegionsSvg({ tile: { fieldRegions, cityRegions } }: { tile: Tile }) {
    const interestingPathSteps = {}
    _.each(cityRegions, (cityRegion) => {
        const sortedEdges = _.sortBy(cityRegion.edges, (edge) => edgeOrdering(edge))
        const sortedCornerPairs = _.map(sortedEdges, edgeCornerPair)

        let lastCornerPair = _.last(sortedCornerPairs)
        _.each(sortedCornerPairs, (cornerPair) => {
            const pathStep = fieldCornerPairConnectionPathStepAroundCity(lastCornerPair, cornerPair.start)
            if (pathStep) {
                const pathCornerPair = {
                    start: cornerPair.start,
                    end: lastCornerPair.end
                }
                interestingPathSteps[cornerPairToString(pathCornerPair)] = pathStep
                lastCornerPair = cornerPair
            }
        })
    })

    return <React.Fragment>
        {
            _.map(fieldRegions, (fieldRegion, index) => (
                <TileFieldRegionSvg
                    interestingPathSteps={interestingPathSteps}
                    fieldRegion={fieldRegion}
                    index={index}
                    key={fieldRegion.id}
                />
            ))
        }
    </React.Fragment>
}
