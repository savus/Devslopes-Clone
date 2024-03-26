import { useEffect, useState } from "react";
import "../css/top-header.css";

export const TopHeader = () => {
  const useReact = true;
  const [ariaExpandedState, setAriaExpandedState] = useState<"true" | "false">(
    "false"
  );

  useEffect(() => {
    if (useReact) {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
          setAriaExpandedState("false");
        }
      });
    }
  }, []);

  return (
    <div className="top-header">
      <div className="header-container container">
        <div className="logo-container">
          <a href="#">
            <img src="../src/images/devslopes-logo.png" alt="" />
          </a>
        </div>
        <button className="trigram btn" aria-expanded="false">
          <i className="fa fa-bars"></i>
          <i className="fa fa-x"></i>
          <span>Menu</span>
        </button>
        <nav className="top-navigation">
          <ul className="top-navbar">
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">instagram</a>
            </li>
            <li>
              <a href="#">sign in</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
