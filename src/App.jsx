import React, { useEffect, useState } from "react";
import Navbar from "./components/presentation/Navbar";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={<route.route />} />
          ))}
        </Route>
        <Route path="/login" element={<LogIn setLoggedIn={setLoggedIn} />} />
        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </div>
  );
};

export default App;
