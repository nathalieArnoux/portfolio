import PropTypes from "prop-types";
import { FaPaperPlane } from "react-icons/fa";
import { PiShootingStar } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";

const Hero = ({ getTranslation, handleScroll }) => {
  return (
    <section className="hero min-h-[93vh] bg-base-200" id="home">
      <div className="hero-content relative flex-col gap-6 lg:flex-row-reverse">
        <aside className="absolute left-0 top-14 flex flex-col lg:hidden">
          <a
            className="btn btn-ghost"
            href="https://github.com/nathalieArnoux/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="cursor-pointer text-2xl" />
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/nathalie-arnoux/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="cursor-pointer text-2xl" />
          </a>
        </aside>
        {/* //? profile image defined as a background to animate the box-shadox */}
        <div className="h-52 w-52 animate-profilePic bg-profileImg bg-cover bg-center bg-no-repeat shadow-heroAnim lg:h-60 lg:w-60" />
        <div className="md:max-lg:px-4 lg:max-w-[800px]">
          <h1 className="mb-3 text-5xl font-bold md:flex md:gap-3">
            Nathalie Arnoux
            <PiShootingStar className="mt-1 text-accent" />
          </h1>
          <h2 className="mb-4 flex text-3xl text-accent md:gap-3 md:pl-8">
            <IoChevronForwardOutline className="mt-1 text-base-content" />
            {getTranslation("job")}
          </h2>
          <p className="mb-3 md:mb-1">{getTranslation("hero1")}</p>
          <p className="mb-4">{getTranslation("hero2")}</p>
          <div className="flex justify-center md:block">
            <button
              className="btn btn-primary"
              onClick={() => handleScroll("#contact")}
            >
              {getTranslation("heroButton")} <FaPaperPlane />
            </button>
          </div>
        </div>
        <aside className="hidden lg:flex lg:w-20 lg:flex-col">
          <a
            className="btn btn-ghost"
            href="https://github.com/nathalieArnoux/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="cursor-pointer text-2xl" />
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/nathalie-arnoux/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="cursor-pointer text-2xl" />
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  getTranslation: PropTypes.func,
  handleScroll: PropTypes.func,
};
