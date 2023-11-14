import { TableRow, TableCell } from "@mui/material";
import { formatDate } from "../../service/format-date";
import { JobPostingBodyView } from "../../types/job-posting-body-view";

// https://react.dev/learn/thinking-in-react

type JobPostingBodyProps = {
  jobPostingView: JobPostingBodyView;
};

function JobPostingRow({ jobPostingView }: JobPostingBodyProps) {
  return (
    <TableRow
      key={jobPostingView.jobPostingId}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{jobPostingView?.jobPostingId}</TableCell>
      <TableCell align="left">{jobPostingView?.jobDescription}</TableCell>
      <TableCell align="right">{jobPostingView?.jobRequirements}</TableCell>
      <TableCell align="right">{jobPostingView?.posterLastName}</TableCell>
      <TableCell align="right">{jobPostingView?.contactInfo}</TableCell>
    </TableRow>
  );
}

export default JobPostingRow;
