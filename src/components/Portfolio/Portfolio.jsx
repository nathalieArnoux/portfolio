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
            <div className="flex flex-wrap items-center gap-x-3">
              <h2 className="card-title text-2xl">WebStellar</h2>
              <div className="mb-2 mt-1 flex gap-2 lg:mt-2">
                <div className="badge badge-accent shadow-md">React</div>
                <div className="badge badge-primary shadow-md">Symfony</div>
                <div className="badge-base-200 badge italic shadow-md">
                  {completedTag}
                </div>
              </div>
            </div>
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
            <div className="flex flex-wrap items-center gap-x-3">
              <h2 className="card-title text-2xl">LoZ Ocarina Soundboard</h2>
              <div className="mb-2 mt-1 flex gap-2 lg:mt-2">
                <div className="badge badge-accent shadow-md">JS</div>
                <div className="badge-base-200 badge italic shadow-md">
                  {wipTag}
                </div>
              </div>
            </div>
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
