import "./about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about" id="about">
      <h1 className="about-me">About me</h1>
      <div className="about-text">
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; I am a recent graduate of
          Altschool Africa, a software engineering school for world-class
          developers. I have worked on multiple projects which has built my
          resilience, mindset and skills as a better developer over the past few
          months. I’ve learnt how to become a better team player and also carry
          everyone along.
        </p>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;Being passionate about my career,
          I am always motivated to put forth my best work in any project I work
          on. I am always curious to acquire knowledge and I always find the
          need to stay updated about anything going on in the tech industry.
        </p>

        <div className="quote">
          “In order to attain mastery, consistency has to be the order of the day.”
        </div>
      </div>
    </div>
  );
}

export default About;
