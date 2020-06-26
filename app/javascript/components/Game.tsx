import { createConsumer } from '@rails/actioncable';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Api from '../models/Api';
import { Point } from '../models/Point';
import BoardSvg from './BoardSvg';
import { PlayedTile } from './PlayedTileSvg';
import { Tile } from './TileSvg';
import StartGameButton from './StartGameButton';
import CurrentPlayerStatus from './CurrentPlayerStatus';

export interface CurrentPlayer extends Player {
    status: {
        actor: string
        action: string
    }
    game: Game
    availableNextTilePositions: Point[]
}

interface Player {
    id: number
    name: number
}

export interface Game {
    id: number
    playedTiles: PlayedTile[]
    startedAt: string
    turn?: Turn
    players: Player[]
}

interface Turn {
    id: number
    tile: Tile
}

const consumer = createConsumer()

function gameIsStarted(game: Game) {
    return !!game.startedAt
}

export default function Game(props: { currentPlayer: CurrentPlayer }) {
    const [currentPlayer, setCurrentPlayer] = useState(props.currentPlayer)
    const { game, availableNextTilePositions } = currentPlayer

    const refresh = async () => {
        const response = await Api.get(`/games/${game.id}/current_player`)
        setCurrentPlayer(response.data as CurrentPlayer)
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

    return <div>
        <CurrentPlayerStatus currentPlayer={currentPlayer} />
        {
            !gameIsStarted(game) && (
                <StartGameButton game={game} />
            )
        }
        <BoardSvg game={game} availableNextTilePositions={availableNextTilePositions} />
    </div>
}
