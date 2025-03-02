import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);
  return (
    <>
      <header className="header">
        <div className="logo">devjobs</div>
        <div className="theme-toggle">
          <span className="sun-icon">☀️</span>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="theme-switch"
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
            <label htmlFor="theme-switch"></label>
          </div>
          <span className="moon-icon">🌙</span>
        </div>
      </header>
    </>
  );
};

export default Header;
