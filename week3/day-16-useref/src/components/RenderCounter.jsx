import { useState, useRef } from "react"

function RenderCounter() {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0)
  
  renderCount.current = renderCount.current + 1
  
  function handleClick() {
    setCount(count+1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Component has rendered: {renderCount.current} times</p>  
      <button onClick={handleClick}>Increase Count</button> 
    </div>
  )
}

export default RenderCounter