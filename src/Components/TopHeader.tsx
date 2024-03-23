import "../css/top-header.css";

export const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-navigation">
        <div className="header-logo ">
          <a href="https://devslopes.thinkific.com">
            <img
              src="https://import.cdn.thinkific.com/88925/5RGTrmvS4SfYoD10SKAw_logo.png"
              alt="devslopes logo"
            />
          </a>
        </div>
        <button className="btn trigram" aria-expanded="true">
          <i className="fa fa-bars"></i>
        </button>
        <nav className="header-navbar">
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
