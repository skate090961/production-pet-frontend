import {LS_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultContextProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultContextProps}>
            {children}
        </ThemeContext.Provider>
    )
};