import { useState } from 'react'
import { Counter } from './counter'

function App() {
  const [count, setCount] = useState(0)

  const handleChangeCount = () => setCount((count) => count + 1)

  return (
    <>
      <h1>Props Builder Example</h1>
      <Counter count={count} changeCount={handleChangeCount} />
    </>
  )
}

export default App
