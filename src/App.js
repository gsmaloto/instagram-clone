import { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") == "true" ? true : false
  );
  const userLogged = useSelector((state) => state.userLogin);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      {!userLogged.id ? (
        <Login />
      ) : (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
