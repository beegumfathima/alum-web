import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HelpLight.css";

const HelpLight = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
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
    <div className="help-light-div">
      <div className="rectangle-div6" />
      <div className="endbar-div3">
        <div className="rectangle-div7" />
        <img
          className="kmea-logo-white-16"
          alt=""
          src="../kmea-logo-white-15@2x.png"
        />
        <div className="frame-div14">
          <div className="follow-us-div3">Follow Us</div>
          <div className="twitter-div3">Twitter</div>
          <div className="twitter-div3">Facebook</div>
          <div className="twitter-div3">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c3">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div15">
          <div className="follow-us-div3">Contact Us</div>
          <div className="twitter-div3">+233 54 456 7298</div>
          <a
            className="alumnikmeacollegeacin1"
            href="mailto:alumni@kmeacollege.ac.in"
            target="_blank"
          >
            alumni@kmeacollege.ac.in
          </a>
        </div>
        <div className="frame-div16">
          <div className="follow-us-div3">Legal</div>
          <div className="twitter-div3">Legal Notice</div>
          <div className="twitter-div3">Privacy Policy</div>
          <div className="twitter-div3">Terms And Conditions</div>
        </div>
      </div>
      <div className="group-div7">
        <div className="need-help-div">Need Help?</div>
        <div className="how-can-we-help-you-out-our-t">
          <p className="how-can-we">How can we help you out?</p>
          <p className="our-team-is">
            Our team is standing by for service and support.
          </p>
        </div>
      </div>
      <div className="search-bar-div">
        <div className="rectangle-div8" />
        <img className="group-icon1" alt="" src="../group.svg" />
        <div className="search-text-div">
          <div className="search-keywords-div">Search keywords</div>
          <div className="line-div" />
        </div>
      </div>
      <div className="group-div8">
        <div className="q2-div">
          <div className="second-question-div">Second Question?</div>
          <img className="drop-down-icon" alt="" src="../drop-down.svg" />
          <div className="rectangle-div9" />
        </div>
        <div className="q3-div">
          <div className="second-question-div">Third Question?</div>
          <img className="drop-down-icon" alt="" src="../drop-down.svg" />
          <div className="rectangle-div9" />
        </div>
        <div className="group-div9">
          <div className="faqs-div">FAQs</div>
          <div className="frequently-asked-questions-we">
            Frequently Asked Questions. We’ve got instant answers.
          </div>
        </div>
        <div className="q1-div">
          <div className="lorem-ipsum-dolor-sit-amet-con">
            <p className="how-can-we">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="our-team-is">
              Nostrum voluptates rerum in optio qui ea expedita dolore,
              repudiandae pariatur amet ratione sit perferendis.
            </p>
          </div>
          <div className="first-question-div">First Question?</div>
          <img className="drop-down-icon2" alt="" src="../drop-down2.svg" />
          <div className="rectangle-div11" />
        </div>
      </div>
      <img
        className="sammy-line-man-at-a-psychologi-icon"
        alt=""
        src="../sammylinemanatapsychologistsappointmenttalksabouthisproblems-1@2x.png"
      />
      <div className="group-div10">
        <div className="if-you-cannot-find-the-answer">
          <p className="how-can-we">
            If you cannot find the answer to your questions in our FAQ.
          </p>
          <p className="our-team-is">
            You can always contact us we’ll answers you shortly.
          </p>
        </div>
        <div className="still-have-questions">{`Still Have Questions? `}</div>
      </div>
      <div className="contact-button-div">
        <div className="follow-us-div3">Contact Us</div>
      </div>
      <div className="nav-white-div3">
        <div className="frame-div17" onClick={onFrameContainer3Click}>
          <div className="log-in-div6">Log In</div>
        </div>
        <div className="group-div11">
          <div className="apply-div3" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div3" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-div3" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div3" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div4" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-17"
          alt=""
          src="../kmea-logo-white-11@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-13"
          alt=""
          src="../icons8brightbutton48-1-12@2x.png"
        />
      </div>
    </div>
  );
};

export default HelpLight;
