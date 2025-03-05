import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";
import { Context } from "./context/context";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <Context.Provider
      value={{
        flag,
        setFlag
      }}
    >
      <div className="flex justify-center w-full">
        <Body />
        <Navbar />
      </div>
    </Context.Provider>
  );
}

export default App;
