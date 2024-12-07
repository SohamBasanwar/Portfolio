import React from "react";

const Waves = ({
                   color1 = "rgba(47, 12, 67, 1)",
                   color2 = "rgba(63, 17, 90, 1)",
                   color3 = "rgba(80, 22, 113, 1)",
                   color4 = "rgba(0, 0, 0, 1)",
                   gradientStart = "#5f1986",
                   gradientEnd = "#5f1986"
               }) => {
    // Inline style object for the container
    const containerStyle = {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: `linear-gradient(60deg, ${gradientStart} 0%, ${gradientEnd} 100%)`
    };

    return (
        <div className="wave-container" style={containerStyle}>
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="2" fill={color1} />
                    <use xlinkHref="#gentle-wave" x="48" y="4" fill={color2} />
                    <use xlinkHref="#gentle-wave" x="48" y="6" fill={color3} />
                    <use xlinkHref="#gentle-wave" x="48" y="10" fill={color4} />
                </g>
            </svg>
        </div>
    );
};

export default Waves;
