
import _ from 'lodash';
import React from 'react';
import AvailableNextTilePositionSvg from './AvailableNextTilePositionSvg';
import { Game } from './Game';
import PlayedTileSvg, { TILE_RADIUS, TILE_SIZE } from './PlayedTileSvg';
import NextTileSvg from './NextTileSvg';

const BORDER_RADIUS = 100

export default function BoardSvg({ game: { playedTiles, nextTile, availableNextTilePositions } }: { game: Game }) {
    const xCoordinates = _.map(playedTiles, 'x')
    const yCoordinates = _.map(playedTiles, 'y')

    const xMin = _.min(xCoordinates) * TILE_SIZE - TILE_RADIUS
    const yMin = _.min(yCoordinates) * TILE_SIZE - TILE_RADIUS

    const xMax = _.max(xCoordinates) * TILE_SIZE + TILE_RADIUS
    const yMax = _.max(yCoordinates) * TILE_SIZE + TILE_RADIUS

    const width = xMax - xMin + (BORDER_RADIUS * 2)
    const height = yMax - yMin + (BORDER_RADIUS * 2)

    const x = xMin - BORDER_RADIUS
    const y = yMin - BORDER_RADIUS

    return <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`${x} ${y} ${width} ${height}`} className="board">
            {
                _.map(playedTiles, (playedTile) => (
                    <PlayedTileSvg key={playedTile.id} playedTile={playedTile} />
                ))
            }
            {
                _.map(availableNextTilePositions, (position) => (
                    <AvailableNextTilePositionSvg position={position} key={`${position.x} ${position.y}`} />
                ))
            }
            <NextTileSvg nextTile={nextTile} />
        </svg>
    </React.Fragment>
}
