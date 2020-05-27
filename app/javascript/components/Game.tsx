import React from 'react';
import _ from 'lodash';
import PlayedTileSvg, { PlayedTile, Tile, TILE_SIZE } from './PlayedTileSvg';

interface Game {
    playedTiles: PlayedTile[]
    nextTile: Tile
}

enum OrientationId {
    NORTH = 'north',
    EAST = 'east',
    SOUTH = 'south',
    WEST = 'west'
}

export interface Orientation {
    id: OrientationId
}

const BORDER_RADIUS = 100

export default function Game({ game }: { game: Game }) {
    const xCoordinates = _.map(game.playedTiles, 'x')
    const yCoordinates = _.map(game.playedTiles, 'y')

    const xMin = _.min(xCoordinates) * TILE_SIZE - (TILE_SIZE / 2)
    const yMin = _.min(yCoordinates) * TILE_SIZE - (TILE_SIZE / 2)

    const xMax = _.max(xCoordinates) * TILE_SIZE + (TILE_SIZE / 2)
    const yMax = _.max(yCoordinates) * TILE_SIZE + (TILE_SIZE / 2)

    const width = xMax - xMin + (BORDER_RADIUS * 2)
    const height = yMax - yMin + (BORDER_RADIUS * 2)

    const x = xMin - BORDER_RADIUS
    const y = yMin - BORDER_RADIUS

    return <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`${x} ${y} ${width} ${height}`} className="board">
            {
                _.map(game.playedTiles, (playedTile) => (
                    <PlayedTileSvg key={playedTile.id} playedTile={playedTile} />
                ))
            }
        </svg>
    </React.Fragment>
}
