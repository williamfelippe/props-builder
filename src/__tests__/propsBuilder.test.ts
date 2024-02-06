import { faker } from '@faker-js/faker'

import { propsBuilder } from '../propsBuilder'

type TestProps = { test: string }
const initialValue = faker.word.sample()
const testBuilder = propsBuilder<TestProps>('Test', () => ({ test: initialValue }))

test('should set default property', () => {
  const props = testBuilder.buildOne()

  expect(props).toHaveProperty('test')
  expect(props.test).toBe(initialValue)
})

test('should change property after building', () => {
  const expectedResult = 'it changes!'
  const props = testBuilder.buildOne({ test: expectedResult })

  expect(props).toHaveProperty('test')
  expect(props.test).toBe(expectedResult)
})

test('should create multiple properties', () => {
  const props = testBuilder.buildMultiples(3)

  expect(props).toHaveLength(3)
})