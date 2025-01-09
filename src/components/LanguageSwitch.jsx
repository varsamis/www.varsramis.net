import englishLang from "../assets/EN.svg";
import czechLang from "../assets/CZ.svg";
import greekLang from "../assets/GR.svg";
import PropTypes from "prop-types";
import { useGlobalContext } from "../context";

function LanguageSwitch() {
  const { selectedLanguage, setSelectedLanguage, languagesExpanded, setLanguagesExpanded } = useGlobalContext();

  const handleLanguageChange = () => {
    console.log(languagesExpanded);
    setLanguagesExpanded(!languagesExpanded);
  };

  const handleLanguageSelect = (event) => {
    console.log(event.target.id);
    setSelectedLanguage(event.target.id);
  };

  function Language({ language }) {
    const images = {
      en: englishLang,
      cz: czechLang,
      gr: greekLang,
    };
    return <img src={images[language]} alt={language} id={language} onClick={handleLanguageSelect} />;
  }

  Language.propTypes = {
    language: PropTypes.string.isRequired,
  };

  return (
    <div className="language-switch" onClick={handleLanguageChange}>
      {languagesExpanded ? (
        <>
          <Language language="en" />
          <Language language="cz" />
          <Language language="gr" />
        </>
      ) : (
        <Language language={selectedLanguage} />
      )}
    </div>
  );
}
export default LanguageSwitch;
