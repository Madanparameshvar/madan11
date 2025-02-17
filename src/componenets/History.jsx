import React from "react";

function History({ history, clearHistory }) {
  return (
    <div className="history">
      <h3>History</h3>
      {history.length === 0 ? <p>No history yet</p> : null}
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      {history.length > 0 && (
        <button className="clear-history" onClick={clearHistory}>
          Clear History
        </button>
        
      )}
    </div>
  );
}

export default History;
