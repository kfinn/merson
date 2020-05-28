import React from 'react';
import { RoadSegment } from "./TileSvg";
import { edgeCenter } from '../models/Edge';
import { TILE_SIZE } from './PlayedTileSvg';

const ROAD_WIDTH = 15

export default function TileRoadSegmentSvg({ roadSegment }: { roadSegment: RoadSegment }) {
    const start = edgeCenter(roadSegment.edges[0])
    const end = roadSegment.edges[1] ? edgeCenter(roadSegment.edges[1]) : { x: 0, y: 0 }
    return <line
        x1={start.x * TILE_SIZE}
        y1={start.y * TILE_SIZE}
        x2={end.x * TILE_SIZE}
        y2={end.y * TILE_SIZE}
        stroke="gray"
        strokeWidth={ROAD_WIDTH}
    />
}
