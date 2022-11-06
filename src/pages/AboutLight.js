import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutLight.css";

const AboutLight = () => {
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
    <div className="about-light-div">
      <div className="rectangle-div12" />
      <div className="about-div4">
        <div className="kmea-alumni-association">KMEA ALUMNI ASSOCIATION</div>
      </div>
      <div className="board-div">
        <div className="our-board-of-trustees">Our Board Of Trustees</div>
        <div className="group-div12">
          <div className="dr-amar-nishad-mark-brookman-">
            <p className="dr-amar-nishad">
              <span className="nishanth-marikkar-span">Dr. Amar Nishad</span>
            </p>
            <p className="mark-brookman-amissah-oaa-198">
              <span className="mark-brookman-amissah-oaa">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music">
              <span className="mark-brookman-amissah-oaa">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <img
            className="rectangle-icon11"
            alt=""
            src="../rectangle-79@2x.png"
          />
        </div>
        <div className="group-div13">
          <div className="dr-amar-nishad-mark-brookman-">
            <p className="dr-amar-nishad">
              <span className="nishanth-marikkar-span">
                Dr. Rekha Lekshmanan
              </span>
            </p>
            <p className="mark-brookman-amissah-oaa-198">
              <span className="mark-brookman-amissah-oaa">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music">
              <span className="mark-brookman-amissah-oaa">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <img
            className="rectangle-icon11"
            alt=""
            src="../rectangle-791@2x.png"
          />
        </div>
        <div className="group-div14">
          <div className="dr-amar-nishad-mark-brookman-">
            <p className="dr-amar-nishad">
              <span className="nishanth-marikkar-span">Nishanth Marikkar</span>
            </p>
            <p className="mark-brookman-amissah-oaa-198">
              <span className="mark-brookman-amissah-oaa">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music">
              <span className="mark-brookman-amissah-oaa">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div13" />
        </div>
        <div className="group-div15">
          <div className="dr-amar-nishad-mark-brookman-">
            <p className="dr-amar-nishad">
              <span className="nishanth-marikkar-span">Riyas K</span>
            </p>
            <p className="mark-brookman-amissah-oaa-198">
              <span className="mark-brookman-amissah-oaa">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music">
              <span className="mark-brookman-amissah-oaa">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div13" />
        </div>
        <div className="group-div16">
          <div className="dr-amar-nishad-mark-brookman-">
            <p className="dr-amar-nishad">
              <span className="nishanth-marikkar-span">Naseema V A</span>
            </p>
            <p className="mark-brookman-amissah-oaa-198">
              <span className="mark-brookman-amissah-oaa">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music">
              <span className="mark-brookman-amissah-oaa">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div13" />
        </div>
        <div className="group-div17">
          <div className="dr-amar-nishad-mark-brookman-">
            <p className="dr-amar-nishad">
              <span className="nishanth-marikkar-span">Jasna K Azeez</span>
            </p>
            <p className="mark-brookman-amissah-oaa-198">
              <span className="mark-brookman-amissah-oaa">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad">
              <span className="mark-brookman-amissah-oaa">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music">
              <span className="mark-brookman-amissah-oaa">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div13" />
        </div>
      </div>
      <div className="the-kmea-engineering-college-a">
        <p className="the-kmea-engineering">
          The KMEA Engineering College alumni website would provide college
          graduates with a place to stay connected with their alma mater and
          fellow alumni. The website would offer news and information about the
          college, as well as a directory of alumni. graduates would be able to
          search for classmates and connect with them through the website. The
          site would also offer a forum for alumni to discuss their experiences
          and share advice.
        </p>
        <p className="the-kmea-engineering">&nbsp;</p>
        <p className="the-college-has">
          The college has a strong alumni network spread across the globe. The
          alumni of KMEA Engineering College are working in reputed
          organizations in India and abroad. They are also actively involved in
          various social and charitable activities. The alumni of KMEA
          Engineering College are committed to the development of the college
          and the students.
        </p>
      </div>
      <img className="image-10-icon" alt="" src="../image-10@2x.png" />
      <div className="group-div18">
        <img
          className="sammy-line-thinking-man-1-1"
          alt=""
          src="../sammylinethinkingman-1-1@2x.png"
        />
        <img
          className="sammy-line-lilac-question-1-icon"
          alt=""
          src="../sammylinelilacquestion-1@2x.png"
        />
      </div>
      <div className="nav-white-div4">
        <div className="frame-div18" onClick={onFrameContainerClick}>
          <div className="log-in-div7">Log In</div>
        </div>
        <div className="group-div19">
          <div className="apply-div4" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div4" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-div5" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div4" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div5" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-18"
          alt=""
          src="../kmea-logo-white-11@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-14"
          alt=""
          src="../icons8brightbutton48-1-12@2x.png"
        />
      </div>
      <div className="endbar-div4">
        <div className="rectangle-div17" />
        <img
          className="kmea-logo-white-19"
          alt=""
          src="../kmea-logo-white-19@2x.png"
        />
        <div className="frame-div19">
          <div className="follow-us-div4">Follow Us</div>
          <div className="twitter-div4">Twitter</div>
          <div className="twitter-div4">Facebook</div>
          <div className="twitter-div4">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c4">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div20">
          <div className="follow-us-div4">Contact Us</div>
          <div className="twitter-div4">+233 54 456 7298</div>
          <a
            className="alumnikmeacollegeacin2"
            href="mailto:alumni@kmeacollege.ac.in"
            target="_blank"
          >
            alumni@kmeacollege.ac.in
          </a>
        </div>
        <div className="frame-div21">
          <div className="follow-us-div4">Legal</div>
          <div className="twitter-div4">
            <span>Legal</span>
            <span className="span">{` `}</span>
            <span>Notice</span>
          </div>
          <div className="twitter-div4">Privacy Policy</div>
          <div className="twitter-div4">Terms And Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default AboutLight;
