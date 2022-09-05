import { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") ? true : false
  );
  // console.log(typeof localStorage.getItem("theme"), typeof darkMode);
  return (
    <div
      className={`${
        darkMode ? "dark " : ""
      } transition-opacity transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Feed />
    </div>
  );
}

export default App;
