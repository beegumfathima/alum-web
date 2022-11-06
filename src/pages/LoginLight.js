import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginLight.css";

const LoginLight = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="login-light-div">
      <div className="rectangle-div2" />
      <div className="endbar-div1">
        <div className="rectangle-div3" />
        <img
          className="kmea-logo-white-12"
          alt=""
          src="../kmea-logo-white-1@2x.png"
        />
        <div className="frame-div5">
          <div className="login-div">Follow Us</div>
          <div className="twitter-div1">Twitter</div>
          <div className="twitter-div1">Facebook</div>
          <div className="twitter-div1">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c1">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div6">
          <div className="login-div">Contact Us</div>
          <div className="twitter-div1">+233 54 456 7298</div>
          <div className="twitter-div1">alumni@kmeacollege.ac.in</div>
        </div>
        <div className="frame-div7">
          <div className="login-div">Legal</div>
          <div className="twitter-div1">Legal Notice</div>
          <div className="twitter-div1">Privacy Policy</div>
          <div className="twitter-div1">Terms And Conditions</div>
        </div>
      </div>
      <div className="log-in-div2">Log In</div>
      <div className="please-enter-your-details">
        Please Enter Your Details.
      </div>
      <i className="i-forgot-my-password">I forgot my password</i>
      <i className="dont-have-an-account">Don’t have an account?</i>
      <i className="sign-up">Sign Up</i>
      <div className="name-div2">
        <i className="sanderggmailcom1">sanderg@gmail.com</i>
        <div className="email-div2">Email</div>
        <img className="rectangle-icon6" alt="" src="../rectangle-461.svg" />
      </div>
      <div className="password-div3">
        <img className="bieye-fill-icon2" alt="" src="../bieyefill2.svg" />
        <img className="password-icon2" alt="" src="../password2.svg" />
        <div className="password-div4">Password</div>
        <img className="rectangle-icon6" alt="" src="../rectangle-461.svg" />
      </div>
      <div className="log-in-button1">
        <div className="login-div">Login</div>
      </div>
      <div className="welcome-back-div">Welcome Back.</div>
      <img
        className="sammy-line-41-1-icon"
        alt=""
        src="../sammyline41-1@2x.png"
      />
      <div className="nav-white-div1">
        <div className="frame-div8" onClick={onFrameContainer3Click}>
          <div className="log-in-div3">Log In</div>
        </div>
        <div className="group-div2">
          <div className="apply-div1">Apply</div>
          <div className="home-div1">Home</div>
          <div className="about-div1" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div1">Help</div>
          <div className="contact-div1">Contact</div>
        </div>
        <img
          className="kmea-logo-white-13"
          alt=""
          src="../kmea-logo-white-11@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-11"
          alt=""
          src="../icons8brightbutton48-1-1@2x.png"
        />
      </div>
      <div className="frame-div9">
        <div className="log-in-div4">Log In</div>
      </div>
    </div>
  );
};

export default LoginLight;
