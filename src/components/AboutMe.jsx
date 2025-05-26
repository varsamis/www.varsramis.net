import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

function AboutMe() {
  const { selectedLanguage } = useGlobalContext();
  const mainKey = "about";

  return (
    <Element name="about" className="container">
     {texts[mainKey][selectedLanguage].map((item, i) => (
        <p key={i}>{item}</p>
      ))}{" "}
    </Element>
  );
}
export default AboutMe;
