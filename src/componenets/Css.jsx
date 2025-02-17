.calculator {
    width: 250px;
    margin: 50px auto;
    text-align: center;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 8px;
    background-color: #f4f4f4;
  }
  
  input {
    width: 100%;
    height: 40px;
    text-align: right;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5  px;
  }
  
  button {
    width: 50px;
    height: 50px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    background: lightgray;
  }
  
  .clear {
    grid-column: span 4;
    background: red;
    color: white;
  }
  