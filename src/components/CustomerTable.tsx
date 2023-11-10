import { Paper, Table, TableContainer } from "@mui/material";
import CustomerRow from "./CustomerRow";
import CustomerHeader from "./CustomerHeader";
import { CustomerBodyView } from "../types/CustomerBodyView";
import { customerGetData } from "../types/api/service/CustomerService";
import { useEffect, useState } from "react";

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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <CustomerHeader />
        {customerList?.map((row) => (
          <CustomerRow customerBodyView={row} />
        ))}
      </Table>
    </TableContainer>
  );
}

export default CustomerTable;
