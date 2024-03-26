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
    <header className="top-header">
      <div
        className={`header-container container aria-expanded-${ariaExpandedState}`}
      >
        <div className="logo-container">
          <a href="#">
            <img src="../src/images/devslopes-logo.png" alt="" />
          </a>
        </div>
        <button
          className="trigram btn"
          aria-expanded={ariaExpandedState}
          onClick={(e) => {
            e.preventDefault();
            const valueToSet = ariaExpandedState === "true" ? "false" : "true";
            setAriaExpandedState(valueToSet);
          }}
        >
          {ariaExpandedState === "true" ? (
            <i className="fa fa-x"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
          <span>Menu</span>
        </button>
        <nav className="top-navigation">
          <ul className="header-nav">
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
    </header>
  );
};
