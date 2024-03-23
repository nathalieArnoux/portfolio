import { useTranslation, Trans } from "react-i18next";
import WebStellar from "/assets/WebStellar.webp";
import Ocarina from "/assets/Ocarina.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  const { t } = useTranslation();
  const {
    title,
    subtitle,
    completedTag,
    wipTag,
    description,
    visitButton,
    webstellarDescr,
    zeldaDescr,
  } = t("portfolio");

  return (
    <section className="bg-base-200 py-24" id="portfolio">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <h3 className="mb-8 text-lg italic">{subtitle}</h3>
      </div>
      <div className="flex flex-col items-center gap-6 px-4 md:flex-row md:items-start md:justify-center">
        {/* //? card 1 */}
        <div className="card card-compact h-fit max-w-[440px] bg-neutral shadow-xl">
          <figure>
            <img src={WebStellar} alt="Preview of WebStellar project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              WebStellar
              <div className="badge badge-accent mt-1 shadow-md">React</div>
              <div className="badge badge-primary mt-1 shadow-md">Symfony</div>
              <div className="badge-base-200 badge mt-1 italic shadow-md">
                {completedTag}
              </div>
            </h2>
            <details>
              <summary>{description}</summary>
              <p className="mt-3">{webstellarDescr}</p>
              <div className="divider my-0" />
              <p>
                <Trans
                  i18nKey={"portfolio.webstellarWork"}
                  components={{ 1: <em className="italic text-secondary" /> }}
                />
              </p>
            </details>
            <div className="card-actions justify-end">
              <a
                href="https://webstellar.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary">
                  {visitButton} <FaArrowRightLong />
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
              LoZ Ocarina Soundboard
              <div className="badge badge-accent mt-1 shadow-md">JS</div>
              <div className="badge-base-200 badge mt-1 italic shadow-md">
                {wipTag}
              </div>
            </h2>
            <details>
              <summary>Description</summary>
              <p className="mt-3">{zeldaDescr}</p>
              <div className="divider my-0" />
              <p>
                <Trans
                  i18nKey={"portfolio.zeldaWork"}
                  components={{ 1: <em className="italic text-secondary" /> }}
                />
              </p>
            </details>
            <div className="card-actions justify-end">
              <a
                href="https://natdev-soundboard.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary">
                  {visitButton} <FaArrowRightLong />
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
