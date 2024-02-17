import React , {useState , Suspense} from "react"
import { Scene } from "./canvas"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="overscroll-none w-screen h-screen">
        <Suspense fallback={null}>
          <Scene /> 
        </Suspense>
      </div>
  )
}

export default App
