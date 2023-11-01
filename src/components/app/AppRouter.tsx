import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import HexViewer from "../hex-viewer/HexViewer";
import { ObsidianViewer } from "../obsidian/ObsidianViewer";

export function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/hex" element={<HexViewer />} />
                <Route path="/obsidian" element={<ObsidianViewer />} />
            </Routes>
        </HashRouter>
    );
}