import "./skills.css";
import skillIcons from "./imageData";

export default function Skills() {
  return (
    <div className="skills-content">
      <div className="skill-header">
        <h1>My skills & tools</h1>
      </div>

      <div>
        <section className="skill-icons">
          {skillIcons.map((skillIcon) => {
            return (
              <div key={skillIcon.key}>
                <img src={skillIcon.imgLink} alt="" className="skill-logo" />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
