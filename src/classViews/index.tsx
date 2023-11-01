import { useState } from 'react'
import AppComponent from './ClassComponents'

function ClassPart() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-medium">Class Components</h1>
      <div className="my-3">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <AppComponent age={18} />
    </>
  )
}

export default ClassPart
