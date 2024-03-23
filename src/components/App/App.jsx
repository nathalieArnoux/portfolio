import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton.jsx";

const App = () => {
  // navigation scrolling
  const handleScroll = (section) => {
    const element = document.querySelector(section);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app bg-white">
      <Header handleScroll={handleScroll} />
      <ScrollTopButton />
      <main>
        <Hero handleScroll={handleScroll} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
