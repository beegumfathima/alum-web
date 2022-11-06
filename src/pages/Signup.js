import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
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

  const onFrameContainer4Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLogInText2Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="signup-div">
      <div className="rectangle-div21" />
      <div className="endbar-div6">
        <div className="rectangle-div22" />
        <img
          className="kmea-logo-white-112"
          alt=""
          src="../kmea-logo-white-112@2x.png"
        />
        <div className="frame-div29">
          <div className="follow-us-div6">Follow Us</div>
          <div className="twitter-div6">Twitter</div>
          <div className="twitter-div6">Facebook</div>
          <div className="twitter-div6">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c6">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div30">
          <div className="follow-us-div6">Contact Us</div>
          <div className="twitter-div6">+233 54 456 7298</div>
          <div className="twitter-div6">alumni@kmeacollege.ac.in</div>
        </div>
        <div className="frame-div31">
          <div className="follow-us-div6">Legal</div>
          <div className="twitter-div6">Legal Notice</div>
          <div className="twitter-div6">Privacy Policy</div>
          <div className="twitter-div6">Terms And Conditions</div>
        </div>
      </div>
      <div className="nav-white-div6">
        <div className="frame-div32" onClick={onFrameContainer3Click}>
          <div className="log-in-div9">Log In</div>
        </div>
        <div className="group-div24">
          <div className="apply-div6" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div6">Home</div>
          <div className="about-div7" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div6" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div7" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-113"
          alt=""
          src="../kmea-logo-white-113@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-16"
          alt=""
          src="../icons8brightbutton48-1-15@2x.png"
        />
      </div>
      <div className="frame-div33" onClick={onFrameContainer4Click}>
        <div className="log-in-div10">Log In</div>
      </div>
      <div className="group-div25">
        <div className="sign-up-div2">Sign Up</div>
        <div className="new-here-create-your-account1">{`New here? Create your account now `}</div>
        <div className="name-div4">
          <div className="first-name-div1">First Name</div>
          <img className="rectangle-icon13" alt="" src="../rectangle-463.svg" />
          <i className="adam-i1">Adam</i>
        </div>
        <div className="name-div5">
          <div className="first-name-div1">Last Name</div>
          <img className="rectangle-icon13" alt="" src="../rectangle-561.svg" />
          <i className="adam-i1">Sandberg</i>
        </div>
        <div className="phone-div1">
          <div className="first-name-div1">Phone Number</div>
          <img className="rectangle-icon13" alt="" src="../rectangle-581.svg" />
          <i className="adam-i1">054 344 6578</i>
        </div>
        <div className="password-div5">
          <div className="first-name-div1">Password</div>
          <img className="rectangle-icon13" alt="" src="../rectangle-591.svg" />
          <img className="password-icon3" alt="" src="../password3.svg" />
          <img className="bieye-fill-icon3" alt="" src="../bieyefill3.svg" />
        </div>
        <div className="password-div7">
          <div className="first-name-div1">Confirm Password</div>
          <img className="rectangle-icon13" alt="" src="../rectangle-581.svg" />
          <img className="password-icon3" alt="" src="../password4.svg" />
          <img className="bieye-fill-icon3" alt="" src="../bieyefill4.svg" />
        </div>
        <div className="email-div5">
          <div className="email-div6">Email</div>
          <img className="rectangle-icon13" alt="" src="../rectangle-591.svg" />
          <i className="text-i1">{` `}</i>
          <i className="text-i1">sanderg@gmail.com</i>
        </div>
        <div className="log-in-button3">
          <div className="follow-us-div6">Sign Up</div>
        </div>
        <i className="already-have-an-account1">Already have an account?</i>
        <i className="log-in1" onClick={onLogInText2Click}>
          Log In
        </i>
        <div className="copyright-livingstone-alumni1">
          Copyright © LivingStone Alumni 2019
        </div>
      </div>
      <img
        className="sammy-line-man-receives-a-chec-icon1"
        alt=""
        src="../sammylinemanreceivesacheckafterasuccessfulonlinetransaction-1@2x.png"
      />
    </div>
  );
};

export default Signup;
