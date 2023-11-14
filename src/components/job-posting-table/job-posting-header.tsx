import { TableRow, TableCell, TableHead } from "@mui/material";
import styled from "styled-components";

// https://react.dev/learn/thinking-in-react

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#4caf50",
  color: "white!important",
  fontWeight: "550!important",
  "& .MuiTableCell-root": {
    // or "& .MuiTableCell-root" or "& .MuiTableCell-body" ...
    fontWeight: "550",
  },
});

function JobPostingHeader() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>Job Posting Id</StyledTableCell>
        <StyledTableCell align="right">Job Description</StyledTableCell>
        <StyledTableCell align="right">Job Requirements</StyledTableCell>
        <StyledTableCell align="right">Poster Last Name</StyledTableCell>
        <StyledTableCell align="right">Posting Date</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

export default JobPostingHeader;
