import { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route, json } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") == "true" ? true : false
  );
  const userLogged = useSelector((state) => state.userLogin);

  console.log("userLogged ", userLogged);

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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
