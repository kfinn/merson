export interface Point {
    x: number,
    y: number
}

export function pointEquals(lhs: Point, rhs: Point) {
    return lhs.x == rhs.x && lhs.y == rhs.y
}

export function pointToString({ x, y }: Point) {
    return `{ x: ${x}, y: ${y} }`
}
