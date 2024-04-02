export const NavItem = ({
  iconClass,
  text,
}: {
  iconClass: string;
  text: string;
}) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {iconClass && <i className={`${iconClass}`}></i>}
        {text !== "" ? text : ""}
      </a>
    </li>
  );
};
