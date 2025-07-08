import React from "react";

const YEAR = "Sophomore";
const UNIVERSITY = "University of Illinois Chicago (UIC)";
const MAJOR = "Computer Science";
const CONCENTRATION = "Software Engineering";
const ABOUT_IMAGE = "/images/Combining.png";
const ABOUT_IMAGE_ALT = "three students working together";
const MAJOR_DESCRIPTION = "Computer Science is the study of computers, algorithms,and programming to solve problems and build software.";

function About() {
    let div = (
        <div>
            <div className="container about-container mt-5">
                <div className="row justify-content-start">
                    <div className="col-md-8">
                        <div className="n-box2 about px-3 py-4">
                            <h2 className="font-bold">Nice To Meet You</h2>
                            <p>
                                I am a {YEAR} in {UNIVERSITY} (UIC). <br />
                                I am majoring in {MAJOR} with a concentration in {CONCENTRATION}.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-md-12 about-image">
                        <img
                            src={ABOUT_IMAGE}
                            alt={ABOUT_IMAGE_ALT}
                            className=""
                        />
                    </div>
                </div>

                <div className="row mt-5 justify-content-end">
                    <div className="col-md-offset-4 col-md-8">
                        <div className="n-box2 about px-3 py-4">
                            <p>{MAJOR_DESCRIPTION}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return div;
}

export default About;
