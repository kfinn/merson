import React from 'react';
import Shield, { ShieldPosition } from './shared/Shield';

export default function SingleAllSidesCityWithShieldSvg() {
    return <g>
        <rect x="-50" y="-50" width="100" height="100" className="city" />
        <Shield shieldPosition={ShieldPosition.MID_CENTER} />
    </g>
}
