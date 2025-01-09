import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

function Home() {
  const { selectedLanguage } = useGlobalContext();
  const mainKey = "home";

  return (
    <Element name="home" className="container">
      <p key={mainKey}>{texts.home[selectedLanguage]}</p>
    </Element>
  );
}
export default Home;
