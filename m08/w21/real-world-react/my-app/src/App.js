import { Link } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/error-page';
import About from './components/About';

import { ThemeContext } from './context/ThemeContext';
import './App.css';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <div className="App">
      <header className="App-header">
        <h1>Real World React</h1>
        <Link to={`about`}>Go to "/about"</Link>
      </header>
    </div>
  ),
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = function () {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme ('light');
  }

  return (
    <ThemeContext.Provider value={{
      theme, toggleTheme
    }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
