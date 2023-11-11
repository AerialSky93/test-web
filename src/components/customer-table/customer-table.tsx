import { Box, Button, Paper, Table, TableContainer } from "@mui/material";
import CustomerRow from "./customer-row";
import CustomerHeader from "./customer-header";
import { CustomerBodyView } from "../../types/customer-body-view";
import { customerGetData } from "../../service-api/customer-service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerTable() {
  const [customerList, setCustomerList] = useState<CustomerBodyView[]>();

  const getCustomers = async () => {
    try {
      const response = await customerGetData();
      if (response.ok) {
        const customerRes = await response.json();
        console.log(customerRes);
        setCustomerList(customerRes);
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
          <CustomerHeader />
          {customerList?.map((row) => (
            <CustomerRow customerBodyView={row} />
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

export default CustomerTable;
