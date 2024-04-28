import "./skills.css";
import skillIcons from "./imageData";
import { Context } from "react";

export default function Skills() {
  return (
    <div className="skills-content"><hr />
      <div className="skill-header">
        <h1>My skills & tools</h1>
      </div>

      <div>
        <section className="skill-icons">
          {skillIcons.map((skillIcon) => {
            return (
              <div key={skillIcon.id} className='skill-box'>
                <img src={skillIcon.imgLink} alt="" className="skill-logo" />
                <div className="logo-name">
                  {skillIcon.name}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
