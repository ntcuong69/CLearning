import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

interface Submission {
  SID: number;
  Code: string;
  CreatedAt: string;
  Result: string;
}

interface TestcaseResult {
  TCRID: number;
  ActualOutput: string;
  Result: string;
  testcase: {
    Input: string;
    ExpectedOutput: string;
  };
}

interface SubmissionsProps {
  eid: string;
  onViewHistory: (submission: Submission, testcases: TestcaseResult[]) => void;
}

export default function Submissions({ eid, onViewHistory }: SubmissionsProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`/api/submissions/by-exercise/${eid}`);
        const data = await response.json();
        setSubmissions(data.submissions || []);
      } catch (error) {
        console.error("Failed to fetch submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [eid]);

  const handleViewHistory = async (submission: Submission) => {
    try {
      const response = await fetch(`/api/testcaseresult/${submission.SID}`);
      const data = await response.json();
      onViewHistory(submission, data.testcaseresults || []);
    } catch (error) {
      console.error("Failed to fetch testcase results:", error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (submissions.length === 0) {
    return <Typography>Không có submissions nào.</Typography>;
  }

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Ngày nộp</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.SID}>
              <TableCell>{submission.Result}</TableCell>
              <TableCell>{new Date(submission.CreatedAt).toLocaleString()}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleViewHistory(submission)}
                >
                  Xem lại
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}