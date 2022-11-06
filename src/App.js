import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignupLight from "./pages/SignupLight";
import LoginLight from "./pages/LoginLight";
import ContactLight from "./pages/ContactLight";
import HelpLight from "./pages/HelpLight";
import AboutLight from "./pages/AboutLight";
import HomeLight from "./pages/HomeLight";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import About from "./pages/About";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-light":
        title = "";
        metaDescription = "";
        break;
      case "/contact-light":
        title = "";
        metaDescription = "";
        break;
      case "/help-light":
        title = "";
        metaDescription = "";
        break;
      case "/about-light":
        title = "";
        metaDescription = "";
        break;
      case "/home-light":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/help":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignupLight />} />

      <Route path="/login-light" element={<LoginLight />} />

      <Route path="/contact-light" element={<ContactLight />} />

      <Route path="/help-light" element={<HelpLight />} />

      <Route path="/about-light" element={<AboutLight />} />

      <Route path="/home-light" element={<HomeLight />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/login" element={<Login />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/help" element={<Help />} />

      <Route path="/about" element={<About />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
