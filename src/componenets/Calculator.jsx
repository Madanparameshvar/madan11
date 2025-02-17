import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import History from "./History";
import "./Calculator.css"; // Import styles

function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const result = eval(input).toString();
      if (input.trim() !== "") {
        setHistory([...history, `${input} = ${result}`]); // Save calculation history
      }
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  const clearHistory = () => {
    setHistory([]); // Clear history when button is clicked
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <Buttons handleClick={handleClick} clearInput={clearInput} calculateResult={calculateResult} />
      <History history={history} clearHistory={clearHistory} />
    </div>
  );
}

export default Calculator;
