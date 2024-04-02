import { ReactNode } from "react";

export const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="top-navigation">
      <ul className="header-nav">{children}</ul>
    </nav>
  );
};
