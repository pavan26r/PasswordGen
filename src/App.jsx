import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (number) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}|:<>?-=[];',./`~";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }

    setPassword(pass);
  }, [length, number, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-2xl font-bold mb-4">Password Generator</h1>

       
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-2 py-2 text-black rounded-l-md"
          />
          <button
            onClick={() => navigator.clipboard.writeText(password)}
            className="bg-orange-500 px-4 rounded-r-md text-white"
          >
            Copy
          </button>
        </div>

       
        <div className="flex items-center gap-4 mb-4">
          <label>Length: {length}</label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
        </div>

     
        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
          <label>Include Numbers</label>
        </div>

       
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
          />
          <label>Include Special Characters</label>
        </div>

        
        <button
          onClick={passwordGenerator}
          className="bg-orange-500 w-full py-2 rounded-md text-white font-bold"
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
