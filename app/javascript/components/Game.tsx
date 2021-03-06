import { createConsumer } from '@rails/actioncable';
import _ from 'lodash';
import React, { useEffect, useState, useCallback } from 'react';
import Api from '../models/Api';
import { Point } from '../models/Point';
import BoardSvg from './BoardSvg';
import CurrentPlayerStatus from './CurrentPlayerStatus';
import EndTurnButton from './EndTurnButton';
import { PlayedTile } from './PlayedTileSvg';
import StartGameButton from './StartGameButton';
import { FieldRegion, Tile, CityRegion, RoadSegment } from './TileSvg';
import PlayerList from './PlayerList';
import { Player } from './Player';
import pluralize from 'pluralize';

export const CurrentPlayerContext = React.createContext({
    availableNextTilePositions: [],
    availableFieldRegions: [],
    availableCityRegions: [],
    availableRoadSegments: []
} as CurrentPlayer)

export interface CurrentPlayer extends Player, AvailableActions {
    status: {
        actor: string
        action: string
    }
    game: Game
}

export interface AvailableActions {
    availableNextTilePositions: Point[]
    availableFieldRegions: FieldRegion[]
    availableCityRegions: CityRegion[]
    availableRoadSegments: RoadSegment[]
    canEndTurn: boolean
}

export interface Game {
    id: number
    playedTiles: PlayedTile[]
    startedAt: string
    upcomingTilesCount: number
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
    const { game } = currentPlayer

    const debouncedRefresh = useCallback(
        _.debounce(async () => {
            const response = await Api.get(`/games/${game.id}/current_player`)
            setCurrentPlayer(response.data as CurrentPlayer)
        }, 500),
        []
    )

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

    return <CurrentPlayerContext.Provider value={currentPlayer}>
        <div>
            <CurrentPlayerStatus currentPlayer={currentPlayer} />
            <div>{game.upcomingTilesCount} {pluralize('tile', game.upcomingTilesCount)} remaining</div>
            {
                gameIsStarted(game) ? (
                    <EndTurnButton game={game} />
                ) : (
                    <StartGameButton game={game} />
                )
            }
            <BoardSvg game={game} />
            <PlayerList game={game} />
        </div>
    </CurrentPlayerContext.Provider>
}
