import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languagesExpanded, setLanguagesExpanded] = useState(false);
  const [moreAbout, setMoreAbout] = useState(false);
  const [moreCranio, setMoreCranio] = useState(false);
  const [moreQualification, setMoreQualification] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        languagesExpanded,
        setLanguagesExpanded,
        moreAbout,
        setMoreAbout,
        moreCranio,
        setMoreCranio,
        moreQualification,
        setMoreQualification,
        darkMode,
        setDarkMode,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
