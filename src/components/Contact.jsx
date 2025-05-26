import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import { BsLinkedin, BsEnvelopeFill, BsGithub } from "react-icons/bs";
function Contact() {
  const { selectedLanguage, darkMode } = useGlobalContext();
  const mainKey = "contact";

  return (
    <Element name={mainKey} className="container">
      <p key={mainKey}>{texts.contact[selectedLanguage]}</p>
      <p key="123">
        <a href="https://github.com/varsamis" target="_blank" className="contact-link">
          <BsGithub className="contact-icon" />
        </a>
        <a href="https://linkedin.com/in/karavarsamis" target="_blank" className="contact-link">
          <BsLinkedin className="contact-icon"/>
        </a>
        <a href="mailto:varsamisk@hotmail.com" target="_blank" className="contact-link">
          <BsEnvelopeFill className="contact-icon"/>
        </a>
      </p>
    </Element>
  );
}
export default Contact;
