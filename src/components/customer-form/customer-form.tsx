import { Box, Button, TextField } from "@mui/material";
import { CustomerBodyView } from "../../types/customer-body-view";
import { customerPost } from "../../types/api/service/customer-service";
import { ChangeEvent, useEffect, useState } from "react";
import { CustomerCreateRequest } from "../../types/api/service/dto/customer-create-request";

function CustomerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    feeAmount: "",
  });

  useEffect(() => {}, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const customerPostRequest: CustomerCreateRequest = {
      firstName: formData.firstName,
      feeAmount: +formData.feeAmount,
    };
    customerPost(customerPostRequest);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Fee Amount"
            variant="outlined"
            fullWidth
            name="feeAmount"
            type="number"
            value={formData.feeAmount}
            onChange={handleChange}
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default CustomerForm;
