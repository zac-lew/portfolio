import React, { useState, useEffect, useRef } from "react";
import MyNav from "./MyNav";
import "./Home.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
import Education from "./Education";
import ScrollToTop from "../Assets/Utils/ScrollToTop";

// To-Do: Convert this to sfc/hooks, move sticky scroll logic to
// this component (i.e. pull define refs here and then pass into relevant components ),
// add projects to display

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const leadershipRef = useRef(null);
  const providerRef = useRef(null);
  const operationsRef = useRef(null);

  const sectionRefs = [
    { section: "Leadership", ref: leadershipRef },
    { section: "Providers", ref: providerRef },
    { section: "Operations", ref: operationsRef },
  ];

  // Set screen width
  useEffect(() => {
    setWindowSize();
    window.addEventListener("resize", setWindowSize);
    return () => {
      window.removeEventListener("resize", setWindowSize);
    };
  }, []);
  const setWindowSize = () => {
    setIsMobile(window.innerWidth < 812);
  };

  // Set nav scrolling refs
  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      console.log("🚀 ~ file: Home.js ~ line 47 ~ handleScroll ~ scrollPosition", scrollPosition);

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <React.Fragment>
      <ScrollToTop />
      <MyNav scrollTo={scrollTo} headerRef={headerRef} leadershipRef={leadershipRef} />
      <div className="home-wrapper">
        <Intro isMobile={isMobile} />
        <Skills isMobile={isMobile} leadershipRef={leadershipRef} />
        <Work isMobile={isMobile} />
        <Education />
        <Footer />
      </div>
    </React.Fragment>
  );
};

const getDimensions = (element) => {
  const { height } = element.getBoundingClientRect();
  const offsetTop = element.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (element) => {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default Home;
