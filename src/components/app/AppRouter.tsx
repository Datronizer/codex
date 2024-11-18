import { HashRouter, Route, Routes } from "react-router-dom";

import HexViewer from "../hex-viewer/HexViewer";
import { ObsidianViewer } from "../obsidian/ObsidianViewer";

import { AboutMe } from "../resume/AboutMe";
import { Coding } from "../resume/Coding";
import { Writing } from "../resume/Writing";
import { AboutSite } from "../resume/AboutSite";
import { Resume } from "../resume/Resume";
import { LoadingScreen } from "../home/LoadingScreen";
import Home from "components/home/Home";

export function AppRouter()
{
    return (
        <HashRouter>
            <Routes>
                {/* <Route path="" element={<LoadingScreen />} /> */}
                <Route path="" element={<Home />} />
                <Route path="home/intro" element={<LoadingScreen />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}

                <Route path="hex" element={<HexViewer />} />
                <Route path="obsidian" element={<ObsidianViewer />} />

                <Route path="about">
                    <Route path="" element={<AboutMe />} />
                    <Route path="coding" element={<Coding />} />
                    <Route path="writing" element={<Writing />} />
                    <Route path="site" element={<AboutSite />} />
                </Route>

                <Route path="resume">
                    <Route path="" element={<Resume />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}