import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactLight.css";

const ContactLight = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onApplyTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aLUMNIASSOCIATIONKMEA']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onHelpTextClick = useCallback(() => {
    navigate("/help");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="contact-light-div">
      <div className="rectangle-div4" />
      <div className="contact-div2">
        <div className="group-div3">
          <div className="contact-us-div2">Contact Us</div>
          <div className="any-question-or-remarks-just">
            Any Question or Remarks? Just message us
          </div>
        </div>
        <div className="email-div3">
          <div className="message-div">Email</div>
          <div className="text-div" />
          <img className="rectangle-icon8" alt="" src="../rectangle-53.svg" />
          <i className="sanderggmailcom2">sanderg@gmail.com</i>
        </div>
        <div className="text-field-div">
          <div className="message-div">Message</div>
          <img className="rectangle-icon9" alt="" src="../rectangle-511.svg" />
          <i className="type-a-message-here">Type a message here...</i>
        </div>
        <div className="name-field-div">
          <div className="message-div">Name</div>
          <div className="text-div1" />
          <img className="rectangle-icon8" alt="" src="../rectangle-53.svg" />
          <i className="adam-sandberg-i">Adam Sandberg</i>
        </div>
        <div className="log-in-button2">
          <div className="send-div">Send</div>
        </div>
        <img className="group-icon" alt="" src="../group-6.svg" />
        <div className="group-div4">
          <div className="we-would-love-to-hear-from-you">
            <p className="we-would-love">{`We would love to hear from you. `}</p>
            <p className="our-friendly-team">
              Our friendly team is always here to chat
            </p>
          </div>
          <div className="get-in-touch">Get In Touch</div>
        </div>
        <div className="group-div5">
          <img className="vector-icon" alt="" src="../vector.svg" />
          <div className="mochamkulam-edathala-aluva">
            Mochamkulam, Edathala, Aluva, Kerala 683561
          </div>
          <img className="vector-icon1" alt="" src="../vector1.svg" />
          <div className="div2">+233 54 456 7298</div>
        </div>
      </div>
      <img
        className="sammy-line-17-1-icon"
        alt=""
        src="../sammyline17-1@2x.png"
      />
      <div className="nav-white-div2">
        <div className="frame-div10" onClick={onFrameContainerClick}>
          <div className="log-in-div5">Log In</div>
        </div>
        <div className="group-div6">
          <div className="apply-div2" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div2" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-div2" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div2" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div3" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-14"
          alt=""
          src="../kmea-logo-white-11@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-12"
          alt=""
          src="../icons8brightbutton48-1-12@2x.png"
        />
      </div>
      <div className="endbar-div2">
        <div className="rectangle-div5" />
        <img
          className="kmea-logo-white-15"
          alt=""
          src="../kmea-logo-white-15@2x.png"
        />
        <div className="frame-div11">
          <div className="follow-us-div2">Follow Us</div>
          <div className="send-div">Twitter</div>
          <div className="send-div">Facebook</div>
          <div className="send-div">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c2">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div12">
          <div className="follow-us-div2">Contact Us</div>
          <div className="send-div">+233 54 456 7298</div>
          <a
            className="alumnikmeacollegeacin"
            href="mailto:alumni@kmeacollege.ac.in"
            target="_blank"
          >
            alumni@kmeacollege.ac.in
          </a>
        </div>
        <div className="frame-div13">
          <div className="follow-us-div2">Legal</div>
          <div className="send-div">Legal Notice</div>
          <div className="send-div">Privacy Policy</div>
          <div className="send-div">Terms And Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default ContactLight;
