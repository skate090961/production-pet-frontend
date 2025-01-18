import {useContext} from "react";
import {LS_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme() {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const finalTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

        if (setTheme) {
            setTheme(finalTheme)
        }
        localStorage.setItem(LS_THEME_KEY, finalTheme)
    }

    return <UseThemeResult>{
        theme,
        toggleTheme
    }
}