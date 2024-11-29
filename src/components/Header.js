// src/components/Header.js
import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      {/* ...navigation links */}
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;