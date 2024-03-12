import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-24 md:pb-40 lg:pb-52 bg-base-200" id="contact">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <h3 className="text-lg italic mb-8">Wanna get in touch?</h3>
        <div className="flex flex-col md:flex-row gap-4 px-4 ">
          {/* //? card 1 */}
          <div className="card max-w-[440px] w-[18rem] bg-base-100 shadow-xl">
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
          <div className="card max-w-[440px] w-[18rem] bg-base-100 shadow-xl">
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
