import { IoDocumentText } from "react-icons/io5";

const About = () => {
  const handleDownloadResume = () => {
    // const pdfURL = `${process.end.PUBLIC_URL}/CV_Alternance.pdf`;
    const pdfURL = "./assets/CV_Alternance.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "CV_Alternance";
    link.click();
  };

  return (
    <section className="bg-base-200 py-24" id="about">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-bold">About Me</h2>
        <h3 className="mb-8 text-lg italic">It&apos;s short I swear</h3>
        <div className="flex max-w-7xl flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:gap-8">
          {/* //? image on the left */}
          <div className="mask mask-squircle flex h-[15rem] w-[15rem] items-center justify-center bg-accent lg:h-[21.3rem] lg:w-[21.3rem]">
            <div className="content-left mask mask-squircle h-56 w-56 bg-profileImg bg-cover bg-center bg-no-repeat lg:h-80 lg:w-80" />
          </div>
          {/* //? info on the right */}
          <div className="content-right flex max-w-3xl flex-col gap-5 md:max-lg:px-4">
            <div className="card-list flex flex-col items-center gap-4 md:flex-row md:max-lg:order-2 lg:flex-row">
              {/* //? card 1 */}
              <div className="card max-w-xs flex-grow bg-neutral shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Section 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* //? card 2 */}
              <div className="card max-w-xs flex-grow bg-neutral shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Section 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* //? card 3 */}
              <div className="card max-w-xs flex-grow bg-neutral shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Section 3</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <p className="md:max-lg:order-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam itaque tempora veritatis error, voluptates sequi nostrum
              suscipit nobis unde vel quaerat maiores pariatur ratione cumque
              earum similique praesentium optio.
            </p>
            <div className="self-center md:max-lg:order-3 lg:self-start">
              <button
                className="btn btn-secondary"
                onClick={handleDownloadResume}
              >
                Download Resume <IoDocumentText className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
