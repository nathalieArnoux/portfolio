import WebStellar from "/assets/WebStellar.webp";
import Ocarina from "/assets/Ocarina.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <section className="bg-base-200 py-24" id="portfolio">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-bold">Portfolio</h2>
        <h3 className="mb-8 text-lg italic">This is my work!</h3>
      </div>
      <div className="flex flex-col items-center gap-6 px-4 md:flex-row md:items-start md:justify-center">
        {/* //? card 1 */}
        <div className="card card-compact h-fit max-w-[440px] bg-neutral shadow-xl">
          <figure>
            <img src={WebStellar} alt="Preview of WebStellar project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              WebStellar{" "}
              <div className="badge badge-accent mt-1 shadow-md">React</div>
              <div className="badge badge-primary mt-1 shadow-md">Symfony</div>
            </h2>
            <details>
              <summary>Description</summary>
              <p className="mt-3">
                Astronomy website realized in a group of five, final project of
                my training program.
              </p>
              <div className="divider my-0" />
              <p>
                <span className="italic text-secondary">Scrum Master</span> and{" "}
                <span className="italic text-secondary">CSS Lead</span>, my main
                realization was the{" "}
                <span className="italic text-secondary">Exploration</span> page.
              </p>
            </details>
            <div className="card-actions justify-end">
              <a
                href="https://webstellar.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary">
                  Visit project <FaArrowRightLong />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* //? card 2 */}
        <div className="card card-compact h-fit max-w-[440px] bg-neutral shadow-xl">
          <figure>
            <img
              src={Ocarina}
              alt="Preview of Zelda Ocarina Soundboard project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              LoZ Ocarina Soundboard{" "}
              <div className="badge badge-accent mt-1 shadow-md">JS</div>
            </h2>
            <details>
              <summary>Description</summary>
              <p className="mt-3">
                A fun school project customized into a Legend of Zelda ocarina
                player, with working sounds and animations.
              </p>
              <div className="divider my-0" />
              <p>
                Entirely built in{" "}
                <span className="italic text-secondary">Vanilla JS</span>, this
                project allowed me to dabble in{" "}
                <span className="italic text-secondary">CSS animations</span>.
              </p>
            </details>
            <div className="card-actions justify-end">
              <a
                href="https://natdev-soundboard.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary">
                  Visit project <FaArrowRightLong />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
