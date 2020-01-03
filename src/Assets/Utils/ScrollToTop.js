import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { withController } from "react-scroll-parallax";

const ScrollToTop = ({ parallaxController }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("load", event => {
      window.scrollBy(0, 1);
      parallaxController.update();
    });
  }, [pathname]);

  return null;
};

export default withController(ScrollToTop);
