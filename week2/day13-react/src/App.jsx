import { useState } from "react"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Counter from "./components/Counter.jsx"
import Toggle from "./components/Toggle.jsx"
import Mirror from "./components/Mirror.jsx"
import TitleUpdater from "./components/TitleUpdater.jsx"
import PageLoadTime from "./components/PageLoadTime.jsx"
import TaskSaver from "./components/TaskSaver.jsx"
import Timer from "./components/Timer.jsx"

function App() {
  const [showTimer,setShowTimer] = useState(true)
  function handleTimer() {
    setShowTimer(!showTimer)
  }
  return (
    <>
      <Header name="Priyanshu Kumar Yadav" />
      <Counter/>
      <Toggle/>
      <Mirror/>
      <TitleUpdater/>
      <PageLoadTime/>
      <TaskSaver/>
      <button onClick={handleTimer}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer ? <Timer/> : null}
      <Footer/>
    </>
  )
}
export default App