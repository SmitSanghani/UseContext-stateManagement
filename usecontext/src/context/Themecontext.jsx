import { useContext } from "react";

export const Themecontext = useContext();

export const ThemecontextProvider = ({children})=>{
    return <Themecontext.Provider>{children}</Themecontext.Provider>
}