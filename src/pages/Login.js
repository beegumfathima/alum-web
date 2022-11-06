import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
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
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="login-div1">
      <div className="rectangle-div23" data-scroll-to="rectangle" />
      <div className="endbar-div7">
        <div className="rectangle-div24" />
        <img
          className="kmea-logo-white-114"
          alt=""
          src="../kmea-logo-white-112@2x.png"
        />
        <div className="frame-div34">
          <div className="follow-us-div7">Follow Us</div>
          <div className="twitter-div7">Twitter</div>
          <div className="twitter-div7">Facebook</div>
          <div className="twitter-div7">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c7">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div35">
          <div className="follow-us-div7">Contact Us</div>
          <div className="twitter-div7">+233 54 456 7298</div>
          <div className="twitter-div7">alumni@kmeacollege.ac.in</div>
        </div>
        <div className="frame-div36">
          <div className="follow-us-div7">Legal</div>
          <div className="twitter-div7">Legal Notice</div>
          <div className="twitter-div7">Privacy Policy</div>
          <div className="twitter-div7">Terms And Conditions</div>
        </div>
      </div>
      <div className="nav-white-div7">
        <div className="frame-div37" onClick={onFrameContainer3Click}>
          <div className="log-in-div11">Log In</div>
        </div>
        <div className="group-div26">
          <div className="apply-div7" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div7">Home</div>
          <div className="about-div8" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div7" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div8" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-115"
          alt=""
          src="../kmea-logo-white-113@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-17"
          alt=""
          src="../icons8brightbutton48-1-15@2x.png"
        />
      </div>
      <div className="frame-div38" onClick={onFrameContainer4Click}>
        <div className="log-in-div12">Log In</div>
      </div>
      <div className="log-in-div13">Log In</div>
      <div className="please-enter-your-details1">
        Please Enter Your Details.
      </div>
      <i className="i-forgot-my-password1">I forgot my password</i>
      <i className="dont-have-an-account1">Don’t have an account?</i>
      <i className="sign-up1" onClick={onSignUpTextClick}>
        Sign Up
      </i>
      <div className="name-div6">
        <i className="sanderggmailcom4">sanderg@gmail.com</i>
        <div className="email-div7">Email</div>
        <img className="rectangle-icon19" alt="" src="../rectangle-464.svg" />
      </div>
      <div className="password-div8">
        <img className="bieye-fill-icon5" alt="" src="../bieyefill5.svg" />
        <img className="password-icon5" alt="" src="../password5.svg" />
        <div className="password-div9">Password</div>
        <img className="rectangle-icon19" alt="" src="../rectangle-464.svg" />
      </div>
      <div className="log-in-button4">
        <div className="follow-us-div7">Login</div>
      </div>
      <div className="welcome-back-div1">Welcome Back.</div>
      <img
        className="sammy-line-41-1-icon1"
        alt=""
        src="../sammyline41-1@2x.png"
      />
    </div>
  );
};

export default Login;
