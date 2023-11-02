import { useState } from 'react'
import AppComponent from './ClassComponents'
import ErrorBoundary from './ErrorBoundary'

function ClassPart() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
      <h1 className="text-3xl font-medium">Class Components</h1>
      <div className="my-3">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <AppComponent age={18} />
    </ErrorBoundary>
  )
}

export default ClassPart
