import React from "react";
import Header from "../components/Header";
import { PiStudentDuotone } from "react-icons/pi";
import projectsData from "./ProjectsData";
import handleScrollToSection from "../components/Scroll";



function Projects() {

    return (
        <div>
            <Header/>
            <div className="container project-intro">

                <div className="row flex-with-center">

                    <div className="col-md-6 col-md-offset-1 n-box2 px-4 py-5">
                        <div>
                            <h1 className="font-bold">Projects</h1>
                            <p className="font-bold">Good ideas are not adopted automatically. They must be driven into practice with courageous patience.</p>
                            <button
                                className="primary-button font-bold"
                                onClick={() => handleScrollToSection("project-list")}
                            >Explore Projects</button>
                        </div>
                    </div>

                    <div className="col-md-5 position-relative ">
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="magenta"
                                  d="M40.2,-46.1C52.7,-37.4,63.9,-25.3,71.1,-8.9C78.2,7.4,81.3,28.1,71.3,37C61.2,45.9,37.9,43.1,18.5,49.7C-1,56.3,-16.6,72.3,-33.3,73.9C-50.1,75.5,-68.1,62.6,-70.5,46.5C-72.9,30.4,-59.6,11.1,-51.5,-4.6C-43.4,-20.4,-40.5,-32.6,-32.8,-42.1C-25.1,-51.7,-12.5,-58.6,0.7,-59.4C13.8,-60.2,27.7,-54.8,40.2,-46.1Z"
                                  transform="translate(100 100)"/>
                        </svg>

                        <PiStudentDuotone color='black' size='170'
                                          className="position-absolute top-50 start-50 translate-middle"/>


                    </div>

                </div>

            </div>


            <div id="project-list" className="container project-list">
                <h3 className="font-bold montserrat-semibold">Take a look at My Projects</h3>
                <hr/>

                <div className="row flex-with-center mt-5 mb-3">

                    {projectsData.map(project=> {
                        return <div className="col-md-4">
                            <div className="position-relative project mb-4">

                                <img src={project.img} alt=""/>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <hr/>
                                    <p>{project.description}</p>
                                    {/*<button className="primary-button">Demo</button>*/}
                                </div>


                            </div>
                        </div>
                    })}

                </div>

            </div>

        </div>
    )
}

export default Projects
