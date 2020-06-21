import React from 'react';
import { RoadSegment } from "./TileSvg";
import TileTerminalRoadSegmentSvg from './TileTerminalRoadSegmentSvg';
import TileThruRoadSegmentSvg from './TileThruRoadSegmentSvg';
import _ from 'lodash';

export default function TileRoadSegmentSvg({ roadSegment }: { roadSegment: RoadSegment }) {
    if (_.size(roadSegment.edges) == 1) {
        return <TileTerminalRoadSegmentSvg roadSegment={roadSegment} />
    }
    return <TileThruRoadSegmentSvg roadSegment={roadSegment} />
}
