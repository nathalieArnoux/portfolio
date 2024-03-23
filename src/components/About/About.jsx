import { useTranslation, Trans } from "react-i18next";
import { IoDocumentText } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();
  const {
    title,
    subtitle,
    box1Title,
    box1Content,
    box2Title,
    box2Content,
    box3Title,
    box3Content,
    downloadCVButton,
  } = t("about");

  const handleDownloadResume = () => {
    const pdfURL = "./assets/CV-NArnoux_2024.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "CV-NArnoux_2024";
    link.click();
  };

  return (
    <section className="bg-base-200 py-24" id="about">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <h3 className="mb-8 text-lg italic">{subtitle}</h3>
        <div className="flex max-w-7xl flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:gap-8">
          {/* //? image on the left */}
          <div className="mask mask-squircle flex h-[15rem] w-[15rem] items-center justify-center bg-accent xl:h-[21.3rem] xl:w-[21.3rem]">
            <div className="content-left mask mask-squircle h-56 w-56 bg-profileImg bg-cover bg-center bg-no-repeat lg:h-52 xl:h-[18.5rem] xl:w-[18.5rem]" />
          </div>
          {/* //? info on the right */}
          <div className="content-right flex max-w-4xl flex-col gap-5 md:max-lg:px-4">
            <div className="card-list grid grid-rows-3 items-stretch justify-stretch gap-4 md:grid-cols-3 md:grid-rows-1 md:max-lg:order-2">
              {/* //? card 1 */}
              <div className="card bg-neutral shadow-xl">
                <div className="card-body justify-between">
                  <h2 className="card-title">
                    {box1Title}
                    <FaQuestion className="text-lg text-primary" />
                  </h2>
                  <p>{box1Content}</p>
                </div>
              </div>
              {/* //? card 2 */}
              <div className="card flex-grow bg-neutral shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {box2Title}
                    <FaHandHoldingHand className="text-lg text-secondary" />
                  </h2>
                  <p>{box2Content}</p>
                </div>
              </div>
              {/* //? card 3 */}
              <div className="card flex-grow bg-neutral shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {box3Title}
                    <FaStickyNote className="text-lg text-accent" />
                  </h2>
                  <p className="flex">{box3Content}</p>
                </div>
              </div>
            </div>
            <p className="text-lg md:max-lg:order-1">
              <Trans
                i18nKey={"about.description"}
                components={{ 1: <em className="text-primary" /> }}
              />
            </p>
            <details className="text-base">
              <summary className="pl-8">
                <Trans
                  i18nKey={"about.factTitle"}
                  components={{ 1: <strong /> }}
                />
              </summary>
              <p>
                <Trans
                  i18nKey={"about.factContent"}
                  components={{ 1: <em className="text-accent" />, 2: <em /> }}
                />
              </p>
            </details>
            <div className="self-center md:max-lg:order-3 lg:self-start">
              <button
                className="btn btn-secondary"
                onClick={handleDownloadResume}
              >
                {downloadCVButton} <IoDocumentText className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
