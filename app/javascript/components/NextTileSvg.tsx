import React, { useEffect, useState } from 'react';
import Api from '../models/Api';
import { OrientationId, orientationNextOrientation, orientationPreviousOrientation, orientationTransform } from '../models/Orientation';
import { Point } from '../models/Point';
import { Game } from './Game';
import { TILE_RADIUS, TILE_SIZE } from './PlayedTileSvg';
import TileSvg, { Tile } from "./TileSvg";

interface Props {
    game: Game
    tile: Tile
    position: Point
}

export default function NextTileSvg({ game, tile, position }: Props) {
    const [orientationId, setOrientationId] = useState(OrientationId.NORTH)

    useEffect(() => {
        setOrientationId(OrientationId.NORTH)
    }, [tile.id])

    const onClick = () => {
        const asyncOnClick = async () => {
            try {
                await Api.post(
                    `games/${game.id}/tile_plays`,
                    {
                        tilePlay: {
                            ...position,
                            orientationId
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
        setOrientationId(orientationPreviousOrientation({ id: orientationId}).id)
    }

    const rotateRight = () => {
        setOrientationId(orientationNextOrientation({ id: orientationId}).id)
    }

    if (position) {
        return <g className="next-tile-container" transform={`translate(${position.x * TILE_SIZE} ${position.y * TILE_SIZE})`}>
            <g className="next-tile-container" transform={`${orientationTransform({ id: orientationId })}`}>
                <g className="next-tile-contents" onClick={onClick}>
                    <TileSvg tile={tile} />
                </g>
            </g>
            <text onClick={rotateLeft} className="next-tile-rotate-button" x={-TILE_RADIUS - 10} y={0} textAnchor="middle">⬅️</text>
            <text onClick={rotateRight} className="next-tile-rotate-button" x={TILE_RADIUS + 10} y={0} textAnchor="middle">➡️</text>
        </g>
    } else {
        return null;
    }
}
