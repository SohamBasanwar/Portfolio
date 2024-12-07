import React from "react";
import Header from "../components/Header";
import { GiAchievement } from "react-icons/gi";
import AchievementsData from "./AchievementsData";
import handleScrollToSection from "../components/Scroll";


function Achievements() {
    return (
        <div>
            <Header/>
            <div className="ach-bc">

                <div className="contiainer ach-intro">

                    <div className="col-md-2 ach-icons-left">
                        <GiAchievement color='white' size='180' className="rotation"/>
                    </div>

                    <div id="intro" className="col-md-7">

                        <h1 className="kaushan-script flex-with-center">ACHIEVEMENTS</h1>
                        <hr/>
                        <p>Turning dreams into milestones, one achievement at a time.</p>
                        <button
                            className="primary-button font-bold"
                            onClick={() => handleScrollToSection("ach-list")}
                        >Explore Projects
                        </button>


                    </div>

                    <div className="col-md-2 ach-icons-right">

                        <GiAchievement color='white' size='150' className="rotation"/>
                    </div>


                </div>

            </div>


            <div id="ach-list" className="container ach-list">
                <h3 className="font-bold montserrat-semibold mt-5">Take a look at My Achievements</h3>
                <hr/>

                <div className="mt-5 mb-3">
                    {AchievementsData.map((achievements, index) => (
                        <div className="row certification mb-4" key={index}>
                            {/* Image Section */}
                            <h3 className="ach-title">{achievements.title || "Coming Soon!"}</h3>
                            <div className="col-md-6 ach-img d-flex justify-content-center align-items-center">
                                <img
                                    className="default-certificate-img"
                                    src={achievements.img && achievements.img.trim() !== ""
                                        ? achievements.img
                                        : "/images/ComingSoon.png"}
                                    alt={achievements.title || "Achievement Image"}
                                />
                            </div>

                            {/* Text Content Section */}
                            <div className="col-md-6 ach-content">
                                <p className="ach-description">{achievements.description || "Coming soon!"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Achievements
