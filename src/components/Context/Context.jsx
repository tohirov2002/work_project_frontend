import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children}) => {
    const [mood, setMood] = useState(true)
    return <Context.Provider value={{setMood, mood}}>{children}</Context.Provider>
}

export {Context, ContextProvider};