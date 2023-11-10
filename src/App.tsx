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

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import CustomerTable from "./CustomerTable";
import Home from "./Home";
function App() {
  const [data, setData] = useState();
  const apiURL =
    "https://hackcheck.woventeams.com/api/v4/breachedaccount/test@example.com";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CustomerTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
