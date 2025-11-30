import { Route, Routes } from "react-router-dom";

import HexViewer from "../hex-viewer/HexViewer";
import { ObsidianViewer } from "../obsidian/ObsidianViewer";

import { AboutMe } from "../resume/AboutMe";
import { Coding } from "../resume/Coding";
import { Writing } from "../resume/Writing";
import { AboutSite } from "../resume/AboutSite";
import { Resume } from "../resume/Resume";
import { NotFound } from "./NotFound";
import { Home } from "../home/Home";


export function AppRouter()
{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hex" element={<HexViewer />} />
            <Route path="obsidian" element={<ObsidianViewer />} />

            <Route path="about">
                <Route index element={<AboutMe />} />
                <Route path="coding" element={<Coding />} />
                <Route path="writing" element={<Writing />} />
            </Route>

            <Route path="blog" element={<AboutSite />} />

            <Route path="resume" element={<Resume />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
