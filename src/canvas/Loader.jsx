import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

const Loader = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex flex-col items-center justify-center bg-zinc-950
  ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-3xl md:text-5xl  title text-red-600 relative">
        <div
          className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
         { "Bugatti"}
        </div>
        <div className="opacity-40">{"Bugatti"}</div>
      </div>
      <div >
        <div
          className="mt-6 h-1 bg-red-600 rounded-md  overflow-hidden truncate transition-all duration-500"
          style={{ 
            width :`${progress}%`
          }}
        >
        </div>
        <div className=" opacity-5 h-1 w-80 bg-slate-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default Loader
