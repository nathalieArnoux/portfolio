import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { sectionList } from "../../data";

const NavLinks = ({ handleScroll }) => {
  const { t } = useTranslation();

  return sectionList.map((section) => {
    return (
      <li key={section}>
        <button onClick={() => handleScroll(`#${section}`)}>
          {t(`${section}.title`)}
        </button>
      </li>
    );
  });
};

export default NavLinks;

NavLinks.propTypes = {
  handleScroll: PropTypes.func,
};
