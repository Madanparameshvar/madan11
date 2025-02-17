import React from "react";

function Display({ input }) {
  return (
    <div className="display-container">
      <input type="text" value={input} readOnly className="display" />
    </div>
  );
}

export default Display;
