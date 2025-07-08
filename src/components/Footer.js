import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";

const NAME = "Soham Basanwar"

function Footer() {

    const location = useLocation();
    const path = location.pathname;

    return (
        <div id="footer">
            <div className="footer-content">
                <hr/>
                <div className="social-icons d-flex justify-content-center">
                    {/* GitHub  */}
                    <a
                        href="https://github.com/SohamBasanwar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub  className="footer-icons"/>
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
                        href="https://www.linkedin.com/in/sohambasanwar"
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
                        <span>{NAME}</span>
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
