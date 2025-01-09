// I need to creat a button that I will use to togle between night and day mode or light and dark mode
// I will use the context api to do this

import { useEffect } from "react";
import { useGlobalContext } from "../context";

function DarkMode() {
  const { darkMode, setDarkMode } = useGlobalContext();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <div className="dark-mode" onClick={handleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </div>
  );
}

export default DarkMode;
