// Application.js
import React, { useState } from 'react';

const Application = () => {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  const handleButtonPress = (val) => {
    if (val === '=') {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (val === 'C') {
      setResult('');
      setInput('');
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
        <input type="text" value={result} disabled />
      </div>
      <div className="keypad">
        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button onClick={() => handleButtonPress('7')}>7</button>
        <button onClick={() => handleButtonPress('8')}>8</button>
        <button onClick={() => handleButtonPress('9')}>9</button>
        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={() => handleButtonPress('+')}>+</button>
        <button onClick={() => handleButtonPress('-')}>-</button>
        <button onClick={() => handleButtonPress('*')}>*</button>
        <button onClick={() => handleButtonPress('/')}>/</button>
        <button onClick={() => handleButtonPress('=')}>=</button>
        <button onClick={() => handleButtonPress('C')}>C</button>
      </div>
    </div>
  );
};

export default Application;
