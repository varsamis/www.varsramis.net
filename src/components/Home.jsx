import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

function Home() {
  const { selectedLanguage } = useGlobalContext();
  const mainKey = "home";

  return (
    <Element name={mainKey} className="container">
      {texts[mainKey][selectedLanguage].map((item, i) => (
        <p key={i}>{item}</p>
      ))}{" "}
    </Element>
  );
}
export default Home;
