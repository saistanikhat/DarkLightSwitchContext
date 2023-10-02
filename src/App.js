import React, { useContext, createContext, useState } from "react";
import "./styles.css";

// Main focus on dark/light mode switch with React context
const initialTheme = {
  darkMode: false,
  toggleDarkMode: () => {}
};

const ThemeContext = createContext(initialTheme);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <MainContainer />
      </ThemeProvider>
    </div>
  );
};

const MainContainer = () => {
  const { darkMode } = useContext(ThemeContext);
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const theme = darkMode ? "dark" : "light";

  return (
    <div className={theme}>
      <div className="container">
        My name is Saista, and I am using {theme} theme.
      </div>
      <div className="toggleBtn">
        <div>Toggle theme:</div>
        <ToggleButton />
      </div>
      <div className="counter">
        <div onClick={incrementCounter}>+</div>
        <div>Counter: {counter}</div>
        <div onClick={decrementCounter}>-</div>
      </div>
    </div>
  );
};

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className="button" onClick={toggleDarkMode}>
      Toggle Theme
    </button>
  );
};

export default App;
