import React, { useState, Suspense } from "react";
import { Loader, Scene } from "./canvas";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="  bg-black overscroll-none w-screen h-screen">
      <Loader started={started} setStarted={setStarted} />
      <Suspense
        fallback={
          <div className="w-full h-full bg-black text-2xl text-red-600 title flex justify-center items-center">
            initializing
          </div>
        }
      >
        {started && <Scene />}
       {started && <div className="absolute bottom-2 flex justify-center items-center w-full">
        <p className="title self-center  text-xs text-gray-50">{'<-- Drag -->'}</p>
        </div>}
      </Suspense>
    </div>
  );
}

export default App;
