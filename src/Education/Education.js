import React from "react";
import './Education1.css'
import {EducationData} from '../data'



const Education = () => {
   return(
        <div id='education' className="Edu_parent"  data-aos="fade-left">
            <h2>What I'm Doing</h2>
            <p>I love what I do. I take great pride in what I do.</p>
            <div className="box_grid">
            {EducationData.map((item)=>{
            return(
                <article className="box">
                    {item.icon}
                    <h4 className="heading">{item.heading}</h4>
                    <p className="desciption">{item.description}</p>
                </article>
            )
        })}
        </div>
    </div>
    );
}


export default Education;