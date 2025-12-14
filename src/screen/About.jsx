import React from "react";

const AboutUs = () => {
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="about-img">
                            <img src="img/TT_Logo.png" alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="section-header text-left">
                            <p>Welcome to ZetChain Tech</p>
                            <h2>Innovating the Future</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                At ZetChain Tech, we are a newly launched startup driven by passion and innovation. Although we are fresh on the scene, our vision is clear: to deliver cutting-edge technology solutions that transform businesses and help them navigate the digital landscape with ease.
                            </p>
                            <p>
                                From web development to mobile applications and blockchain technology, we are committed to pushing boundaries and creating solutions that meet the needs of modern enterprises. Our talented team is dedicated to providing exceptional service, with a focus on collaboration, creativity, and technical expertise.
                            </p>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Fact = () => {
    return (
        <div className="fact">
            <div className="container-fluid">
                <div className="row counters">
                    <div className="col-md-6 fact-left wow slideInLeft">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img className="flaticon" src="icon/coding.png" alt="coding" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">7</h2>
                                    <p>Skilled Team Members</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img className="flaticon" src="icon/client.png" alt="coding" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">2</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 fact-right wow slideInRight">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img className="flaticon" src="icon/completed.png" alt="coding" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">1</h2>
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img className="flaticon" src="icon/ongoing.png" alt="coding" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">1</h2>
                                    <p>Running Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function About() {
    return (
        <div>
            <AboutUs />
            <Fact />
        </div>
    )
}

export default About;