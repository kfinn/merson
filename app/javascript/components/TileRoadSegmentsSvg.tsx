import React from 'react';
import { RoadSegment } from './TileSvg';
import _ from 'lodash';
import TileRoadSegmentSvg from './TileRoadSegmentSvg';

export default function TileRoadSegmentsSvg({ roadSegments, children }: React.PropsWithChildren<{ roadSegments: RoadSegment[] }>) {
    return <React.Fragment>
        {children}
        {
            _.map(roadSegments, (roadSegment) => (
                <TileRoadSegmentSvg roadSegment={roadSegment} key={roadSegment.id} />
            ))
        }
    </React.Fragment>
}
