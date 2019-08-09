export interface Vector2 {
  x: number
  y: number
}

export function Vector2(x: number, y: number): Vector2 {
  return { x, y }
}

export const ZERO_VECTOR: Vector2 = Object.freeze({ x: 0, y: 0 } as const)

export function sum(...matrix: [Vector2, ...Vector2[]]): Vector2 {
  return matrix.reduce((sum, v) => ({ x: sum.x + v.x, y: sum.y + v.y }), { x: 0, y: 0 })
}

export function sub(...matrix: [Vector2, ...Vector2[]]): Vector2 {
  return matrix.reduce((prev, v) => ({ x: prev.x - v.x, y: prev.y - v.y }))
}

export function scalarMultipl(v: Vector2, scale: number): Vector2 {
  return { x: v.x * scale, y: v.y * scale }
}

export function magnitude(v: Vector2): number {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}

export function distance(a: Vector2, b: Vector2): number {
  return magnitude(sub(a, b))
}

export function abs(v: Vector2): Vector2 {
  return { x: Math.abs(v.x), y: Math.abs(v.y) }
}

export function isSame(...matrix: [Vector2, ...Vector2[]]): boolean {
  for (let i = 1; i < matrix.length; i++) {
    if (!(matrix[0].x === matrix[i].x && matrix[0].y === matrix[i].y)) {
      return false
    }
  }
  return true
}
