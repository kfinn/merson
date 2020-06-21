import React from 'react';
import { RoadSegment } from './TileSvg';
import { edgeCenter } from '../models/Edge';
import { TILE_SIZE } from './PlayedTileSvg';
import _ from 'lodash';

export default function TileThruRoadSegmentSvg({ roadSegment: { edges: [startEdge, endEdge] } }: { roadSegment: RoadSegment }) {
    const start = edgeCenter(startEdge)
    const end = edgeCenter(endEdge)
    return <path
        d={`
            M ${start.x * TILE_SIZE} ${start.y * TILE_SIZE}
            C 0 0 0 0 ${end.x * TILE_SIZE} ${end.y * TILE_SIZE}
        `}
        className="road-segment"
    />

    return
}
