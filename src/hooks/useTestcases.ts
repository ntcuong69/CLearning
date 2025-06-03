import { useEffect, useState } from "react";
import axios from "axios";

interface Testcase {
  TCID: number;
  Input: string;
  ExpectedOutput: string;
  isHidden: boolean;
}

export function useTestcases(eid: string) {
  const [testcases, setTestcases] = useState<Testcase[] | null>(null);

  useEffect(() => {
    axios
      .get(`/api/testcases/by-exercise/${eid}`)
      .then((res) => setTestcases(res.data.testcases))
      .catch(() => setTestcases([]));
  }, [eid]);

  return { testcases };
}