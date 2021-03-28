import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={() => {
            return setCount(count + 1)
          }}
        >
          Increment
        </button>
      </div>
    </>
  )
}

export { Counter }
