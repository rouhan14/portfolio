import React from "react";
import '../About/About.css'

const About = () => {
    return(
        <div id="about" className="about"  data-aos="fade-right">
            <div className="aboutInfo">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, optio! Molestias illo consectetur ullam, laborum quidem quam asperiores cumque dignissimos neque eius rerum? Veniam voluptatibus asperiores nisi minus sit? Exercitationem veritatis eum adipisci? Libero, nobis inventore quod nostrum voluptatum necessitatibus enim asperiores delectus magni ipsa provident aliquid maxime ducimus commodi?</p>

                <a href="Resume.pdf" className="btn" download>Download CV</a>
                         </div>
            <div className="img-parent">
                <div className="img">
                </div>
            </div>
            
        </div>
    );
}


export default About;