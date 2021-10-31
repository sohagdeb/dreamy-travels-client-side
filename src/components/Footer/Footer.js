import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div id="contact" className="container mt-5 pb-5">
                    <div className="row" >
                        <div className="col-lg-3 footer-anchor">
                            <img src="./images/logo.png" alt="" />
                            <p>We are professional planners for your vacations</p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>Compnany</h3><br />
                            <p><a href="#">About</a></p>
                            <p><a href="#">Carrers</a></p>
                            <p><a href="#">Mobile</a></p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>Contact</h3><br />
                            <p><a href="#">Help/FAQ</a></p>
                            <p><a href="#">Press</a></p>
                            <p><a href="#">Affilates</a></p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>More</h3><br />
                            <p><a href="#">Airelinefees</a></p>
                            <p><a href="#">Airline</a></p>
                            <p><a href="#">Low fare tips</a></p>
                        </div>
                        <div className="col-lg-3 footer-anchor">
                            <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;