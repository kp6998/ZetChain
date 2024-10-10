import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar, NavBar, Footer } from "./components/Common.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Team from "./components/Team.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import NoPage from "./components/NoPage.jsx";
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
                    <Route path="project" element={<Project />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
                <Footer />
                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            </BrowserRouter>
        </div>
    )
}