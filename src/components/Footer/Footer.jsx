import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiShootingStar } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer items-center bg-base-100 p-4 text-neutral-content">
      <aside className="grid-flow-col items-center">
        <PiShootingStar className="h-12 w-12" />
        <div className="flex-col">
          <p className="text-xs">© 2024-present Nathalie Arnoux.</p>
          <p className="text-xs">All Rights Reserved.</p>
        </div>
      </aside>
      <nav className="hidden grid-flow-col md:grid md:place-self-center md:justify-self-end">
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
