import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Input from './Input';

function App() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState<string>('')
  const handleInputChange = (value: string) => {
    console.log('input change:', inputValue, '->', value);
    // force parent component to re-render when input value changed
    setInputValue(value)
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <Input ref={inputRef} onChange={handleInputChange} />
        </div>
      </section>
    </>
  );
}

export default App;
