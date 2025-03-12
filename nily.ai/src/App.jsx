import { useState } from "react";
import "./App.css";
import { Context } from "./context/context";

import Navbar from "./components/Navbar";
import Body from "./components/Body/Body";

function App() {
  const [panel, setPanel] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Context.Provider
      value={{
        panel,
        setPanel,
        menu,
        setMenu
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
