import React from 'react';
import hackathonLogo from '../assets/hackathonLogo.png';
import './About.css';

const ABOUT_SECTION = {
  TITLE: 'What is Hackstreet 2.0?',
  LONG_DESCRIPTION:
    "Hackstreet is 24 hour long running hackathon. We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Hackstreet will have unique opportunities to learn from each other trying hands in new technologies. We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO: hackathonLogo,
};

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{ABOUT_SECTION.TITLE}</h1>
      <br/>
      <p>{ABOUT_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoS">
      <img className="Logo" src={ABOUT_SECTION.LOGO} alt="Hackstreet" />
    </div>
  );
}

const About = () => {
  return (
    <div className="about-container" id="about">
      <LogoSectionAbout />
      <Logo />
    </div>
  );
};

export default About;


