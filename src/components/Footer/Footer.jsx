import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiShootingStar } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-base-100 text-neutral-content">
      <aside className="items-center grid-flow-col">
        <PiShootingStar className="h-12 w-12" />
        <div className="flex-col">
          <p className="text-xs">© 2020-present Nathalie Arnoux.</p>
          <p className="text-xs">All Rights Reserved.</p>
        </div>
      </aside>
      <nav className="grid-flow-col hidden md:grid md:place-self-center md:justify-self-end">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/nathalieArnoux/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nathalie-arnoux/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer text-2xl" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
