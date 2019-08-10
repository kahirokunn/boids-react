import { useState, useEffect } from "react";
import { Vector2 } from '../lib/vector2';
import { BoidAgent } from '../domain/BoidAgent';
import { getRandomInt } from '../lib/int';
import { MIN_W, MAX_W } from "../domain/area";

function cloneBoid(boid: BoidAgent): BoidAgent {
  return new BoidAgent(boid.pos, boid.acc)
}

function generateBoidAgents(size: number): BoidAgent[] {
  const boids = []
  for (let i = 0; i < size; i++) {
    const x = getRandomInt(MIN_W + 10, MAX_W - 10)
    const y = getRandomInt(MIN_W + 10, MAX_W - 10)
    const vx = getRandomInt(-10, 10)
    const vy = getRandomInt(-10, 10)
    const p = Vector2(x, y)
    const v = Vector2(vx, vy)
    boids.push(new BoidAgent(p, v))
  }
  return boids
}

const fps = 30
const every = fps / 1000


function update(boids: BoidAgent[]): BoidAgent[] {
  return boids.map(boid => {
    boid.updateVel(boids.filter(b => b !== boid));
    boid.updatePos();
    return boid
  })
}

export function useBoids() {
  const [boids, setBoids] = useState(generateBoidAgents(10));

  useEffect(() => {
    const interval = setInterval(() => setBoids(boids => update(boids.map(boid => cloneBoid(boid)))), every)
    return () => clearInterval(interval)
  })

  return { boids }
}
