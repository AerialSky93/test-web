import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import JobPostingForm from "./components/job-posting-form/job-posting-form";
import JobPostingTable from "./components/job-posting-table/job-posting-table";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getAll" element={<JobPostingTable />} />
        <Route path="/post" element={<JobPostingForm />} />
      </Routes>
    </>
  );
}

export default App;
