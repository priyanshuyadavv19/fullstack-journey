import { useState,useRef } from "react"
function Stopwatch() {
  const [seconds,setSeconds] = useState(0)
  const intervalId = useRef(null)
  function handleStart() {
    if (intervalId.current !== null) return
    intervalId.current = setInterval(() => {
      setSeconds((prevTime) => prevTime+1)
    },1000)
  }
  function handleStop() {
    clearInterval(intervalId.current)
    intervalId.current = null
  }
  function handleReset() {
    clearInterval(intervalId.current)
    intervalId.current = null
    setSeconds(0)
  }
  return (
    <div>
      <p>{seconds}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
export default Stopwatch