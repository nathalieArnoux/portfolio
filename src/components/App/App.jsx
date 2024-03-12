import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app bg-white">
      <Header />
      <main>
        <Hero />
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
