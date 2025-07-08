import React from "react";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiJulia, SiHtml5, SiC, SiCplusplus } from "react-icons/si";


function Courosel() {
    return (
        <div className="courosel-parent position-relative">
            <div>
                <h1 className="kaushan-script position-absolute top-0 flex-with-center mt-5">Technology I Use</h1>

                <div className="gallery">

                    <span style={{'--i' : 1}}>
                        <FaJava color="orange"/>
                    </span>

                    <span style={{'--i' : 2}}>
                        <FaPython/>
                    </span>

                    <span style={{'--i' : 3}}>
                        <SiJulia />
                    </span>

                    <span style={{'--i' : 4}}>
                        <SiHtml5 color="orange"/>
                    </span>

                    <span style={{'--i' : 5}}>
                        <SiC color="#A8B9CC"/>
                    </span>

                    <span style={{'--i' : 6}}>
                        <SiCplusplus color="#00599C"/>
                    </span>

                    <span style={{'--i' : 7}}>
                        <RiJavascriptFill color="yellow"/>
                    </span>

                    <span style={{'--i' : 8}}>
                        <FaReact color="cyan"/>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Courosel