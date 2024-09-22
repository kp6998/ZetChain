import React from "react";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Team from "./Team.jsx";

const Carousel = () => {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/carousel-1.jpg" alt="Carousel Image" />
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">Innovative Web Solutions</p>
                        <h1 className="animated fadeInLeft">Building Web Apps for Your Business</h1>
                        <a className="btn animated fadeInUp" href="">Get A Quote</a>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="img/carousel-2.jpg" alt="Carousel Image" />
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">Seamless Mobile Experiences</p>
                        <h1 className="animated fadeInLeft">We Develop Cutting-Edge Mobile Apps</h1>
                        <a className="btn animated fadeInUp" href="">Get A Quote</a>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="img/carousel-3.jpg" alt="Carousel Image" />
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">Secure Blockchain Solutions</p>
                        <h1 className="animated fadeInLeft">Leverage Blockchain for Your Business</h1>
                        <a className="btn animated fadeInUp" href="">Get A Quote</a>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

const Feature = () => {
    return (
        <div className="feature wow fadeInUp" data-wow-delay="0.1s">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img className="flaticon" src="icon/coding.png" alt="coding" />
                            </div>
                            <div className="feature-text">
                                <h3>Skilled Developers</h3>
                                <p>Our team of expert developers brings innovation and precision to every project, ensuring top-notch software solutions tailored to your business needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <   img className="flaticon" src="icon/innovative.png" alt="coding" />
                            </div>
                            <div className="feature-text">
                                <h3>Innovative Solutions</h3>
                                <p>We deliver cutting-edge technology solutions, harnessing the latest tools and platforms to create innovative products that drive business success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="feature-item pt-5">
                            <div className="feature-icon">
                                <img className="flaticon" src="icon/support.png" alt="coding" />
                            </div>
                            <div className="feature-text">
                                <h3>24/7 Tech Support</h3>
                                <p>Our dedicated support team is available 24/7 to ensure your technology runs smoothly, providing quick solutions to any technical issues.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function Home() {
    return (
        <div>
            <Carousel />
            <Feature />
            <About />
            <Service />
            <Team />
        </div>
    )
}

export default Home;