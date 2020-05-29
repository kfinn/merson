import { atom } from 'recoil'
import { OrientationId } from './Orientation';

const selectedNextTileOrientationId = atom({
    key: 'selectedNextTileOrientationId',
    default: OrientationId.NORTH
})

export default selectedNextTileOrientationId
