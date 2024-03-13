import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-base-200 py-24 md:pb-40 lg:pb-52" id="contact">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-bold">Contact</h2>
        <h3 className="mb-8 text-lg italic">Wanna get in touch?</h3>
        <div className="flex flex-col gap-4 px-4 md:flex-row ">
          {/* //? card 1 */}
          <div className="card w-[18rem] max-w-[440px] bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <MdOutgoingMail className="h-10 w-10 text-accent" />
              <div className="flex flex-col items-center">
                <h2 className="card-title">Email</h2>
                <p>arnouxn@gmail.com</p>
              </div>
              <div className="card-actions mt-6 justify-center">
                <a href="mailto:arnouxn@gmail.com">
                  <button className="btn btn-accent">
                    Send email <FaArrowRightLong />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* //? card 2 */}
          <div className="card w-[18rem] max-w-[440px] bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <FaLinkedin className="h-10 w-10 text-primary" />
              <div className="flex flex-col items-center">
                <h2 className="card-title">LinkedIn</h2>
                <p>Nathalie Arnoux</p>
              </div>
              <div className="card-actions mt-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/nathalie-arnoux/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    Send message <FaArrowRightLong />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
