import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // useLocation gives us the current URL path
  const { pathname } = useLocation();

  // This effect runs every time the 'pathname' changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any visible HTML
  return null;
}
