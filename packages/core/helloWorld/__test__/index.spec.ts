import { describe, it, expect } from 'vitest'
import { helloWorld } from '..'

describe('helloWorld', () => {
  it('Test', () => {
    expect(helloWorld()).toBe('helloWorld')
  })
})
