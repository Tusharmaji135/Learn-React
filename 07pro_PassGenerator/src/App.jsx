import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";
    }
    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [len, numAllow, charAllow, setPassword]);

  const passRef = useRef(null);
  const copyPass = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,5)  //select the range
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [len, numAllow, charAllow, PasswordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-900">
        <h1 className="text-2xl text-center text-white my-3 py-2">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPass}
          >
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label>length: {len} |</label>
          </div>
          <div className="flex items-center gap-x-1">
            <label htmlFor="numInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label htmlFor="charInput">SP Characters</label>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
