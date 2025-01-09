import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

function Experience() {
  const { selectedLanguage } = useGlobalContext();
  const mainKey = "experience";

  return (
    <Element name={mainKey} className="container">
      <p key={mainKey}>{texts.experience[selectedLanguage]}</p>
    </Element>
  );
}

export default Experience;
