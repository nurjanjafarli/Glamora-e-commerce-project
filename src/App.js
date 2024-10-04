import React from "react";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
