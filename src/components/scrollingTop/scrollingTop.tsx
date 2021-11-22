import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollingTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollingTop;
