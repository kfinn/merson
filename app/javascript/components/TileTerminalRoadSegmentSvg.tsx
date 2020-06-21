import React from 'react';
import { RoadSegment } from './TileSvg';
import { edgeCenter } from '../models/Edge';
import { TILE_SIZE } from './PlayedTileSvg';

export default function TileTerminalRoadSegmentSvg({ roadSegment: { edges: [edge] } }: { roadSegment: RoadSegment}) {
    const start = edgeCenter(edge)
    return <line
        x1={start.x * TILE_SIZE}
        y1={start.y * TILE_SIZE}
        x2={0}
        y2={0}
        className="road-segment"
    />
}
