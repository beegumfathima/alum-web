import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupLight.css";

const SignupLight = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onHelpTextClick = useCallback(() => {
    navigate("/help");
  }, [navigate]);

  return (
    <div className="signup-light-div">
      <div className="rectangle-div" />
      <div className="group-div">
        <div className="sign-up-div">Sign Up</div>
        <div className="new-here-create-your-account">{`New here? Create your account now `}</div>
        <div className="name-div">
          <div className="first-name-div">First Name</div>
          <img className="rectangle-icon" alt="" src="../rectangle-46.svg" />
          <i className="adam-i">Adam</i>
        </div>
        <div className="name-div1">
          <div className="first-name-div">Last Name</div>
          <img className="rectangle-icon" alt="" src="../rectangle-56.svg" />
          <i className="adam-i">Sandberg</i>
        </div>
        <div className="phone-div">
          <div className="first-name-div">Phone Number</div>
          <img className="rectangle-icon" alt="" src="../rectangle-56.svg" />
          <i className="adam-i">054 344 6578</i>
        </div>
        <div className="password-div">
          <div className="first-name-div">Password</div>
          <img className="rectangle-icon" alt="" src="../rectangle-59.svg" />
          <img className="password-icon" alt="" src="../password.svg" />
          <img className="bieye-fill-icon" alt="" src="../bieyefill.svg" />
        </div>
        <div className="password-div2">
          <div className="first-name-div">Confirm Password</div>
          <img className="rectangle-icon" alt="" src="../rectangle-60.svg" />
          <img className="password-icon" alt="" src="../password1.svg" />
          <img className="bieye-fill-icon" alt="" src="../bieyefill1.svg" />
        </div>
        <div className="email-div">
          <div className="email-div1">Email</div>
          <img className="rectangle-icon" alt="" src="../rectangle-46.svg" />
          <i className="text-i">{` `}</i>
          <i className="text-i">sanderg@gmail.com</i>
        </div>
        <div className="log-in-button">
          <div className="follow-us-div">Sign Up</div>
        </div>
        <i className="already-have-an-account">Already have an account?</i>
        <i className="log-in">Log In</i>
        <div className="copyright-livingstone-alumni">
          Copyright © LivingStone Alumni 2019
        </div>
      </div>
      <img
        className="sammy-line-man-receives-a-chec-icon"
        alt=""
        src="../sammylinemanreceivesacheckafterasuccessfulonlinetransaction-1@2x.png"
      />
      <div className="endbar-div">
        <div className="rectangle-div1" />
        <img
          className="kmea-logo-white-1"
          alt=""
          src="../kmea-logo-white-1@2x.png"
        />
        <div className="frame-div">
          <div className="follow-us-div">Follow Us</div>
          <div className="twitter-div">Twitter</div>
          <div className="twitter-div">Facebook</div>
          <div className="twitter-div">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div1">
          <div className="follow-us-div">Contact Us</div>
          <div className="twitter-div">+233 54 456 7298</div>
          <div className="twitter-div">alumni@kmeacollege.ac.in</div>
        </div>
        <div className="frame-div2">
          <div className="follow-us-div">Legal</div>
          <div className="twitter-div">Legal Notice</div>
          <div className="twitter-div">Privacy Policy</div>
          <div className="twitter-div">Terms And Conditions</div>
        </div>
      </div>
      <div className="nav-white-div">
        <div className="frame-div3" onClick={onFrameContainer3Click}>
          <div className="log-in-div">Log In</div>
        </div>
        <div className="group-div1">
          <div className="apply-div">Apply</div>
          <div className="home-div">Home</div>
          <div className="about-div" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div">Contact</div>
        </div>
        <img
          className="kmea-logo-white-11"
          alt=""
          src="../kmea-logo-white-11@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-1"
          alt=""
          src="../icons8brightbutton48-1-1@2x.png"
        />
      </div>
      <div className="frame-div4">
        <div className="log-in-div1">Log In</div>
      </div>
    </div>
  );
};

export default SignupLight;
