import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeLight.css";

const HomeLight = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
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
    <div className="home-light-div">
      <div className="rectangle-div18" />
      <img className="group-icon2" alt="" src="../group-123.svg" />
      <div className="alumni-association-kmea-engine">
        <p className="alumni-association-p">
          <span>&nbsp;</span>
        </p>
        <p className="alumni-association-p">
          <span>ALUMNI ASSOCIATION</span>
        </p>
        <p className="kmea-engineering-college">
          <span>KMEA ENGINEERING College</span>
        </p>
      </div>
      <img className="vector-icon2" alt="" src="../vector-7.svg" />
      <img className="group-icon3" alt="" src="../group-126.svg" />
      <div className="kmea-engineering-college-alumn">
        KMEA Engineering College alumni are a group of highly successful and
        sought-after engineers. Many of our alumni have gone on to top
        engineering jobs at companies like Google, Apple, and Microsoft. Others
        have founded their own successful startups. Whether you’re looking for a
        job or wanting to start your own company, our alumni can help you
        achieve your goals.
      </div>
      <img className="vector-icon3" alt="" src="../vector-6.svg" />
      <img className="card-original-icon" alt="" src="../card-original.svg" />
      <div className="to-emerge-as-a-leading-institu">
        <ul className="to-emerge-as-a-leading-institu1">
          <li className="to-emerge-as">
            To emerge as a leading institution committed to excel in technical
            education, research and development by providing creative learning
            opportunities to our students, which enable them to lead in their
            chosen fields with confidence and success.
          </li>
          <li className="to-emerge-as">
            To impart quality technical education and create competent
            technocrats who will be able to meet the changing requirements of
            the industry and society.
          </li>
          <li className="to-emerge-as">
            To provide an environment that fosters creativity, leadership and
            professional development.
          </li>
          <li className="to-emerge-as">
            To encourage research and development in frontier areas.
          </li>
          <li className="to-emerge-as">
            To impart knowledge in various disciplines of engineering and
            technology.
          </li>
          <li>
            To educate our students to be good citizens of the country with high
            ethical standards.
          </li>
        </ul>
      </div>
      <img className="vector-icon4" alt="" src="../vector-5.svg" />
      <div className="mission-vision">{`Mission  & Vision`}</div>
      <div className="achievements-div">Achievements</div>
      <img className="vector-icon5" alt="" src="../vector-8.svg" />
      <div className="rectangle-div19" />
      <img className="group-icon4" alt="" src="../group-109.svg" />
      <img className="group-icon5" alt="" src="../group-109.svg" />
      <img className="group-icon6" alt="" src="../group-109.svg" />
      <div className="frame-div22">
        <div className="frame-div23">
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original1.svg"
          />
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original2.svg"
          />
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original3.svg"
          />
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original4.svg"
          />
        </div>
        <div className="frame-div24">
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original5.svg"
          />
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original6.svg"
          />
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original7.svg"
          />
          <img
            className="card-original-icon1"
            alt=""
            src="../card-original8.svg"
          />
        </div>
      </div>
      <img className="vector-icon6" alt="" src="../vector-9.svg" />
      <div className="group-div20">
        <div className="students-div">Students</div>
        <div className="div6">16000</div>
      </div>
      <div className="group-div21">
        <div className="students-div">Founded</div>
        <div className="div6">2002</div>
      </div>
      <div className="group-div22">
        <div className="students-div">Courses</div>
        <div className="div6">6+</div>
      </div>
      <div className="star-div" />
      <div className="endbar-div5">
        <div className="rectangle-div20" />
        <img
          className="kmea-logo-white-110"
          alt=""
          src="../kmea-logo-white-19@2x.png"
        />
        <div className="frame-div25">
          <div className="follow-us-div5">Follow Us</div>
          <div className="twitter-div5">Twitter</div>
          <div className="twitter-div5">Facebook</div>
          <div className="twitter-div5">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c5">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div26">
          <div className="follow-us-div5">Contact Us</div>
          <div className="twitter-div5">+233 54 456 7298</div>
          <a
            className="alumnikmeacollegeacin3"
            href="mailto:alumni@kmeacollege.ac.in"
            target="_blank"
          >
            alumni@kmeacollege.ac.in
          </a>
        </div>
        <div className="frame-div27">
          <div className="follow-us-div5">Legal</div>
          <div className="twitter-div5">
            <span>Legal</span>
            <span className="span1">{` `}</span>
            <span>Notice</span>
          </div>
          <div className="twitter-div5">Privacy Policy</div>
          <div className="twitter-div5">Terms And Conditions</div>
        </div>
      </div>
      <img
        className="sammy-line-girl-with-a-geoloca-icon"
        alt=""
        src="../sammylinegirlwithageolocationiconinherhand-1@2x.png"
      />
      <div className="nav-white-div5">
        <div className="frame-div28" onClick={onFrameContainer6Click}>
          <div className="log-in-div8">Log In</div>
        </div>
        <div className="group-div23">
          <div className="apply-div5" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div5" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-div6" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div5" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div6" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-111"
          alt=""
          src="../kmea-logo-white-11@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-15"
          alt=""
          src="../icons8brightbutton48-1-15@2x.png"
        />
      </div>
      <img
        className="icons8-bright-button-48-1"
        alt=""
        src="../icons8brightbutton48-1@2x.png"
      />
    </div>
  );
};

export default HomeLight;
