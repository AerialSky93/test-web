import { TableRow, TableCell, TableHead } from "@mui/material";
import styled from "styled-components";

// https://react.dev/learn/thinking-in-react

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#B3E5FC",
  fontWeight: "700!important",
  "& .MuiTableCell-root": {
    // or "& .MuiTableCell-root" or "& .MuiTableCell-body" ...
    fontWeight: "900",
  },
});

function CustomerHeader() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>CustomerId</StyledTableCell>
        <StyledTableCell align="right">Name</StyledTableCell>
        <StyledTableCell align="right">Fee Amount</StyledTableCell>
        <StyledTableCell align="right">Active Flag</StyledTableCell>
        <StyledTableCell align="right">Enrollment Date</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

export default CustomerHeader;
