import "./Contact.css";
import Phone from "./../../assets/images/phone.png";
import Email from "./../../assets/images/email.png";
import Address from "./../../assets/images/address.png";
import Twitter from "./../../assets/images/twitter.png";
import Linkedin from "./../../assets/images/linkedin.png";
import { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_64aycwm",
        "template_lm1aa34",
        formRef.current,
        "MneBpbHAKgLqMUUij"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Contact me, Let's discuss
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <a href="https://twitter.com/TobiSobayo1" target="_blank">
                <img src={Twitter} alt="" className="c-icon" />
                @TobiSobayo1
              </a>
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/shobam/" target="_blank">
                <img src={Linkedin} alt="" className="c-icon" />
                Tobiloba Sobayo
              </a>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              sobayotoby@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +234-902-9265-732
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Lagos, Nigeria
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to make a quick schedule?</b>, instantly reach out to me
            through the provided chatbox below????
          </p>
          <p className="c-desc-sm">
            <b>Send a quick message????</b>
          </p>

          <form ref={formRef} onSubmit={sendEmail}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
              className="c-box"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="c-box"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
              className="c-box"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              name="message"
              rows="5"
              placeholder="Message"
              className="text-area"
            ></textarea>
            <div className="btn-alert">
              <button className="submit" type="submit">Submit</button>
              {success && "Successfully sent..."}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
