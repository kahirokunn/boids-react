import React from 'react';
import './App.css';
import { Positions } from './components/Positions';
import { useBoids } from './hooks/boids';

export const App: React.FC = () => {
  const { boids } = useBoids()
  return (
    <Positions matrix={boids.map(boid => ({ x: boid.pos.x, y: boid.pos.y }))} />
  )
}
