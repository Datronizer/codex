import { AppNavBar } from "./AppNavBar";
import { AppRouter } from "./AppRouter";
import { Footer } from "./Footer";
import { useTheme } from "@/theme";
import "./App.scss";

export default function App()
{
    const { theme, toggleTheme } = useTheme();

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
