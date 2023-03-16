import { HashRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../../dashboard/Dashboard";

export function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </HashRouter>
    );
}