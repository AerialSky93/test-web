import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CustomerTable from "./components/customer-table/customer-table";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<CustomerTable />} />
    </Routes>
  );
}

export default App;
