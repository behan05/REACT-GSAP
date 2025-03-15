import React, { useContext } from 'react';
import "./styles/app.css";
import { ThemeContext } from './themeContext/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

function App() {

  const counterValue = useContext(ThemeContext);

  const clickHandler = () => {
    counterValue.setcount(counterValue.count + 1);
  };

  return (
    <>
      <div className="count-container">
        <h2>{counterValue.count}</h2>
        <button onClick={clickHandler} className='btn'>Click me</button>
      </div>
      <ToggleTheme />
    </>
  )
}

export default App;