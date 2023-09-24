export type CounterProps = {
  count: number
  changeCount: () => void
}

export const Counter = ({ count, changeCount }: CounterProps) => (
  <button onClick={changeCount}>
    count is {count}
  </button>
)