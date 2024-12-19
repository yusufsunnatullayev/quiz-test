import React from "react";
import Navbar from "./components/Navbar";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={<route.route />} />
        ))}
      </Routes>
    </>
  );
};

export default App;
