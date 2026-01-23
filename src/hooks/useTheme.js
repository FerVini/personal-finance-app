import { useState, useEffect } from "react";

const STORAGE_KEY = 'theme';

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ?? 'light';
    })

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return {
        theme,
        toggleTheme
    }
}