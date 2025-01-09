import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

function AboutMe() {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="about" className="container">
      {texts.about[selectedLanguage].map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </Element>
  );
}
export default AboutMe;
