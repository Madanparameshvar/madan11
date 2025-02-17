import React from "react";

function Buttons({ handleClick, clearInput, calculateResult }) {
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];
  
  return (
    <div className="buttons">
      {buttons.map((char) => (
        <button key={char} onClick={() => (char === "=" ? calculateResult() : handleClick(char))}>
          {char}
        </button>
      ))}
      <button className="clear" onClick={clearInput}>C</button>
    </div>
  );
}

export default Buttons;
