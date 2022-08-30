import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../Home/Home.css'


const Home = () => {
    return(
        <div id='home' className='home'>
            <div className='info'>
                <h3>Hello</h3>
                <h1>I am Rouhan Faisal</h1>
                <h2>Practise Project</h2>
            </div>
            <div className='contactBtn'>
                <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100011459371372">
                    <button class="linkBtn"><FaFacebookF className='Icon' /></button>
                </a>
                <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100011459371372">
                    <button class="linkBtn"><FaInstagram className='instaIcon' /></button>
                </a>
                <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100011459371372">
                    <button class="linkBtn"><FaTwitter className='Icon' /></button>
                </a>
                <a href="https://www.linkedin.com/in/abdul-rehman-faisal-1101491b1">
                    <button class="linkBtn"><FaLinkedin className='Icon' /></button>
                </a>
            </div>
        </div>
    );
}

export default Home;