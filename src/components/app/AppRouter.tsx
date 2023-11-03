import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import HexViewer from "../hex-viewer/HexViewer";
import { ObsidianViewer } from "../obsidian/ObsidianViewer";
import { Home } from "../home/Home";

export function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />

                <Route path="/hex" element={<HexViewer />} />
                <Route path="/obsidian" element={<ObsidianViewer />} />
            </Routes>
        </HashRouter>
    );
}