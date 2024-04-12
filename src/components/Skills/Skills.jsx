import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  const { t } = useTranslation();
  const { title, subtitle } = t("skills");

  return (
    <section className="bg-base-200 py-24" id="skills">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <h3 className="mb-8 text-lg italic">{subtitle}</h3>
        <div className="flex w-full max-w-7xl flex-col gap-4 p-4 md:flex-row md:justify-center">
          {/* //? left side */}
          <div className="card max-w-[440px] flex-grow rounded-box bg-neutral shadow-xl">
            <div className="card-body items-center">
              <h4 className="card-title mb-4 text-2xl underline decoration-accent">
                Front-end
              </h4>
              <ul className="grid w-max grid-cols-2 gap-4 md:gap-x-8 lg:gap-x-12">
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-accent" />
                    HTML
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-accent" />
                    JavaScript
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-accent" />
                    CSS
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-accent" />
                    React
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-accent" />
                    TailWind
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-accent" />
                    Redux
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider divider-secondary md:divider-horizontal" />
          {/* //? right side */}
          <div className="card max-w-[440px] flex-grow rounded-box bg-neutral shadow-xl">
            <div className="card-body items-center">
              <h4 className="card-title mb-4 text-2xl underline decoration-primary">
                Back-end
              </h4>
              <ul className="grid w-max grid-cols-2 gap-4 md:gap-x-8 lg:gap-x-12">
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-primary" />
                    PHP
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-primary" />
                    SQL
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-primary" />
                    Symfony
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-primary" />
                    MySQL
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-primary" />
                    Doctrine
                  </h3>
                </li>
                <li className="flex flex-col">
                  <h3 className="flex gap-2 text-xl">
                    <FaCheckCircle className="mt-1.5 h-4 w-4 text-primary" />
                    Laravel
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
