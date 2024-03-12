import "../../animations.css";
import { FaPaperPlane } from "react-icons/fa";
import { PiShootingStar } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="hero min-h-[93vh] bg-base-200" id="home">
      <div className="hero-content flex-col relative lg:flex-row-reverse gap-6">
        <aside className="flex flex-col absolute top-14 left-0 lg:hidden">
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
        <div
          className="bg-profileImg bg-no-repeat bg-center bg-cover shadow-heroAnim w-52 h-52 lg:w-60 lg:h-60"
          style={{ animation: "profile__animate 8s ease-in-out infinite 1s" }}
        />
        <div className="md:max-lg:px-4">
          <h1 className="text-5xl font-bold mb-3 md:flex md:gap-3">
            Nathalie Arnoux
            <PiShootingStar className="mt-1" />
          </h1>
          <h2 className="text-3xl mb-4 md:pl-8 flex md:gap-3">
            <IoChevronForwardOutline className="mt-1" />
            Web Developer
          </h2>
          <p className="mb-3 md:mb-0">
            Front developer, space enthousiast and otter lover. I love learning
            new things and solving problems through creative thinking.
          </p>
          <p className="mb-4">Check out my portfolio to learn more about me!</p>
          <div className="flex justify-center md:block">
            <button className="btn btn-primary">
              Say Hello <FaPaperPlane />
            </button>
          </div>
        </div>
        <aside className="hidden lg:flex lg:flex-col lg:w-20">
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
