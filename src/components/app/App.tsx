import { useEffect, useState } from "react";
import { AppNavBar } from "./AppNavBar";
import { AppRouter } from "./AppRouter";
import { Footer } from "./Footer";
import "./App.scss";

export default function App()
{
    const [theme, setTheme] = useState<"dark" | "light">(() =>
    {
        const stored = localStorage.getItem("theme");
        return stored === "light" ? "light" : "dark";
    });

    useEffect(() =>
    {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

    return (
        <div className="App" >
            <AppNavBar theme={theme} onToggleTheme={toggleTheme} />
            <main className="app-body">
                <AppRouter />
            </main>
            <Footer />
        </div>
    );
}
