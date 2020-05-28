import React from 'react';
import { useRecoilValue } from 'recoil';
import selectedAvailableNextTilePosition from '../models/selectedAvailableNextTilePosition';
import TileSvg from "./TileSvg";
import { TILE_SIZE } from './PlayedTileSvg';
import Api from '../models/Api';
import { Game } from './Game';

export default function NextTileSvg({ game }: { game: Game }) {
    const selectedNextTilePosition = useRecoilValue(selectedAvailableNextTilePosition)

    const onClick = () => {
        const asyncOnClick = async () => {
            try {
                await Api.post(
                    `games/${game.id}/next_tile_plays.json`,
                    {
                        nextTilePlay: {
                            ...selectedNextTilePosition,
                            orientation_id: 'north'
                        }
                    }
                )
            } catch (error) {
                console.log(error.response)
            }
        }

        asyncOnClick()
    }

    if (selectedNextTilePosition) {
        return <g className="next-tile-container" transform={`translate(${selectedNextTilePosition.x * TILE_SIZE} ${selectedNextTilePosition.y * TILE_SIZE})`}>
            <g className="next-tile-contents" onClick={onClick}>
                <TileSvg tile={game.nextTile} />
            </g>
        </g>
    } else {
        return null;
    }
}
