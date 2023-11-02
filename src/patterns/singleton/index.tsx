import { FunctionComponent, useState } from 'react'
import singletonCounter from './singleton'

const Singleton: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0)
  const onIncrementClick = () => {
    singletonCounter.increment()
    setCount(singletonCounter.getCount())
  }
  const onDecrementClick = () => {
    singletonCounter.decrement()
    setCount(singletonCounter.getCount())
  }
  return (
    <div>
      <p>{count}</p>
      <div className="flex gap-3">
        <button className="bg-blue-500 text-white" onClick={onIncrementClick}>
          BlueButton increment
        </button>
        <button className="bg-red-400 text-black" onClick={onDecrementClick}>
          RedButton decrement
        </button>
      </div>
    </div>
  )
}

export default Singleton
