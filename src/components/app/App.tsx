import { AppNavBar } from './AppNavBar';
import { AppRouter } from './AppRouter';
import { Footer } from './Footer';
import "./App.scss";

export default function App()
{
    return (
        <div className="App" >
            <AppNavBar />
            <AppRouter />
            <Footer />
        </div>
    );
}
