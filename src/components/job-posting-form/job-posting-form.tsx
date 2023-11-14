import { Box, Button, IconButton, Snackbar, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { JobPostingCreateRequest } from "../../service-api/dto/job-posting-create-request";
import { jobPostingCreate } from "../../service-api/job-posting-service";

function JobPostingForm() {
  const [formData, setFormData] = useState({
    jobDescription: "",
    jobRequirements: "",
    posterLastName: "",
    contactPhone: "",
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
    const customerPostRequest: JobPostingCreateRequest = {
      jobDescription: formData.jobDescription,
      jobRequirements: formData?.jobRequirements,
      posterLastName: formData?.posterLastName,
      contactPhone: formData.contactPhone,
    };

    const createJobPosting = async () => {
      try {
        const response = await jobPostingCreate(customerPostRequest);
        if (response.ok) {
          setOpen(true);
        }
      } catch (e) {
        console.log("error found", e);
      }
    };

    createJobPosting();
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
        <Box marginBottom={3}>
          <TextField
            label="Job Description"
            variant="outlined"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={3}>
          <TextField
            label="Job Requirements"
            variant="outlined"
            name="jobRequirements"
            value={formData.jobRequirements}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={3}>
          <TextField
            label="Poster Last Name"
            variant="outlined"
            name="posterLastName"
            value={formData.posterLastName}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={3}>
          <TextField
            label="Contact Phone"
            variant="outlined"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
          />
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

export default JobPostingForm;
