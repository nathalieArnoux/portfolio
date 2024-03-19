import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton.jsx";

import enTranslations from "../../en.json";
import frTranslations from "../../fr.json";
import { useState } from "react";

const App = () => {
  // selected language
  const [selectedLanguage, changeSelectedLanguage] = useState("en");
  // store all translations for access
  const storeTranslations = {
    en: enTranslations,
    fr: frTranslations,
  };
  // change selected language
  const selectLanguage = (lang) => {
    changeSelectedLanguage(lang);
  };
  // access translation snippets
  const getTranslation = (key) => {
    return storeTranslations[selectedLanguage][key];
  };

  // navigation scrolling
  const handleScroll = (section) => {
    const element = document.querySelector(section);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app bg-white">
      <Header selectLanguage={selectLanguage} handleScroll={handleScroll} />
      <ScrollTopButton />
      <main>
        <Hero getTranslation={getTranslation} handleScroll={handleScroll} />
        <About getTranslation={getTranslation} />
        <Skills getTranslation={getTranslation} />
        <Portfolio getTranslation={getTranslation} />
        <Contact getTranslation={getTranslation} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
