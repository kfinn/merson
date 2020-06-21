import { createConsumer } from '@rails/actioncable';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Api from '../models/Api';
import { Point } from '../models/Point';
import BoardSvg from './BoardSvg';
import { PlayedTile } from './PlayedTileSvg';
import { Tile } from './TileSvg';

export interface Game {
    id: number
    playedTiles: PlayedTile[]
    nextTile: Tile
    availableNextTilePositions: Point[]
}

const consumer = createConsumer()

export default function Game(props: { game: Game }) {
    const [game, setGame] = useState(props.game)

    const refresh = async () => {
        const response = await Api.get(`/games/${game.id}.json`)
        setGame(response.data as Game)
    }

    const debouncedRefresh = _.debounce(refresh)

    useEffect(() => {
        const subscription = consumer.subscriptions.create(
            { channel: 'GamesChannel', id: game.id },
            {
                connected() {
                    debouncedRefresh()
                },
                received() {
                    debouncedRefresh()
                }
            }
        )

        return () => { subscription.disconnect() }
    }, [game.id])

    return <BoardSvg game={game} />
}
