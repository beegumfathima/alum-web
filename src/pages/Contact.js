import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onApplyTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

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
    <div className="contact-div9">
      <div className="rectangle-div25" />
      <div className="endbar-div8">
        <div className="rectangle-div26" />
        <img
          className="kmea-logo-white-116"
          alt=""
          src="../kmea-logo-white-116@2x.png"
        />
        <div className="frame-div39">
          <div className="follow-us-div8">Follow Us</div>
          <div className="twitter-div8">Twitter</div>
          <div className="twitter-div8">Facebook</div>
          <div className="twitter-div8">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c8">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div40">
          <div className="follow-us-div8">Contact Us</div>
          <div className="twitter-div8">+233 54 456 7298</div>
          <div className="twitter-div8">alumni@kmeacollege.ac.in</div>
        </div>
        <div className="frame-div41">
          <div className="follow-us-div8">Legal</div>
          <div className="twitter-div8">Legal Notice</div>
          <div className="twitter-div8">Privacy Policy</div>
          <div className="twitter-div8">Terms And Conditions</div>
        </div>
      </div>
      <div className="nav-white-div8">
        <div className="frame-div42" onClick={onFrameContainer3Click}>
          <div className="log-in-div14">Log In</div>
        </div>
        <div className="group-div27">
          <div className="apply-div8" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div8">Home</div>
          <div className="about-div9" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div8" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div10" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-117"
          alt=""
          src="../kmea-logo-white-113@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-18"
          alt=""
          src="../icons8brightbutton48-1-15@2x.png"
        />
      </div>
      <div className="contact-div11">
        <div className="group-div28">
          <div className="contact-us-div11">Contact Us</div>
          <div className="any-question-or-remarks-just1">
            Any Question or Remarks? Just message us
          </div>
        </div>
        <div className="email-div8">
          <div className="email-div9">Email</div>
          <div className="text-div2" />
          <img className="rectangle-icon21" alt="" src="../rectangle-531.svg" />
          <i className="sanderggmailcom5">sanderg@gmail.com</i>
        </div>
        <div className="text-field-div1">
          <div className="message-div1">Message</div>
          <img className="rectangle-icon22" alt="" src="../rectangle-513.svg" />
          <i className="type-a-message-here1">Type a message here...</i>
        </div>
        <div className="name-field-div1">
          <div className="email-div9">Name</div>
          <div className="text-div3" />
          <img className="rectangle-icon21" alt="" src="../rectangle-531.svg" />
          <i className="adam-sandberg-i1">Adam Sandberg</i>
        </div>
        <div className="log-in-button5">
          <div className="twitter-div8">Send</div>
        </div>
        <img className="group-icon7" alt="" src="../group-61.svg" />
        <div className="group-div29">
          <div className="we-would-love-to-hear-from-you1">
            <p className="we-would-love1">{`We would love to hear from you. `}</p>
            <p className="our-friendly-team1">
              Our friendly team is always here to chat
            </p>
          </div>
          <div className="get-in-touch1">Get In Touch</div>
        </div>
        <div className="group-div30">
          <img className="vector-icon7" alt="" src="../vector2.svg" />
          <div className="mochamkulam-edathala-aluva1">
            Mochamkulam, Edathala, Aluva, Kerala 683561
          </div>
          <img className="vector-icon8" alt="" src="../vector3.svg" />
          <div className="div13">
            <span>+</span>
            <span className="span2">233 54 456 7298</span>
          </div>
        </div>
      </div>
      <img
        className="sammy-line-17-1-icon1"
        alt=""
        src="../sammyline17-1@2x.png"
      />
    </div>
  );
};

export default Contact;
