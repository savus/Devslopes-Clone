import { Navbar } from "./Navbar";
import logo from "../assets/images/devslopes-logo.png";

import "../css/top-header.css";
import { NavItem } from "./NavItem";
import { TrigramButton } from "./TrigramButton";
import { useEffect, useState } from "react";

export const TopHeader = () => {
  const [ariaExpandedState, setAriaExpandedState] = useState<"true" | "false">(
    "false"
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 763) return setAriaExpandedState("false");
    });
  }, []);
  return (
    <header className={`top-header aria-expanded-${ariaExpandedState}`}>
      <div className="header-container container container-lg">
        <div className="logo-container">
          <a href="#">
            <img src={logo} alt="Devslopes-logo" />
          </a>
        </div>
        <TrigramButton
          ariaExpandedState={ariaExpandedState}
          setAriaExpandedState={setAriaExpandedState}
        />
        <Navbar>
          <NavItem text="Plans" />
          <NavItem text="Youtube" />
          <NavItem text="Instagram" />
          <NavItem text="Sign In" />
        </Navbar>
      </div>
    </header>
  );
};
