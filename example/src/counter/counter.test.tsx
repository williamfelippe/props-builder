/**
 * @vitest-environment jsdom
 */

import { Counter } from './counter'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { counterBuilder } from './counter.builder';
import user from '@testing-library/user-event'

test('should show count', () => {
  const props = counterBuilder.buildOne()
  render(<Counter {...props} />)

  expect(screen.getByRole('button', { name: `count is ${props.count}` }))
})

test('should show count (fixed value)', () => {
  const props = counterBuilder.buildOne({ count: 2 })
  render(<Counter {...props} />)

  expect(screen.getByRole('button', { name: 'count is 2' }))
})

test('should execute callback when button is clicked', async () => {
  const props = counterBuilder.buildOne()
  render(<Counter {...props} />)

  const button = screen.getByRole('button')
  await user.click(button)

  expect(props.changeCount).toHaveBeenCalled()
})