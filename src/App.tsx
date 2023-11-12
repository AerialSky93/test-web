import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CustomerTable from "./components/customer-table/customer-table";
import CustomerForm from "./components/customer-form/customer-form";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getAll" element={<CustomerTable />} />
        <Route path="/post" element={<CustomerForm />} />
      </Routes>
    </>
  );
}

export default App;
