import { CounterProps } from "./";
import { propsBuilder } from '../../../src/index'

import { randNumber } from '@ngneat/falso'
import { vi } from 'vitest'

export const counterBuilder = propsBuilder<CounterProps>(
  'CounterBuilder', 
  {
    count: randNumber(),
    changeCount: vi.fn()
  }
)