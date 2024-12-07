import React from "react";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";import { SiJulia } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";


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
                        <SiJulia/>
                    </span>

                    <span style={{'--i' : 4}}>
                        <SiHtml5 color="orange"/>
                    </span>

                    <span style={{'--i' : 5}}>
                        <IoLogoCss3 color="blue"/>
                    </span>

                    <span style={{'--i' : 6}}>
                        <FaBootstrap color="Blue"/>
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