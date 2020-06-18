import React from 'react';
import { FieldRegion } from "./TileSvg";
import TileFieldRegionSvg from './TileFieldRegionSvg';
import _ from 'lodash';

export default function({ fieldRegions }: { fieldRegions: FieldRegion[] }) {
    return <React.Fragment>
        {
            _.map(fieldRegions, (fieldRegion, index) => (
                <TileFieldRegionSvg fieldRegion={fieldRegion} index={index} key={fieldRegion.id} />
            ))
        }
    </React.Fragment>
}
