import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
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

  const onKMEALogoWhite1Click = useCallback(() => {
    window.open("https://kmeacollege.ac.in");
  }, []);

  return (
    <div className="home-div11">
      <div className="rectangle-div39" />
      <img className="group-icon9" alt="" src="../group-1231.svg" />
      <div
        className="alumni-association-kmea-engine1"
        data-scroll-to="aLUMNIASSOCIATIONKMEA"
      >
        <p className="blank-line-p3">
          <span>&nbsp;</span>
        </p>
        <p className="blank-line-p3">
          <span>ALUMNI ASSOCIATION</span>
        </p>
        <p className="kmea-engineering-college1">
          <span>KMEA ENGINEERING College</span>
        </p>
      </div>
      <img className="vector-icon9" alt="" src="../vector-7.svg" />
      <div className="nav-white-div11">
        <div className="frame-div51" onClick={onFrameContainerClick}>
          <div className="log-in-div17">Log In</div>
        </div>
        <div className="group-div44">
          <div className="apply-div11" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div12" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-div14" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div12" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div14" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-122"
          alt=""
          src="../kmea-logo-white-113@2x.png"
          onClick={onKMEALogoWhite1Click}
        />
        <img
          className="icons8-bright-button-48-1-111"
          alt=""
          src="../icons8brightbutton48-1-15@2x.png"
        />
      </div>
      <img className="group-icon10" alt="" src="../group-1261.svg" />
      <div className="kmea-engineering-college-alumn1">
        KMEA Engineering College alumni are a group of highly successful and
        sought-after engineers. Many of our alumni have gone on to top
        engineering jobs at companies like Google, Apple, and Microsoft. Others
        have founded their own successful startups. Whether you’re looking for a
        job or wanting to start your own company, our alumni can help you
        achieve your goals.
      </div>
      <img className="vector-icon10" alt="" src="../vector-61.svg" />
      <img className="card-original-icon9" alt="" src="../card-original9.svg" />
      <div className="to-emerge-as-a-leading-institu2">
        <ul className="to-emerge-as-a-leading-institu3">
          <li className="to-emerge-as1">
            To emerge as a leading institution committed to excel in technical
            education, research and development by providing creative learning
            opportunities to our students, which enable them to lead in their
            chosen fields with confidence and success.
          </li>
          <li className="to-emerge-as1">
            To impart quality technical education and create competent
            technocrats who will be able to meet the changing requirements of
            the industry and society.
          </li>
          <li className="to-emerge-as1">
            To provide an environment that fosters creativity, leadership and
            professional development.
          </li>
          <li className="to-emerge-as1">
            To encourage research and development in frontier areas.
          </li>
          <li className="to-emerge-as1">
            To impart knowledge in various disciplines of engineering and
            technology.
          </li>
          <li>
            To educate our students to be good citizens of the country with high
            ethical standards.
          </li>
        </ul>
      </div>
      <img className="vector-icon11" alt="" src="../vector-5.svg" />
      <div className="mission-vision1">{`Mission  & Vision`}</div>
      <div className="achievements-div1">Achievements</div>
      <img className="vector-icon12" alt="" src="../vector-8.svg" />
      <div className="rectangle-div40" />
      <img className="group-icon11" alt="" src="../group-109.svg" />
      <img className="group-icon12" alt="" src="../group-109.svg" />
      <img className="group-icon13" alt="" src="../group-109.svg" />
      <div className="frame-div52">
        <div className="frame-div53">
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original10.svg"
          />
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original11.svg"
          />
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original12.svg"
          />
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original13.svg"
          />
        </div>
        <div className="frame-div54">
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original14.svg"
          />
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original15.svg"
          />
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original16.svg"
          />
          <img
            className="card-original-icon10"
            alt=""
            src="../card-original17.svg"
          />
        </div>
      </div>
      <img className="vector-icon13" alt="" src="../vector-9.svg" />
      <div className="group-div45">
        <div className="students-div1">Students</div>
        <div className="div16">16000</div>
      </div>
      <div className="group-div46">
        <div className="students-div1">Founded</div>
        <div className="div16">2002</div>
      </div>
      <div className="group-div47">
        <div className="students-div1">Courses</div>
        <div className="div16">6+</div>
      </div>
      <div className="star-div1" />
      <div className="endbar-div11">
        <div className="rectangle-div41" />
        <img
          className="kmea-logo-white-123"
          alt=""
          src="../kmea-logo-white-121@2x.png"
        />
        <div className="frame-div55">
          <div className="follow-us-div11">Follow Us</div>
          <div className="twitter-div11">Twitter</div>
          <div className="twitter-div11">Facebook</div>
          <div className="twitter-div11">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c11">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div56">
          <div className="follow-us-div11">Contact Us</div>
          <div className="twitter-div11">+233 54 456 7298</div>
          <a
            className="alumnikmeacollegeacin5"
            href="mailto:alumni@kmeacollege.ac.in"
            target="_blank"
          >
            alumni@kmeacollege.ac.in
          </a>
        </div>
        <div className="frame-div57">
          <div className="follow-us-div11">Legal</div>
          <div className="twitter-div11">Legal Notice</div>
          <div className="twitter-div11">Privacy Policy</div>
          <div className="twitter-div11">Terms And Conditions</div>
        </div>
      </div>
      <img
        className="sammy-line-girl-with-a-geoloca-icon1"
        alt=""
        src="../sammylinegirlwithageolocationiconinherhand-1@2x.png"
      />
    </div>
  );
};

export default Home;
