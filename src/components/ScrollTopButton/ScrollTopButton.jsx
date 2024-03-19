import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollTopButton = () => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //? handle state of button visibility
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setButtonVisible(true) : setButtonVisible(false);
    };
    //? add event listener
    window.addEventListener("scroll", handleScrollButtonVisibility);
    //? remove event listener
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top fixed bottom-4 right-4 z-50 transition-all lg:bottom-8 lg:right-8 ${isButtonVisible ? "opacity-100" : "invisible opacity-0"}`}
    >
      <button
        className="animate-bounce rounded-full bg-neutral"
        onClick={() => handleScrollTop()}
      >
        <FaCircleArrowUp className="text-4xl text-accent lg:text-5xl" />
      </button>
    </div>
  );
};

export default ScrollTopButton;
