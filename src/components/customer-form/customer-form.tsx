import { Box } from "@mui/material";
import { CustomerBodyView } from "../../types/customer-body-view";
import { customerGetData } from "../../types/api/service/customer-service";
import { useEffect, useState } from "react";

function CustomerForm() {
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

  return <Box>Hello</Box>;
}

export default CustomerForm;
