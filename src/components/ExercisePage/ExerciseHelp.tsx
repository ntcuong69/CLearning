import { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Collapse, 
  CircularProgress,
  Alert,
  Divider,
  Chip
} from "@mui/material";
import { ExpandMore, ExpandLess, Lightbulb, Error as ErrorIcon, CheckCircle } from "@mui/icons-material";

interface ExerciseHelpProps {
  results?: any[];
  testcases?: any[];
  code?: string;
}

interface AIExplanation {
  result?: string;
}

export default function ExerciseHelp({ results = [], testcases = [], code = "" }: ExerciseHelpProps) {
  const [aiExplanation, setAiExplanation] = useState<AIExplanation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset AI explanation khi results thay đổi (nộp bài mới)
  useEffect(() => {
    setAiExplanation(null);
    setError(null);
    setLoading(false);
  }, [results]);

  // Mapping theo TCID giống TestcaseResults
  const errorIndices: number[] = [];
  const uniqueErrors: any[] = [];
  
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
          
          // Kiểm tra xem lỗi này đã có chưa
          const existingError = uniqueErrors.find(err => err.errorMessage === r.ActualOutput);
          if (!existingError) {
            uniqueErrors.push({
              testcaseIndex: publicIdx + 1,
              errorMessage: r.ActualOutput,
              input: testcases[i].Input,
              expectedOutput: testcases[i].ExpectedOutput,
              actualOutput: r.ActualOutput
            });
          }
        }
        publicIdx++;
      }
    }
  }

  const handleGetAIHelp = async () => {
    if (uniqueErrors.length === 0 || !code) return;

    setLoading(true);
    setError(null);
    
    try {
      const firstError = uniqueErrors[0]; // Lấy lỗi đầu tiên để phân tích
      
      const response = await fetch('/api/ai/explain-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          errorMessage: firstError.errorMessage
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success && data.explanation) {
        // Parse JSON response nếu AI trả về JSON
        let explanation: AIExplanation;
        if (typeof data.explanation === 'string') {
          try {
            explanation = JSON.parse(data.explanation);
          } catch {
            // Nếu không parse được JSON, coi như text thường
            explanation = {
              result: data.explanation
            };
          }
        } else {
          explanation = data.explanation;
        }
        
        // Kiểm tra xem response có đầy đủ không
        if (!explanation.result) {
          console.warn('AI response seems incomplete:', explanation);
        }
        
        setAiExplanation(explanation);
      } else {
        throw new Error('AI không thể phân tích lỗi hoặc LM Studio chưa được khởi động');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Có lỗi xảy ra khi phân tích với AI';
      setError(errorMessage);
      console.error('AI Help Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const hasErrors = errorIndices.length > 0;
  const allPassed = results && results.length && testcases && testcases.length && !hasErrors;

  return (
    <Card sx={{ mt: 2, backgroundColor: 'background.paper' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" display="flex" alignItems="center" gap={1}>
            <Lightbulb color="primary" />
            Trợ giúp
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {hasErrors ? (
          <Box>
            <Alert severity="error" sx={{ mb: 2 }}>
              <Typography variant="body2">
                Bạn gặp lỗi ở testcase số <strong>{errorIndices.join(", ")}</strong>
              </Typography>
            </Alert>

            <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
              {errorIndices.map((index) => (
                <Chip
                  key={index}
                  icon={<ErrorIcon />}
                  label={`Testcase ${index}`}
                  color="error"
                  variant="outlined"
                  size="small"
                />
              ))}
            </Box>

            <Box>
              <Typography variant="subtitle2" color="text.secondary" mb={1}>
                Chi tiết lỗi:
              </Typography>
              {uniqueErrors.map((error, index) => (
                <Box key={index} mb={2} p={2} border={1} borderColor="divider" borderRadius={1}>
                  <Typography variant="body2" fontWeight="bold" mb={1}>
                    {uniqueErrors.length > 1 ? `Lỗi ${index + 1}:` : 'Lỗi:'}
                  </Typography>
                  <Typography variant="body2" color="error" mb={1}>
                    <strong>Thông báo lỗi:</strong> {error.errorMessage}
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />

              {/* AI Help Section */}
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                  🤖 Hỗ trợ AI
                </Typography>
                
                {!aiExplanation && !loading && (
                  <Button
                    variant="contained"
                    onClick={handleGetAIHelp}
                    disabled={!code}
                    startIcon={<Lightbulb />}
                    sx={{ mb: 2 }}
                  >
                    Nhận gợi ý từ AI
                  </Button>
                )}

                {loading && (
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <CircularProgress size={20} />
                    <Box>
                      <Typography variant="body2">
                        AI đang phân tích lỗi...
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Sử dụng OpenRouter AI
                      </Typography>
                    </Box>
                  </Box>
                )}

                {error && (
                  <Alert severity="warning" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                )}

                {aiExplanation && (
                  <Card variant="outlined" sx={{ backgroundColor: 'primary.50' }}>
                    <CardContent>
                      {aiExplanation.result && (
                        <Box>
                          <Typography variant="subtitle2" fontWeight="bold" color="primary" mb={1}>
                            🤖 Phân tích từ AI:
                          </Typography>
                          <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                            {aiExplanation.result}
                          </Typography>
                        </Box>
                      )}

                      {/* Hiển thị cảnh báo nếu response không đầy đủ */}
                      {!aiExplanation.result && (
                        <Alert severity="info" sx={{ mt: 2 }}>
                          <Typography variant="body2">
                            ⚠️ Phản hồi AI có thể không đầy đủ. Hãy thử lại để có kết quả tốt hơn.
                          </Typography>
                        </Alert>
                      )}

                      {/* Thêm nút để thử lại nếu kết quả không tốt */}
                      <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" color="text.secondary">
                          💡 Nếu kết quả không chính xác, hãy thử lại
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={handleGetAIHelp}
                          disabled={loading}
                          startIcon={loading ? <CircularProgress size={16} /> : <Lightbulb />}
                        >
                          Thử lại
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                )}
              </Box>
            </Box>
          </Box>
        ) : (
          <Alert severity="success" icon={<CheckCircle />}>
            <Typography variant="body2">
              {allPassed 
                ? "Hiện tại bạn chưa gặp phải lỗi nào!"
                : "Hãy chạy code để kiểm tra kết quả hoặc nhận gợi ý từ AI nếu gặp khó khăn."
              }
            </Typography>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
} 