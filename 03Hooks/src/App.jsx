import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("Value Added");
    setCounter((counter + 1));
  };
  
  const RemoveValue = () => {
    console.log("Value Removed");
    setCounter((counter - 1));
  };
  return (
    <>
      <h1>Chai aur Hooks</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value | {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value | {counter}</button>
    </>
  );
}
export default App;
