import {
  ZERO_VECTOR,
  sum,
  sub,
  scalarMultipl,
  magnitude,
  abs,
  isSame,
  Vector2
} from './vector2'

describe('sum', () => {
  const v = { x: 1, y: 1 }

  it('sum 1', () => {
    expect(sum(ZERO_VECTOR, v)).toStrictEqual(v)
  });

  it('sum 2', () => {
    const v = { x: 1, y: 1 }
    expect(sum(v, v, v)).toStrictEqual({ x: 3, y: 3 })
  });

  it('sum 3', () => {
    expect(sum(ZERO_VECTOR, ZERO_VECTOR, ZERO_VECTOR)).toStrictEqual(ZERO_VECTOR)
  });
})

describe('sub', () => {
  const v = { x: 1, y: 1 }

  it('sub 1', () => {
    expect(sub(ZERO_VECTOR, v)).toStrictEqual({ x: -1, y: -1 })
  });

  it('sub 2', () => {
    const v = { x: 1, y: 1 }
    expect(sub(v, v, v)).toStrictEqual({ x: -1, y: -1 })
  });

  it('sub 3', () => {
    expect(sub(ZERO_VECTOR, ZERO_VECTOR, ZERO_VECTOR)).toStrictEqual(ZERO_VECTOR)
  });
})

describe('scalarMultipl', () => {
  const v = { x: 1, y: 1 }

  it('scalarMultipl 1', () => {
    expect(scalarMultipl(v, 1)).toStrictEqual(v)
  });

  it('scalarMultipl 2', () => {
    expect(scalarMultipl({ x: -1, y: -1 }, 3)).toStrictEqual({ x: -3, y: -3 })
  });

  it('scalarMultipl 3', () => {
    expect(scalarMultipl({ x: 5, y: 5 }, 3)).toStrictEqual({ x: 15, y: 15 })
  });
})

describe('magnitude', () => {
  it('magnitude 1', () => {
    expect(magnitude(ZERO_VECTOR)).toStrictEqual(0)
  });

  it('magnitude 2', () => {
    expect(magnitude({ x: 3, y: 4 })).toStrictEqual(5)
  });
})

describe('abs', () => {
  const v = { x: 1, y: 1 }

  it('abs 1', () => {
    expect(abs(v)).toStrictEqual(v)
  });

  it('abs 2', () => {
    expect(abs({ x: -1, y: -1 })).toStrictEqual(v)
  });
})

describe('isSame', () => {
  const v = { x: 1, y: 1 }

  it('isSame 1', () => {
    expect(isSame(v, v)).toStrictEqual(true)
  });

  it('isSame 2', () => {
    expect(isSame(v, ZERO_VECTOR, v)).toStrictEqual(false)
  });

  it('isSame 3', () => {
    expect(isSame(v, v, ZERO_VECTOR)).toStrictEqual(false)
  });

  it('isSame 3', () => {
    expect(isSame(v, v, ZERO_VECTOR, v)).toStrictEqual(false)
  });

  it('isSame 4', () => {
    expect(isSame(ZERO_VECTOR, v, v, v)).toStrictEqual(false)
  });

  it('isSame 5', () => {
    expect(isSame(ZERO_VECTOR, ZERO_VECTOR)).toStrictEqual(true)
  });

  it('isSame 6', () => {
    expect(isSame({ x: 0.5555555555555, y: 0.9999999991111 }, { x: 0.5555555555555, y: 0.9999999991111 })).toStrictEqual(true)
  });
})

describe('generate Vector2', () => {
  it('generate Vector2 1', () => {
    expect(Vector2(1, 1)).toStrictEqual({ x: 1, y: 1 })
  })
})
