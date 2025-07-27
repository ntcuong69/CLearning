import { useState } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  TextField,
  Alert,
  CircularProgress,
  Divider
} from "@mui/material";
import { Lightbulb, Code, BugReport } from "@mui/icons-material";

export default function AIDemo() {
  const [code, setCode] = useState(`#include <stdio.h>

int main() {
    int a = 10;
    int b = 0;
    int result = a / b;  // Lỗi chia cho 0
    printf("Result: %d\\n", result);
    return 0;
}`);
  const [errorMessage, setErrorMessage] = useState("Floating point exception (core dumped)");
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTestAI = async () => {
    setLoading(true);
    setError(null);
    setExplanation(null);

    try {
      const response = await fetch('/api/ai/explain-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          errorMessage,
          testcaseInput: "5 0",
          expectedOutput: "Cannot divide by zero",
          actualOutput: errorMessage
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể kết nối với AI service');
      }

      const data = await response.json();
      
      if (data.success && data.explanation) {
        setExplanation(data.explanation);
      } else {
        throw new Error('AI không thể phân tích lỗi');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Có lỗi xảy ra khi phân tích với AI';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" display="flex" alignItems="center" gap={1} mb={3}>
          <Lightbulb color="primary" />
          Demo AI Giải thích lỗi
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box mb={3}>
          <Typography variant="h6" display="flex" alignItems="center" gap={1} mb={2}>
            <Code />
            Code mẫu:
          </Typography>
          <TextField
            multiline
            rows={8}
            fullWidth
            value={code}
            onChange={(e) => setCode(e.target.value)}
            variant="outlined"
            placeholder="Nhập code C của bạn..."
            sx={{ fontFamily: 'monospace' }}
          />
        </Box>

        <Box mb={3}>
          <Typography variant="h6" display="flex" alignItems="center" gap={1} mb={2}>
            <BugReport />
            Thông báo lỗi:
          </Typography>
          <TextField
            fullWidth
            value={errorMessage}
            onChange={(e) => setErrorMessage(e.target.value)}
            variant="outlined"
            placeholder="Nhập thông báo lỗi..."
          />
        </Box>

        <Button
          variant="contained"
          onClick={handleTestAI}
          disabled={loading || !code || !errorMessage}
          startIcon={loading ? <CircularProgress size={20} /> : <Lightbulb />}
          sx={{ mb: 3 }}
        >
          {loading ? 'AI đang phân tích...' : 'Test AI Giải thích lỗi'}
        </Button>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {explanation && (
          <Card variant="outlined" sx={{ backgroundColor: 'primary.50' }}>
            <CardContent>
              <Typography variant="h6" color="primary" mb={2}>
                🤖 Kết quả phân tích AI:
              </Typography>

              {explanation.errorAnalysis && (
                <Box mb={2}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" mb={1}>
                    📊 Phân tích lỗi:
                  </Typography>
                  <Typography variant="body2">
                    {explanation.errorAnalysis}
                  </Typography>
                </Box>
              )}

              {explanation.suggestions && (
                <Box mb={2}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" mb={1}>
                    💡 Gợi ý sửa lỗi:
                  </Typography>
                  <Typography variant="body2">
                    {explanation.suggestions}
                  </Typography>
                </Box>
              )}

              {explanation.explanation && (
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" mb={1}>
                    📝 Giải thích chi tiết:
                  </Typography>
                  <Typography variant="body2">
                    {explanation.explanation}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        )}

        <Alert severity="info" sx={{ mt: 3 }}>
          <Typography variant="body2">
            <strong>Lưu ý:</strong> Để sử dụng tính năng AI, bạn cần cấu hình API key trong file .env.local. 
            Xem file AI_SETUP.md để biết thêm chi tiết.
          </Typography>
        </Alert>
      </CardContent>
    </Card>
  );
} 