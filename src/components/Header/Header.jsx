/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { IoCode } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = ({ handleScroll }) => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
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
            <ul
              /* tabIndex={0} */
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <button onClick={() => handleScroll("#home")}>Home</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#about")}>About</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#skills")}>Skills</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#portfolio")}>
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("#contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-ghost text-xl"
            onClick={() => handleScroll("#home")}
          >
            Nathalie Arnoux <IoCode className="mt-1 h-6 w-6" />
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => handleScroll("#home")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleScroll("#about")}>About</button>
            </li>
            <li>
              <button onClick={() => handleScroll("#skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => handleScroll("#portfolio")}>
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("#contact")}>Contact</button>
            </li>
          </ul>
        </div>
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
          <label
            htmlFor="themeControllerMobile"
            className="swap swap-rotate md:hidden"
          >
            {/* this hidden checkbox controls the state */}
            <input
              id="themeControllerMobile"
              type="checkbox"
              className="theme-controller"
              value="pastel"
            />

            {/* sun icon */}
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {/* //? theme changer for desktop */}
          <label
            htmlFor="themeControllerDesktop"
            className="hidden cursor-pointer place-items-center md:grid"
          >
            <input
              id="themeControllerDesktop"
              type="checkbox"
              value="pastel"
              className="theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content"
            />
            <svg
              className="col-start-1 row-start-1 fill-base-100 stroke-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg
              className="col-start-2 row-start-1 fill-base-100 stroke-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  handleScroll: PropTypes.func,
};
