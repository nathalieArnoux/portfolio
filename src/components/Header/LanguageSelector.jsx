import PropTypes from "prop-types";

const LanguageSelector = ({ selectLanguage }) => {
  return (
    <div>
      <button className="btn" onClick={() => selectLanguage("fr")}>
        Fr
      </button>
      <button className="btn" onClick={() => selectLanguage("en")}>
        En
      </button>
    </div>
  );
};

export default LanguageSelector;

LanguageSelector.propTypes = {
  selectLanguage: PropTypes.func,
  handleScroll: PropTypes.func,
};
