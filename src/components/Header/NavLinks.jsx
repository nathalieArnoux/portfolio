import PropTypes from "prop-types";
import { sectionList } from "../../data";

const NavLinks = ({ handleScroll }) => {
  return sectionList.map((section) => {
    const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
    return (
      <li key={section}>
        <button onClick={() => handleScroll(`#${section}`)}>
          {sectionName}
        </button>
      </li>
    );
  });
};

export default NavLinks;

NavLinks.propTypes = {
  handleScroll: PropTypes.func,
};
