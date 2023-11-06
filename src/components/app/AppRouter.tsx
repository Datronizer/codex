import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import HexViewer from "../hex-viewer/HexViewer";
import { ObsidianViewer } from "../obsidian/ObsidianViewer";
import { Home } from "../home/Home";
import { AboutMe } from "../resume/AboutMe";
import { Coding } from "../resume/Coding";
import { Writing } from "../resume/Writing";
import { WhyTheName } from "../resume/WhyTheName";

export function AppRouter()
{
    return (
        <HashRouter>
            <Routes>
                <Route path="" element={<Home />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}

                <Route path="hex" element={<HexViewer />} />
                <Route path="obsidian" element={<ObsidianViewer />} />

                <Route path="about">
                    <Route path="" element={<AboutMe />} />
                    <Route path="coding" element={<Coding/>} />
                    <Route path="writing" element={<Writing />} />
                    <Route path="website" element={<WhyTheName />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}