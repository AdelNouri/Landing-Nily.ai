import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import { Context } from "./context/context";

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
      <Navbar />
      </div>
    </Context.Provider>
  );
}

export default App;
