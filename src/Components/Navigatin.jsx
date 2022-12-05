import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
import logo from '../img/logo (2).png';



const Navigatin = () => {
    
    return (
        <div>
            <header className="main_menu_area">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* 
                <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav">
                   <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/">Home</Link>
                                </li>
                        </ul>
                                       
                </div>   */}
                <Link className="navbar-brand" href="#"><img src={logo} alt="not found"/></Link>
                    <div className="container-fluid"  >
                        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/About">ABOUT US</Link>
                                </li>
                                <li class="nav-item dropdown submenu">
                            <Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" to="service.html" aria-expanded="false">
                           SERVICES
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="nav-item"><Link class="nav-link cool-link" to="service.html">Services</Link></li>
                            <li class="nav-item"><Link class="nav-link cool-link" to="Man Power.html">Man Power</Link></li>
                            <li class="nav-item"><Link class="nav-link cool-link" to="Out sourcing.html">Out Sourcing</Link></li>
                            </ul>
                        </li>
                                <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/Portfolio">PORTFOLIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/Career">CAREER</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/Contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <header class="main_menu_area">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#"><img src={logo} alt="not found"/></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav">
                        <li class="nav-item active"><Link class="nav-link cool-link" data-hover="Home" to="index.html">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link cool-link" data-hover="About Us" to="about-us.html">About Us</Link></li>
						<li class="nav-item dropdown submenu">
                            <Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" to="service.html" aria-expanded="false">
                            Services
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="nav-item"><Link class="nav-link cool-link" to="service.html">Services</Link></li>
                            <li class="nav-item"><Link class="nav-link cool-link" to="Man Power.html">Man Power</Link></li>
                            <li class="nav-item"><Link class="nav-link cool-link" to="Out sourcing.html">Out Sourcing</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item"><Link class="nav-link cool-link" data-hover="Portfolio" to="portfolio.html">Portfolio</Link></li>                             
                        <li class="nav-item"><Link class="nav-link cool-link" to="career.html">Career</Link></li>
                        <li class="nav-item"><Link class="nav-link cool-link" data-hover="Contact" to="contact.html">Contact</Link></li>
                    </ul>                
                </div>
            </nav>
        </header> */}
        </div>
    );
}

export default Navigatin;
