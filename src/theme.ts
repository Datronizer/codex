import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const readStoredTheme = (): Theme =>
{
    try
    {
        const stored = localStorage.getItem("theme");
        return stored === "light" ? "light" : "dark";
    }
    catch
    {
        return "dark";
    }
};

const writeTheme = (theme: Theme): void =>
{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};

export const applyStoredTheme = (): void =>
{
    writeTheme(readStoredTheme());
};

export const useTheme = () =>
{
    const [theme, setTheme] = useState<Theme>(() => readStoredTheme());

    useEffect(() =>
    {
        writeTheme(theme);
    }, [theme]);

    const toggleTheme = useCallback(() =>
    {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    }, []);

    return { theme, setTheme, toggleTheme };
};
