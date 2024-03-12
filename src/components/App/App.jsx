import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app bg-white">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
