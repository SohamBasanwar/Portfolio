import React, { useEffect } from "react";
import Header from "../components/Header";
import Courosel from "../components/Courosel";
import About from "../components/About";
import Myself from "../components/Myself";
import Waves from "../components/Waves";
import handleScrollToSection from "../components/Scroll";

const NAME = "Soham Basanwar";
const UNIVERSITY = "University of Illinois Chicago";
const ROLE = "Undergraduate Computer Science Student";

function Home() {
    // @ts-ignore
    useEffect(() => {
        const letters = document.querySelectorAll('.smoke-letter');

        // Stagger the animation start time for each letter
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${index * 0.2}s`;
        });
    }, []);



    return (
        <div>
            <Header/>
            <div className="intro flex-with-center">

                <div>
                    {/*<h1 id="name" className="kaushan-script">SOHAM BASANWAR</h1>*/}

                    <div className="smoke-name kaushan-script flex-with-center">
                        {NAME.split("").map((char, i) => (
                        <span key={i} className="smoke-letter">{char}</span>
                        ))}
                    </div>

                    <div className="row intro-content d-flex justify-content-between">
                        <div className="col-md-6">
                            <p id="About">{UNIVERSITY} <br/> {ROLE}</p>
                        </div>
                        <div className="col-md-6 flex-with-center">
                            <button
                                className="primary-button font-bold"
                                onClick={() => handleScrollToSection("courosel-section")} // Smooth Scroll Handler
                            >Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

            <Waves
                color1 = "rgba(80, 22, 113, 1)"
                color2 = "rgba(63, 17, 90, 1)"
                color3 = "rgba(47, 12, 67, 1)"
                color4 = "rgba(0, 0, 0, 1)"
                gradientStart = "#5f1986"
                gradientEnd = "#5f1986"
            />

            <div id="courosel-section">
                <Courosel/>
            </div>

            <Waves
                color1="rgba(235, 215, 245, 1)"
                color2="rgba(210, 180, 230, 0.75)"
                color3="rgba(175, 130, 190, 0.25)"
                color4="rgba(95, 25, 134, 1)"
                gradientStart="white"
                gradientEnd="white"
            />

            <About/>

            <Myself/>


        </div>
    )
}

export default Home
