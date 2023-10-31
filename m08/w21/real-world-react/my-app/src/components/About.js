import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

function About() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log('Theme Context:', theme);
  
  return (
  <>
      <h2 className={`title ${theme}`}>About Page!</h2>
      <button onClick={toggleTheme}>Toggle theme!</button>
      <Link to={`/`}>Go back home</Link>
    </>
  )  
}

export default About;
