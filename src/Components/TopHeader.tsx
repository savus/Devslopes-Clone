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
      <div className="header-container">
        <div className="header-logo ">
          <a href="https://devslopes.thinkific.com">
            <img
              src="https://import.cdn.thinkific.com/88925/5RGTrmvS4SfYoD10SKAw_logo.png"
              alt="devslopes logo"
            />
          </a>
        </div>
        <button
          className="btn trigram"
          aria-expanded={ariaExpandedState}
          onClick={() => {
            if (useReact) {
              const oppositeAria =
                ariaExpandedState === "true" ? "false" : "true";
              setAriaExpandedState(oppositeAria);
            }
          }}
        >
          <i className="fa fa-bars"></i>
        </button>
        <nav className="top-navigation">
          <ul className="ul-defaults-none flex-centered">
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
