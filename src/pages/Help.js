import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const Help = () => {
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

  const onSearchBarContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactButtonContainerClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="help-div9">
      <div className="rectangle-div27" />
      <div className="endbar-div9">
        <div className="rectangle-div28" />
        <img
          className="kmea-logo-white-118"
          alt=""
          src="../kmea-logo-white-116@2x.png"
        />
        <div className="frame-div43">
          <div className="follow-us-div9">Follow Us</div>
          <div className="twitter-div9">Twitter</div>
          <div className="twitter-div9">Facebook</div>
          <div className="twitter-div9">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c9">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div44">
          <div className="follow-us-div9">Contact Us</div>
          <div className="twitter-div9">+233 54 456 7298</div>
          <a
            className="alumnikmeacollegeacin4"
            href="mailto:alumni@kmeacollege.ac.in"
            target="_blank"
          >
            alumni@kmeacollege.ac.in
          </a>
        </div>
        <div className="frame-div45">
          <div className="follow-us-div9">Legal</div>
          <div className="twitter-div9">Legal Notice</div>
          <div className="twitter-div9">Privacy Policy</div>
          <div className="twitter-div9">Terms And Conditions</div>
        </div>
      </div>
      <div className="nav-white-div9">
        <div className="frame-div46" onClick={onFrameContainer3Click}>
          <div className="log-in-div15">Log In</div>
        </div>
        <div className="group-div31">
          <div className="apply-div9" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div9">Home</div>
          <div className="about-div10" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div10" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div12" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-119"
          alt=""
          src="../kmea-logo-white-113@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-19"
          alt=""
          src="../icons8brightbutton48-1-15@2x.png"
        />
      </div>
      <div className="group-div32">
        <div className="need-help-div1">Need Help?</div>
        <div className="how-can-we-help-you-out-our-t1">
          <p className="how-can-we1">How can we help you out?</p>
          <p className="our-team-is1">
            Our team is standing by for service and support.
          </p>
        </div>
      </div>
      <div className="search-bar-div1" onClick={onSearchBarContainerClick}>
        <div className="rectangle-div29" />
        <img className="group-icon8" alt="" src="../group1.svg" />
        <div className="search-text-div1">
          <div className="search-keywords-div1">Search keywords</div>
          <div className="line-div1" />
        </div>
      </div>
      <div className="group-div33">
        <div className="q2-div1">
          <div className="second-question-div1">Second Question?</div>
          <img className="drop-down-icon3" alt="" src="../drop-down3.svg" />
          <div className="rectangle-div30" />
        </div>
        <div className="q3-div1">
          <div className="second-question-div1">Third Question?</div>
          <img className="drop-down-icon3" alt="" src="../drop-down3.svg" />
          <div className="rectangle-div30" />
        </div>
        <div className="group-div34" data-scroll-to="groupContainer">
          <div className="faqs-div1">FAQs</div>
          <div className="frequently-asked-questions-we1">
            Frequently Asked Questions. We’ve got instant answers.
          </div>
        </div>
        <div className="q1-div1">
          <div className="lorem-ipsum-dolor-sit-amet-con1">
            <p className="how-can-we1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="our-team-is1">
              Nostrum voluptates rerum in optio qui ea expedita dolore,
              repudiandae pariatur amet ratione sit perferendis.
            </p>
          </div>
          <div className="first-question-div1">First Question?</div>
          <img className="drop-down-icon5" alt="" src="../drop-down5.svg" />
          <div className="rectangle-div32" />
        </div>
      </div>
      <img
        className="sammy-line-man-at-a-psychologi-icon1"
        alt=""
        src="../sammylinemanatapsychologistsappointmenttalksabouthisproblems-1@2x.png"
      />
      <div className="group-div35">
        <div className="if-you-cannot-find-the-answer1">
          <p className="how-can-we1">
            If you cannot find the answer to your questions in our FAQ.
          </p>
          <p className="our-team-is1">
            You can always contact us we’ll answers you shortly.
          </p>
        </div>
        <div className="still-have-questions1">{`Still Have Questions? `}</div>
      </div>
      <div
        className="contact-button-div1"
        onClick={onContactButtonContainerClick}
      >
        <div className="follow-us-div9">Contact Us</div>
      </div>
    </div>
  );
};

export default Help;
