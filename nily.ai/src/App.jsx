import { useState } from "react";
import "./App.css";
import { Context } from "./context/context";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [panel, setPanel] = useState(false);

  return (
    <Context.Provider
      value={{
        panel,
        setPanel
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
