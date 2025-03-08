import { createContext } from "react";

export const Context = createContext({
    panel: false,
    setPanel: () => {},
    menu: false,
    setMenu: () => {}
})