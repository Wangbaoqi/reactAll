import { expect, it, describe } from 'vitest'

import singletonCounter from './singleton'

describe('test singleton pattern', () => {
  it('should be increment and decrement', () => {
    expect(singletonCounter.getCount()).toBe(0)
    singletonCounter.increment()
    expect(singletonCounter.getCount()).toBe(1)
    singletonCounter.decrement()
    expect(singletonCounter.getCount()).toBe(0)
  })

  it('increment 3 extra times should be 3', () => {
    singletonCounter.increment()
    singletonCounter.increment()
    singletonCounter.increment()
    expect(singletonCounter.getCount()).toBe(3)
  })

  it('decrement 1 extra times should be 2', () => {
    singletonCounter.decrement()
    expect(singletonCounter.getCount()).toBe(2)
  })
})
