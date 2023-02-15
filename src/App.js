import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

function App() {
  const [inputMath, setInput] = useState("");
  const [result, updateResult] = useState({ math: "", error: "" });
  const apiData = {
    expr: inputMath,
  };

  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  function handleMath() {
    axios
      .post("https://api.mathjs.org/v4/", apiData)
      .then(function (response) {
        console.log(response.data);
        updateResult({
          math: response.data.result,
          error: response.data.error,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">Test my math skills</header>
      <div className="App-main">
        <div class="centered">
          <input
            className="input"
            type="text"
            id="mathProblem"
            name="mathProblem"
            onChange={handleChange}
            value={inputMath}
          />
        </div>
        <div class="centered">
          <Button onClick={handleMath}>TEST</Button>
        </div>
        <div class="centered">
          {" "}
          <text>result:{result.math}</text>
        </div>
      </div>
    </div>
  );
}

export default App;
