import "./intro.css";
import Me from "./../../assets/images/Me.png";

const Intro = () => {
  return (
    <div className="i" id="home">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"><div className="hello">Hello</div>, my name is</h2>
          <h1 className="i-name"><span className="highlight-name">OLUWATOBI</span> SOBAYO</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">AltSchooler</div>
            </div>
          </div>
          <p className="i-desc">
          I develop websites for both personal clients and companies who are
			willing to get the best UIs for their users. I also help in growing startups
			with my skills by developing, managing and promoting their website contents in the
			global market.
          </p>
        </div>  
      </div>


      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
