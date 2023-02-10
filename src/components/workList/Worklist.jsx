import "./worklist.css";
import work from "./../work/Work";
import { projectItem } from "./../../data";
import Work from "../work/Work";

const Worklist = () => {
  return (
    <div className="pl"> <hr />
      <div className="pl-text">
        <h1 className="pl-title">Check out some of my works</h1>
        <p className="pl-desc">
          These are some of my personal website projects and works I contributed
          to recently
        </p>
      </div>

      <div className="pl-list">
        {projectItem.map((item) => (
          <Work
            key={item.id}
            img={item.img}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Worklist;
