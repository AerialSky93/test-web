import { TableRow, TableCell } from "@mui/material";
import { CustomerBodyView } from "../../types/customer-body-view";
import styled from "styled-components";
import { formatDate } from "../../service/format-date";

// https://react.dev/learn/thinking-in-react

const Basic = styled(TableCell)({
  backgroundColor: "aliceblue",
  color: "darkslategray",
  padding: "2rem",
  textAlign: "center",
});

type CustomerBodyProps = {
  customerBodyView: CustomerBodyView;
};

function CustomerRow({ customerBodyView }: CustomerBodyProps) {
  return (
    <TableRow
      key={customerBodyView.customerId}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{customerBodyView?.customerId}</TableCell>
      <TableCell align="right">{customerBodyView?.firstName}</TableCell>
      <TableCell align="right">{customerBodyView?.feeAmount}</TableCell>
      <TableCell align="right">{customerBodyView?.activeFlag}</TableCell>
      <TableCell align="right">
        {formatDate(customerBodyView?.enrollmentDate)}
      </TableCell>
    </TableRow>
  );
}

export default CustomerRow;
