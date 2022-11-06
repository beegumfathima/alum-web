import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="about-div11">
      <div className="rectangle-div33" />
      <div className="about-div12">
        <div className="kmea-alumni-association1">KMEA ALUMNI ASSOCIATION</div>
      </div>
      <div className="nav-white-div10">
        <div className="frame-div47" onClick={onFrameContainerClick}>
          <div className="log-in-div16" onClick={onLogInTextClick}>
            Log In
          </div>
        </div>
        <div className="group-div36" onClick={onGroupContainerClick}>
          <div className="apply-div10" onClick={onApplyTextClick}>
            Apply
          </div>
          <div className="home-div10">Home</div>
          <div className="about-div13" onClick={onAboutTextClick}>
            About
          </div>
          <div className="help-div11" onClick={onHelpTextClick}>
            Help
          </div>
          <div className="contact-div13" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <img
          className="kmea-logo-white-120"
          alt=""
          src="../kmea-logo-white-113@2x.png"
        />
        <img
          className="icons8-bright-button-48-1-110"
          alt=""
          src="../icons8brightbutton48-1-15@2x.png"
        />
      </div>
      <div className="board-div1">
        <div className="our-board-of-trustees1">Our Board Of Trustees</div>
        <div className="group-div37">
          <div className="dr-amar-nishad-mark-brookman-1">
            <p className="dr-amar-nishad2">
              <span className="dr-amar-nishad3">Dr. Amar Nishad</span>
            </p>
            <p className="mark-brookman-amissah-oaa-1986">
              <span className="mark-brookman-amissah-oaa6">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music6">
              <span className="mark-brookman-amissah-oaa6">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <img
            className="rectangle-icon24"
            alt=""
            src="../rectangle-792@2x.png"
          />
        </div>
        <div className="group-div38">
          <div className="dr-amar-nishad-mark-brookman-1">
            <p className="dr-amar-nishad2">
              <span className="dr-amar-nishad3">Dr. Rekha Lekshmanan</span>
            </p>
            <p className="mark-brookman-amissah-oaa-1986">
              <span className="mark-brookman-amissah-oaa6">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music6">
              <span className="mark-brookman-amissah-oaa6">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <img
            className="rectangle-icon24"
            alt=""
            src="../rectangle-793@2x.png"
          />
        </div>
        <div className="group-div39">
          <div className="dr-amar-nishad-mark-brookman-1">
            <p className="dr-amar-nishad2">
              <span className="dr-amar-nishad3">Nishanth Marikkar</span>
            </p>
            <p className="mark-brookman-amissah-oaa-1986">
              <span className="mark-brookman-amissah-oaa6">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music6">
              <span className="mark-brookman-amissah-oaa6">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div34" />
        </div>
        <div className="group-div40">
          <div className="dr-amar-nishad-mark-brookman-1">
            <p className="dr-amar-nishad2">
              <span className="dr-amar-nishad3">Riyas K</span>
            </p>
            <p className="mark-brookman-amissah-oaa-1986">
              <span className="mark-brookman-amissah-oaa6">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music6">
              <span className="mark-brookman-amissah-oaa6">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div34" />
        </div>
        <div className="group-div41">
          <div className="dr-amar-nishad-mark-brookman-1">
            <p className="dr-amar-nishad2">
              <span className="dr-amar-nishad3">Naseema V A</span>
            </p>
            <p className="mark-brookman-amissah-oaa-1986">
              <span className="mark-brookman-amissah-oaa6">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music6">
              <span className="mark-brookman-amissah-oaa6">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div34" />
        </div>
        <div className="group-div42">
          <div className="dr-amar-nishad-mark-brookman-1">
            <p className="dr-amar-nishad2">
              <span className="dr-amar-nishad3">Jasna K Azeez</span>
            </p>
            <p className="mark-brookman-amissah-oaa-1986">
              <span className="mark-brookman-amissah-oaa6">
                Mark Brookman-Amissah (OAA 1987) is a Geodetic Engineer by
                training and is currently a lecturer in Land Surveying/Geomatics
                at the Accra Technical University.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">
                He is very passionate about the intellectual and moral
                development of students and spends a lot of time outside the
                classroom mentoring students on how to develop their
                communication and project management skills.
              </span>
            </p>
            <p className="dr-amar-nishad2">
              <span className="mark-brookman-amissah-oaa6">{`His hobbies include watching soccer and documentaries on world history. `}</span>
            </p>
            <p className="he-loves-jazz-and-reggae-music6">
              <span className="mark-brookman-amissah-oaa6">
                He loves jazz and reggae music and also spends some of his
                leisure time playing the drums.
              </span>
            </p>
          </div>
          <div className="rectangle-div34" />
        </div>
      </div>
      <div className="endbar-div10">
        <div className="rectangle-div38" />
        <img
          className="kmea-logo-white-121"
          alt=""
          src="../kmea-logo-white-121@2x.png"
        />
        <div className="frame-div48">
          <div className="follow-us-div10">Follow Us</div>
          <div className="twitter-div10">Twitter</div>
          <div className="twitter-div10">Facebook</div>
          <div className="twitter-div10">Instagram</div>
        </div>
        <div className="copyright-kmea-engineering-c10">{`Copyright © KMEA Engineering College  Alumni `}</div>
        <div className="frame-div49">
          <div className="follow-us-div10">Contact Us</div>
          <div className="twitter-div10">+233 54 456 7298</div>
          <div className="twitter-div10">alumni@kmeacollege.ac.in</div>
        </div>
        <div className="frame-div50">
          <div className="follow-us-div10">Legal</div>
          <div className="twitter-div10">Legal Notice</div>
          <div className="twitter-div10">Privacy Policy</div>
          <div className="twitter-div10">Terms And Conditions</div>
        </div>
      </div>
      <div className="the-kmea-engineering-college-a1">
        <p className="the-kmea-engineering1">
          The KMEA Engineering College alumni website would provide college
          graduates with a place to stay connected with their alma mater and
          fellow alumni. The website would offer news and information about the
          college, as well as a directory of alumni. graduates would be able to
          search for classmates and connect with them through the website. The
          site would also offer a forum for alumni to discuss their experiences
          and share advice.
        </p>
        <p className="the-kmea-engineering1">&nbsp;</p>
        <p className="the-college-has1">
          The college has a strong alumni network spread across the globe. The
          alumni of KMEA Engineering College are working in reputed
          organizations in India and abroad. They are also actively involved in
          various social and charitable activities. The alumni of KMEA
          Engineering College are committed to the development of the college
          and the students.
        </p>
      </div>
      <img className="image-10-icon1" alt="" src="../image-10@2x.png" />
      <div className="group-div43">
        <img
          className="sammy-line-thinking-man-1-11"
          alt=""
          src="../sammylinethinkingman-1-1@2x.png"
        />
        <img
          className="sammy-line-lilac-question-1-icon1"
          alt=""
          src="../sammylinelilacquestion-11@2x.png"
        />
      </div>
    </div>
  );
};

export default About;
