import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="py-24 bg-base-200" id="skills">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <h3 className="text-lg italic mb-8">Learning is only the beginning</h3>
        <div className="max-w-7xl w-full p-4 gap-4 flex flex-col md:flex-row md:justify-center">
          {/* //? left side */}
          <div className="card flex-grow max-w-[440px] bg-neutral rounded-box shadow-xl">
            <div className="card-body items-center">
              <h4 className="card-title text-2xl mb-4 underline decoration-accent">
                Front-end
              </h4>
              <ul className="grid grid-cols-2 w-max gap-4 md:gap-x-8 lg:gap-x-12">
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-accent" />
                    HTML
                  </h3>
                  <p className="text-xs italic">Intermediate</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-accent" />
                    JavaScript
                  </h3>
                  <p className="text-xs italic">Intermediate</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-accent" />
                    CSS
                  </h3>
                  <p className="text-xs italic">Advanced</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-accent" />
                    React
                  </h3>
                  <p className="text-xs italic">Advanced</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-accent" />
                    TailWind
                  </h3>
                  <p className="text-xs italic">Intermediate</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-accent" />
                    Redux
                  </h3>
                  <p className="text-xs italic">Intermediate</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider md:divider-horizontal divider-secondary" />
          {/* //? right side */}
          <div className="card flex-grow max-w-[440px] bg-neutral rounded-box shadow-xl">
            <div className="card-body items-center">
              <h4 className="card-title text-2xl mb-4 underline decoration-primary">
                Back-end
              </h4>
              <ul className="grid grid-cols-2 w-max gap-4 md:gap-x-8 lg:gap-x-12">
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-primary" />
                    PHP
                  </h3>
                  <p className="text-xs italic">Advanced</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-primary" />
                    SQL
                  </h3>
                  <p className="text-xs italic">Intermediate</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-primary" />
                    Symfony
                  </h3>
                  <p className="text-xs italic">Basic</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-primary" />
                    MySQL
                  </h3>
                  <p className="text-xs italic">Advanced</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-primary" />
                    Doctrine
                  </h3>
                  <p className="text-xs italic">Basic</p>
                </li>
                <li className="flex flex-col">
                  <h3 className="text-xl flex gap-2">
                    <FaCheckCircle className="mt-1.5 w-4 h-4 text-primary" />
                    Laravel
                  </h3>
                  <p className="text-xs italic">Basic</p>
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
