import NavLinks from "./NavLinks";
import MobileThemeChanger from "./ThemeChangers/MobileThemeChanger";
import DesktopThemeChanger from "./ThemeChangers/DesktopThemeChanger";
import PropTypes from "prop-types";
import lightThemeSound from "/assets/light-theme.mp3";
import darkThemeSound from "/assets/dark-theme.mp3";
import { IoCode } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Header = ({ handleScroll }) => {
  const [isChecked, setIsChecked] = useState(false);
  const lightSound = new Audio(lightThemeSound);
  const darkSound = new Audio(darkThemeSound);
  lightSound.volume = 0.1;
  darkSound.volume = 0.1;

  const playThemeSound = () => {
    isChecked ? darkSound.play() : lightSound.play();
    setIsChecked(!isChecked);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          {/* //? Dropdown menu on mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* //? Navlinks on mobile */}
            <ul
              /* tabIndex={0} */
              className="menu dropdown-content menu-sm z-[1] mt-2 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <NavLinks handleScroll={handleScroll} />
            </ul>
          </div>
          {/* //? Site logo */}
          <button
            className="btn btn-ghost text-xl"
            onClick={() => handleScroll("#home")}
          >
            Nathalie Arnoux <IoCode className="mt-1 h-6 w-6" />
          </button>
        </div>
        {/* //? Navlinks on desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks handleScroll={handleScroll} />
          </ul>
        </div>
        {/* //? Socials links (on desktop only) */}
        <div className="navbar-end gap-16 px-2">
          <ul className="hidden gap-4 lg:flex">
            <li>
              <a
                href="https://github.com/nathalieArnoux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nathalie-arnoux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer text-2xl" />
              </a>
            </li>
          </ul>
          {/* //? theme changer for mobiles */}
          <MobileThemeChanger playThemeSound={playThemeSound} />
          {/* //? theme changer for desktop */}
          <DesktopThemeChanger playThemeSound={playThemeSound} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  handleScroll: PropTypes.func,
};
