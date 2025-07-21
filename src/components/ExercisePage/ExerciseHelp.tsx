import React from "react";
import { Box, Typography } from "@mui/material";

interface ExerciseHelpProps {
  results?: any[];
  testcases?: any[];
}

export default function ExerciseHelp({ results = [], testcases = [] }: ExerciseHelpProps) {
  // Mapping theo TCID giống TestcaseResults
  const errorIndices: number[] = [];
  if (results && testcases && results.length && testcases.length) {
    let publicIdx = 0;
    for (let i = 0; i < testcases.length; ++i) {
      if (!testcases[i].isHidden) {
        const r = results.find((res: any) => res.TCID === testcases[i].TCID);
        if (
          r &&
          (
            (typeof r.ActualOutput === "string" && r.ActualOutput.trim().toLowerCase().startsWith("error")) ||
            (r.Result && r.Result === "Error")
          )
        ) {
          errorIndices.push(publicIdx + 1);
        }
        publicIdx++;
      }
    }
  }

  return (
    <Box>
      <Typography variant="h6">Trợ giúp</Typography>
      {errorIndices.length > 0 ? (
        <Typography color="error" sx={{ mt: 2 }}>
          Bạn gặp lỗi ở testcase số <b>{errorIndices.join(", ")}</b>.<br/>
          Hãy kiểm tra lại code của bạn!
        </Typography>
      ) : (
        <Typography sx={{ mt: 2 }}>
          {results && results.length && testcases && testcases.length
            ? "Bạn đã vượt qua tất cả các testcase công khai!"
            : "Hãy hỏi AI hoặc xem hướng dẫn để giải quyết lỗi."}
        </Typography>
      )}
    </Box>
  );
} 