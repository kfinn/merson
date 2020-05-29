import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import selectedAvailableNextTilePosition from '../models/selectedAvailableNextTilePosition';
import selectedNextTileOrientationId from '../models/selectedNextTileOrientationId';
import TileSvg from "./TileSvg";
import { TILE_SIZE, TILE_RADIUS, transformForOrientation } from './PlayedTileSvg';
import Api from '../models/Api';
import { Game } from './Game';
import { OrientationId, orientationNextOrientation, orientationPreviousOrientation } from '../models/Orientation';

export default function NextTileSvg({ game }: { game: Game }) {
    const [nextTilePosition, setNextTilePosition] = useRecoilState(selectedAvailableNextTilePosition)
    const [nextTileOrientationId, setNextTileOrientationId] = useRecoilState(selectedNextTileOrientationId)

    useEffect(() => {
        setNextTilePosition(null)
        setNextTileOrientationId(OrientationId.NORTH)
    }, [game.nextTile.id])

    const onClick = () => {
        const asyncOnClick = async () => {
            try {
                await Api.post(
                    `games/${game.id}/next_tile_plays.json`,
                    {
                        nextTilePlay: {
                            ...nextTilePosition,
                            orientationId: nextTileOrientationId
                        }
                    }
                )
            } catch (error) {
                console.log(error.response)
            }
        }

        asyncOnClick()
    }

    const rotateLeft = () => {
        setNextTileOrientationId(orientationPreviousOrientation({ id: nextTileOrientationId}).id)
    }

    const rotateRight = () => {
        setNextTileOrientationId(orientationNextOrientation({ id: nextTileOrientationId}).id)
    }

    if (nextTilePosition) {
        return <g className="next-tile-container" transform={`translate(${nextTilePosition.x * TILE_SIZE} ${nextTilePosition.y * TILE_SIZE})`}>
            <g className="next-tile-container" transform={`${transformForOrientation({ id: nextTileOrientationId })}`}>
                <g className="next-tile-contents" onClick={onClick}>
                    <TileSvg tile={game.nextTile} />
                </g>
            </g>
            <text onClick={rotateLeft} className="next-tile-rotate-button" x={-TILE_RADIUS - 10} y={0} textAnchor="middle">⬅️</text>
            <text onClick={rotateRight} className="next-tile-rotate-button" x={TILE_RADIUS + 10} y={0} textAnchor="middle">➡️</text>
        </g>
    } else {
        return null;
    }
}
