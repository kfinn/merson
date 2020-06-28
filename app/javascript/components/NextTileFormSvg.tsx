import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import AvailableNextTilePositionSvg from './AvailableNextTilePositionSvg';
import { CurrentPlayerContext, Game } from './Game';
import NextTileSvg from './NextTileSvg';

export default function NextTileFormSvg({ game }: { game: Game }) {
    const { availableNextTilePositions } = useContext(CurrentPlayerContext)

    const getInitialNextTilePosition = () => {
        if (_.some(availableNextTilePositions)) {
            const xPositions = _.uniq(_.map(availableNextTilePositions, 'x'))
            const columnsCount = _.max(xPositions) - _.min(xPositions)
            return _.minBy(availableNextTilePositions, ({ x, y }) => (x + y * columnsCount))
        } else if (game.turn && game.turn.tile.x && game.turn.tile.y) {
            return { x: game.turn.tile.x, y: game.turn.tile.y }
        } else {
            const minPlayedTileXPosition = _.min(_.map(game.playedTiles, 'x'))
            const minPlayedTileYPosition = _.min(_.map(game.playedTiles, 'y'))
            return { x: minPlayedTileXPosition - 1, y: minPlayedTileYPosition - 1 }
        }
    }

    const [position, setPosition] = useState(getInitialNextTilePosition())

    useEffect(() => {
        setPosition(getInitialNextTilePosition())
    }, [game.turn?.tile?.id])

    if (!game.turn) {
        return null;
    }

    return <React.Fragment>
        {
            _.map(availableNextTilePositions, (position) => (
                <AvailableNextTilePositionSvg
                    position={position}
                    key={`${position.x} ${position.y}`}
                    onClick={() => { setPosition(position) }}
                />
            ))
        }
        <NextTileSvg game={game} tile={game.turn.tile} position={position} />
    </React.Fragment>
}
