import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";

function CustomerTable() {
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
    console.log("hello2");
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </header>
    </div>
  );
}

export default CustomerTable;
