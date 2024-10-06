import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(true)

  const ref = useRef()

  // const a = useRef(0);
  // useEffect(() => {
  //   a.current += 1;
  //   console.log(`rerendering.....${a.current}`);
  //   ref.current.style.backgroundColor='red'
  // }, [count]);
  return (
    <>
    
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* {showBtn?<button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>:'tenga'} */}
        {showBtn && <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
