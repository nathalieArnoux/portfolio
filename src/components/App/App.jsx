import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
