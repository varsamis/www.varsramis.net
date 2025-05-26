import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

function Experience() {
  const { selectedLanguage } = useGlobalContext();
  const mainKey = "experience";

  return (
    <Element name={mainKey} className="container">
     {texts[mainKey][selectedLanguage].map((item, i) => (
        <p key={i}>{item}</p>
      ))}{" "}
    </Element>
  );
}

export default Experience;
