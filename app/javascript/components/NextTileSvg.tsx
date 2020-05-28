import React from 'react';
import { useRecoilValue } from 'recoil';
import selectedAvailableNextTilePosition from '../models/selectedAvailableNextTilePosition';
import TileSvg, { Tile } from "./TileSvg";
import { TILE_SIZE } from './PlayedTileSvg';

export default function NextTileSvg({ nextTile }: { nextTile: Tile }) {
    const selectedNextTilePosition = useRecoilValue(selectedAvailableNextTilePosition)

    if (selectedNextTilePosition) {
        return <g className="next-tile-container" transform={`translate(${selectedNextTilePosition.x * TILE_SIZE} ${selectedNextTilePosition.y * TILE_SIZE})`}>
            <g className="next-tile-contents">
                <TileSvg tile={nextTile} />
            </g>
        </g>
    } else {
        return null;
    }
}
