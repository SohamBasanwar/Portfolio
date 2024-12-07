import React from "react";

function About() {
    let div = (
        <div>
            <div className="container about-container mt-5">
                <div className="row justify-content-start">
                    <div className="col-md-8">
                        <div className="n-box2 about px-3 py-4">
                            <h2 className="font-bold">Nice To Meet You</h2>
                            <br />
                            <p>
                                I am a Sophomore in University of Illinois Chicago (UIC). <br />
                                I am majoring in Computer science with a concentration in Software Engineering.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-md-12 about-image">
                        <img
                            src="/images/Combining.png"
                            alt="a image of 3 boys in row doing work."
                            className=""
                        />
                    </div>
                </div>

                <div className="row mt-5 justify-content-end">
                    <div className="col-md-offset-4 col-md-8">
                        <div className="n-box2 about px-3 py-4">
                            <p>
                                Computer Science is the study of computers, algorithms,
                                and programming to solve problems and build software.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return div;
}

export default About;
