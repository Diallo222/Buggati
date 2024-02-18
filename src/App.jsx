import React, { useState, Suspense } from "react";
import { Loader, Scene } from "./canvas";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="overscroll-none w-screen h-screen">
      <Loader started={started} setStarted={setStarted} />
      <Suspense fallback={null}>{started && <Scene />}</Suspense>
    </div>
  );
}

export default App;
