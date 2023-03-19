import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./pages/Main";
import Project from "./pages/Project";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("light" === "true")
  );

  useEffect(() => {
    localStorage.setItem("dark", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme? 'dark' : 'light' }>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Main />
                </>
              }
            />
            <Route path=":projectSlug" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
