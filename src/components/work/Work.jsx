import "./works.css";

const Work = ({ img, link, desc }) => {
  return (
    <div className="cards">
      <div className="c-browser">
        <div className="c-circle"></div>
        <div className="c-circle"></div>
        <div className="c-circle"></div>
      </div>
      <div className="p-desc">{desc}</div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} className="p-img" alt="project screenshot" />
      </a>
    </div>
  );
};

export default Work;
