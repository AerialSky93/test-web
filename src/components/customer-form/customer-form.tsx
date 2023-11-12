import { Box, Button, IconButton, Snackbar, TextField } from "@mui/material";
import { customerPost } from "../../service-api/customer-service";
import { ChangeEvent, useEffect, useState } from "react";
import { CustomerCreateRequest } from "../../service-api/dto/customer-create-request";
import CloseIcon from "@mui/icons-material/Close";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CustomerForm() {
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  const [formData, setFormData] = useState({
    firstName: "",
    feeAmount: "",
    enrollmentDate: dateValue,
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
      enrollmentDate: formData?.enrollmentDate?.toDate(),
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
        <Box>
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
        <Box marginTop={1}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Controlled picker"
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box marginTop={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
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
