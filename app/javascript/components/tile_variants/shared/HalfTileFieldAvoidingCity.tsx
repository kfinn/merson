import React from 'react';
import { Orientation, orientationTransform } from '../../../models/Orientation';
import classNames from 'classnames';
import { fieldClassNames } from './tileFeatureActions';

export default function HalfTileFieldAvoidingCity({ orientation, onClick }: { orientation: Orientation, onClick?: () => void }) {
    return <path
        d="M -50 -50 C -12.5 -12.5, 12.5 -12.5, 50 -50 L 50 -11 L -50 -11 L -50 -50"
        className={fieldClassNames(onClick)}
        transform={orientationTransform(orientation)}
        onClick={onClick}
    />
}
