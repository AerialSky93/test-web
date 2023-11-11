import { Box, Button, IconButton, Snackbar, TextField } from "@mui/material";
import { customerPost } from "../../service-api/customer-service";
import { ChangeEvent, useEffect, useState } from "react";
import { CustomerCreateRequest } from "../../service-api/dto/customer-create-request";
import CloseIcon from "@mui/icons-material/Close";

function CustomerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    feeAmount: "",
  });

  useEffect(() => {}, []);

  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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

    const getCustomers = async () => {
      try {
        const response = await customerPost(customerPostRequest);
        if (response.ok) {
          setOpen(true);
        }
      } catch (e) {
        console.log("error found", e);
      }
    };

    getCustomers();
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

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
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Data Created"
        action={action}
      />
    </Box>
  );
}

export default CustomerForm;
