import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './Project.css'


const Project = () => {
    return(
        <div id="project" className="mainProject">

            <h2>Projects</h2>
            
            <div className="projectsDiv">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </div>

        </div>
    );
}

const ProjectBox = () => {
    return(
        <div className="projectBox">
            <div className="projectImage"></div>
            <div className="projectDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda eveniet quidem nisi veritatis tenetur asperiores sit, molestiae illum reprehenderit eos ducimus unde perspiciatis deserunt saepe? Amet voluptas alias expedita!</div>
            <div>
                <button className="projectBtn"><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
            </div>
        </div>
    );
}

export default Project;