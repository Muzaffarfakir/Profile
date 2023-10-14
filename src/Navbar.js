import React from "react";
import { Route, Routes, BrowserRouter, Link ,HashRouter} from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import "./Navbar.css"
import Data from "./Data";
import Particles from "react-tsparticles";
import Particle from "./Particle";
function Navbar() {
    return (
        <>

            <HashRouter>
        
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/About"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/Conatct"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/" element={<Home />}
                    />
                    <Route
                        path="/About" element={<About />}
                    /><Route
                        path="/Conatct" element={<Contact />}
                    />
                    <Route
                        path="/AddProject" element={<Data />}
                    />
                </Routes>
            </HashRouter>

        </>
    )

}
export default Navbar;
