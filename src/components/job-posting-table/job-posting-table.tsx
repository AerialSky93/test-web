import { Box, Button, Paper, Table, TableContainer } from "@mui/material";
import { CustomerBodyView } from "../../types/customer-body-view";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobPostingHeader from "./job-posting-header";
import JobPostingRow from "./job-posting-row";
import { JobPostingBodyView } from "../../types/job-posting-body-view";
import { jobPostingGet } from "../../service-api/job-posting-service";

function JobPostingTable() {
  const [customerList, setCustomerList] = useState<JobPostingBodyView[]>();

  const getCustomers = async () => {
    try {
      const response = await jobPostingGet();
      if (response.ok) {
        const customerRes = await response.json();
        console.log(customerRes);
        setCustomerList(customerRes.jobPostingRecentResponse);
      } else {
        console.log(response.statusText);
      }
    } catch (e) {
      console.log("error found", e);
    }
  };

  useEffect(() => {
    console.log("hello2");
    getCustomers();
  }, []);

  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/post");
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <JobPostingHeader />
          {customerList?.map((row) => (
            <JobPostingRow jobPostingView={row} />
          ))}
        </Table>
      </TableContainer>

      <Box marginTop={2}>
        <Button size="small" onClick={handleLink}>
          Visit Form Data
        </Button>
      </Box>
    </>
  );
}

export default JobPostingTable;
