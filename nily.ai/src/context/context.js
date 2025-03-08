import { createContext } from "react";

export const Context = createContext({
    panel: true,
    setPanel: () => {},
    menu: false,
    setMenu: () => {}
})