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
import { Calculator } from "components/tools/lol/components/calculator/Calculator";
import { ChampionDetails } from "components/tools/lol/ChampionDetails";
import { FittingRoom } from "components/tools/lol/fitting-room/FittingRoom";

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

                <Route path="tools">
                    <Route path="lol">
                        <Route path="" element={<div>lol</div>} />
                        <Route path=":version">
                            <Route path="items" element={<div>items</div>} />
                            <Route path="champions" >
                                <Route path="" element={<div>champions</div>} />
                                <Route path=":champion" element={<ChampionDetails />} />
                            </Route>
                            <Route path="calculator" element={<Calculator />} />
                            <Route path="fitting-room" element={<FittingRoom />} />
                        </Route>
                        <Route path="fitting-room" element={<FittingRoom />} />
                    </Route>
                </Route>

                <Route path="resume">
                    <Route path="" element={<Resume />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}