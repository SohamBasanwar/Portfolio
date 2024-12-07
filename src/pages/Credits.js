import React, { useEffect, useState } from "react";
import creditsData from "./CreditsData"; // Assuming you have the CreditsData file
import { IoIosArrowBack } from "react-icons/io"; // Import the back arrow icon
import { useNavigate } from "react-router-dom"; // Import for navigation

function Credits() {
    const [imageClass, setImageClass] = useState("large-image");
    const navigate = useNavigate(); // Initialize navigation hook

    useEffect(() => {
        // Scroll to the top when the component loads
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        // Update image class based on screen size
        const updateImageClass = () => {
            const width = window.innerWidth;

            if (width <= 480) {
                setImageClass("small-image");
            } else if (width <= 768) {
                setImageClass("medium-image");
            } else {
                setImageClass("large-image");
            }
        };

        updateImageClass(); // Initial check
        window.addEventListener("resize", updateImageClass); // Update on resize

        return () => {
            window.removeEventListener("resize", updateImageClass); // Cleanup
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".credits-header");
            const scrollY = window.scrollY;
            header.style.transform = `translateY(-${scrollY / 2}px)`;
            header.style.opacity = `${1 - scrollY / 500}`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="credits-page">
            {/* Back Button */}
            <button className="back-button" onClick={() => navigate("/")}>
                <IoIosArrowBack className="back-icon"/>
            </button>

            {/* Header Section */}
            <div className={`credits-header ${imageClass}`}></div>

            {/* Credits List Section */}
            <div className="credits-content">
                {creditsData.map((credit, index) => (
                    <div key={index} className="credit-item">
                        <h3 className="credit-title">{credit.title}</h3>
                        <p className="credit-description">{credit.description}</p>
                        <a
                            href={credit.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="credit-link"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Credits;
