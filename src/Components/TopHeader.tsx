import { useEffect, useState } from "react";
import "../css/top-header.css";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";

const devslopesLogo =
  "https://import.cdn.thinkific.com/88925/5RGTrmvS4SfYoD10SKAw_logo.png";

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
            <img src={devslopesLogo} alt="Devslopes Logo" />
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
        <Navbar>
          <NavItem iconClass="" text="Plans" />
          <NavItem iconClass="" text="Youtube" />
          <NavItem iconClass="" text="Instagram" />
          <NavItem iconClass="" text="Sign In" />
        </Navbar>
      </div>
    </header>
  );
};
