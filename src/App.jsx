import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar, NavBar, Footer } from "./screen/Common.jsx";
import Home from "./screen/Home.jsx";
import About from "./screen/About.jsx";
import Service from "./screen/Service.jsx";
import Team from "./screen/Team.jsx";
import Project from "./screen/Project.jsx";
import Contact from "./screen/Contact.jsx";
import NoPage from "./screen/NoPage.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <TopBar />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="service" element={<Service />} />
                    <Route path="team" element={<Team />} />
                    <Route path="projects" element={<Project />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
                <Footer />
                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            </BrowserRouter>
        </div>
    )
}