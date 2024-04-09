export const NavItem = ({ text }: { text: string }) => {
  return (
    <li className="nav-item">
      <a href="#">{text}</a>
    </li>
  );
};
