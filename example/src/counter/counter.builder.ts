import { CounterProps } from "./";
import { propsBuilder } from '../../../src/index'

import { vi } from 'vitest'
import { faker } from '@faker-js/faker'

export const counterBuilder = propsBuilder<CounterProps>(
  'CounterBuilder', 
  () => ({
    count: faker.number.int(),
    changeCount: vi.fn()
  })
)