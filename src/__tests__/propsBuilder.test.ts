import { propsBuilder } from '../propsBuilder'

const testBuilder = propsBuilder<{ test: string }>('Test', { test: 'it works!' })

test('should set default property', () => {
  const expectedResult = 'it works!'
  const props = testBuilder()

  expect(props).toHaveProperty('test')
  expect(props.test).toBe(expectedResult)
})

test('should change property after building', () => {
  const expectedResult = 'it changes!'
  const props = testBuilder({ test: expectedResult })

  expect(props).toHaveProperty('test')
  expect(props.test).toBe(expectedResult)
})