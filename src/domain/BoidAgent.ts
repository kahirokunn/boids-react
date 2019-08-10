import { Vector2, ZERO_VECTOR, sum as calcSum, magnitude, scalarMultipl, sub, distance } from '../lib/vector2';

const RULE_1_COEF = 0.01
const RULE_2_COEF = 2.1
const RULE_3_COEF = 0.2
const FOV = 20
const MAX_SPEED = 2

export class BoidAgent {
  public acc = ZERO_VECTOR

  constructor(public pos: Vector2, public vel: Vector2) { }

  public updateVel(boids: BoidAgent[]) {
    const vec1 = this.moveToBoidsCenter(boids)
    const vec2 = this.avoidObstacles(boids)
    const vec3 = this.goSameDirection(boids)
    this.acc = calcSum(vec1, vec2, vec3)
  }

  public updatePos() {
    let vel = calcSum(this.acc, this.vel)
    const length = magnitude(vel)
    if (length > MAX_SPEED) {
      vel = scalarMultipl(vel, 1 / (length / MAX_SPEED))
    }
    this.vel = vel
    this.pos = calcSum(this.pos, this.vel)
  }

  private moveToBoidsCenter(boids: BoidAgent[]) {
    const center = scalarMultipl(calcSum(ZERO_VECTOR, ...boids.map(boid => boid.pos)), 1 / boids.length)
    return scalarMultipl(sub(center, this.pos), RULE_1_COEF)
  }

  private avoidObstacles(boids: BoidAgent[]) {
    return scalarMultipl(boids
      .map(boid => boid.pos)
      .reduce(
        (sum, v) => {
          const dist = distance(v, this.pos)
          return dist < FOV ? calcSum(sum, scalarMultipl(sub(this.pos, v), 1 / dist)) : sum
        }
        , ZERO_VECTOR), RULE_2_COEF)
  }

  private goSameDirection(boids: BoidAgent[]) {
    const direction = scalarMultipl(calcSum(ZERO_VECTOR, ...boids.map(boid => boid.acc)), 1 / boids.length)
    return scalarMultipl(sub(direction, this.vel), RULE_3_COEF)
  }
}
