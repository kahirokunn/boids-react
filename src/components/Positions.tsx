import React from 'react';
import { Vector2 } from '../lib/vector2';

export type PositionsProps = {
  matrix: Vector2[]
}

const Agent: React.SFC<{ v: Vector2 }> = props => {
  return (
    <circle cx={props.v.x} cy={props.v.y} r={2} style={{ fill: 'rgb(102, 153, 255)' }} />
  )
}

export const Positions: React.SFC<PositionsProps> = props => {
  return (
    <svg width={1680} height={939}>
      {props.matrix.map((v, i) => <Agent key={i} v={v} />)}
    </svg>
  );
}
