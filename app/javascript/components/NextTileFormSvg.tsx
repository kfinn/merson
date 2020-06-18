import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import AvailableNextTilePositionSvg from './AvailableNextTilePositionSvg';
import { Game } from './Game';
import NextTileSvg from './NextTileSvg';

export default function NextTileFormSvg({ game }: { game: Game }) {
    const [position, setPosition] = useState(_.first(game.availableNextTilePositions))

    useEffect(() => {
        const xPositions = _.uniq(_.map(game.availableNextTilePositions, 'x'))
        const columnsCount = _.max(xPositions) - _.min(xPositions)
        const topLeftPosition = _.minBy(game.availableNextTilePositions, ({ x, y }) =>(x + y * columnsCount))
        setPosition(topLeftPosition)
    }, [game.availableNextTilePositions])

    return <React.Fragment>
        {
            _.map(game.availableNextTilePositions, (position) => (
                <AvailableNextTilePositionSvg
                    position={position}
                    key={`${position.x} ${position.y}`}
                    onClick={() => { setPosition(position) }}
                />
            ))
        }
        <NextTileSvg game={game} position={position} />
    </React.Fragment>
}
