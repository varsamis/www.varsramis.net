import { texts } from "../data";

import { Link } from "react-scroll";
import LanguageSwitch from "./LanguageSwitch";
import DarkMode from "./DarkMode";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className={`navbar-list`}>
        {texts.links.map((link) => (
          <Link
            key={link.id}
            className={`navbar-link`}
            activeClass="active"
            to={link.url}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {link.text["en"]}
          </Link>
        ))}
      </div>
      <div className="navbar-language">
        <LanguageSwitch />
      </div>
      <div className="navbar-darkmode">
        <DarkMode />
      </div>
      <div className="navbar-avatar">
        <Avatar />
      </div>
    </nav>
  );
};
export default Navbar;
