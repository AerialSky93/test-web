import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App2() {
  const [data, setData] = useState();
  const apiURL =
    "https://hackcheck.woventeams.com/api/v4/breachedaccount/test@example.com";

  const getDataAsync = async () => {
    try {
      const response = await fetch(apiURL, { method: "GET" });
      if (response.ok) {
        const responseJson = await response.json();
        setData(responseJson);
        console.log("response Json", responseJson);
      } else {
        console.log(response.statusText);
      }
    } catch (e) {
      console.log("error found", e);
    }
  };

  useEffect(() => {
    let sumTest = 4 + 3;
    const test = getDataAsync();
  }, []);

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App2;
