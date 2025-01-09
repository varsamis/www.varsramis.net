import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

function Contact() {
  const { selectedLanguage } = useGlobalContext();
  const mainKey = "contact";

  return (
    <Element name={mainKey} className="container">
      <p key={mainKey}>{texts.contact[selectedLanguage]}</p>
    </Element>
  );
}
export default Contact;
