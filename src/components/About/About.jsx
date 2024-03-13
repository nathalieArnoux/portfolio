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
    <section className="py-24 bg-base-200" id="about">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <h3 className="text-lg italic mb-8">It&apos;s short I swear</h3>
        <div className="max-w-7xl p-4 gap-4 flex flex-col items-center justify-center lg:flex-row lg:gap-8">
          {/* //? image on the left */}
          <div className="flex justify-center items-center bg-accent mask mask-squircle w-[15rem] h-[15rem] lg:w-[21.3rem] lg:h-[21.3rem]">
            <div className="content-left bg-profileImg bg-no-repeat bg-center bg-cover mask mask-squircle w-56 h-56 lg:w-80 lg:h-80" />
          </div>
          {/* //? info on the right */}
          <div className="content-right flex flex-col gap-5 max-w-3xl md:max-lg:px-4">
            <div className="card-list flex flex-col md:flex-row md:max-lg:order-2 items-center gap-4 lg:flex-row">
              {/* //? card 1 */}
              <div className="card flex-grow max-w-xs bg-neutral shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Section 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* //? card 2 */}
              <div className="card flex-grow max-w-xs bg-neutral shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Section 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* //? card 3 */}
              <div className="card flex-grow max-w-xs bg-neutral shadow-xl">
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
            <div className="md:max-lg:order-3 self-center lg:self-start">
              <button
                className="btn btn-secondary"
                onClick={handleDownloadResume}
              >
                Download Resume <IoDocumentText className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
