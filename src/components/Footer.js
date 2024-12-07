import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";


function Footer() {

    const location = useLocation();
    const path = location.pathname;

    return (
        <div id="footer">
            <div className="footer-content">
                <hr/>
                <div className="social-icons d-flex justify-content-center">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/share/1D95HaQjnA/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="footer-icons"/>
                    </a>
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/sohambasanwar?igsh=MWcwdWRmZnV4dWJ5cQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="footer-icons"/>
                    </a>
                    {/* Email */}
                    <a href="mailto:sohamdono03@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaMailBulk className="footer-icons"/>
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/soham-basanwar-7750a7244"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn className="footer-icons"/>
                    </a>
                </div>
                <div className="author">
                    <hr/>
                    <p>Designed & Developed By</p>
                    <div className="author-details">
                        <span>Soham Basanwar</span>
                        <span className="separator">|</span>
                        <Link to="/credits" className={`${path === "/credits" ? "active" : ""}`}>
                            View Credits
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
