import _ from "lodash";
import React from "react";
import { Point } from "../../../models/Point";
import { MeeplePlay } from "../../TileSvg";

interface Props {
    position: Point
    meeplePlay: MeeplePlay
}

const MEEPLE_PLAY_CLASS_NAMES = [
    'red', 'yellow', 'green', 'blue', 'black'
]

export function meeplePlayClassName(meeplePlay: { player: { id: number } }) {
    return MEEPLE_PLAY_CLASS_NAMES[meeplePlay.player.id % _.size(MEEPLE_PLAY_CLASS_NAMES)]
}

export default function Meeple({ meeplePlay, position: { x, y } }: Props) {
    return <g transform={`translate(${x - 10}, ${y - 10})`}>
        <path className={`meeple ${meeplePlayClassName(meeplePlay)}`} d={`
            M0,8
            C0,8.79016538 1.52985456,9.78984384 4.58956367,10.9990354
            C1.19657599,16.6299812 -0.333278562,19.6303027 0,20
            C0.333278562,20.3696973 3.6666119,18.8868287 10,15.5513942
            C16.2306668,18.9173782 19.5640002,20.4002468 20,20
            C20.4359998,19.5997532 18.9230703,16.5994316 15.4612115,10.9990354
            C18.4870705,9.83119583 20,8.83151737 20,8
            C20,7.16848263 17.1746127,6.71906567 11.5238381,6.65174913
            C12.6934468,6.08521174 13.5,4.88679616 13.5,3.5
            C13.5,1.56700338 11.9329966,0 10,0
            C8.06700338,0 6.5,1.56700338 6.5,3.5
            C6.5,4.89305412 7.31384878,6.09602367 8.49201773,6.65938003
            C2.83067258,6.7629613 0,7.20983462 0,8
            Z
        `}/>
    </g>
}
