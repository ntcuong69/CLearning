import { useState } from "react";
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
  errorAnalysis?: string;
  suggestions?: string;
  explanation?: string;
}

export default function ExerciseHelp({ results = [], testcases = [], code = "" }: ExerciseHelpProps) {
  const [expanded, setExpanded] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<AIExplanation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mapping theo TCID giống TestcaseResults
  const errorIndices: number[] = [];
  const errorDetails: any[] = [];
  
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
          errorDetails.push({
            testcaseIndex: publicIdx + 1,
            errorMessage: r.ActualOutput,
            input: testcases[i].Input,
            expectedOutput: testcases[i].ExpectedOutput,
            actualOutput: r.ActualOutput
          });
        }
        publicIdx++;
      }
    }
  }

  const handleGetAIHelp = async () => {
    if (errorDetails.length === 0 || !code) return;

    setLoading(true);
    setError(null);
    
    try {
      const firstError = errorDetails[0]; // Lấy lỗi đầu tiên để phân tích
      
      const response = await fetch('/api/ai/explain-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          errorMessage: firstError.errorMessage,
          testcaseInput: firstError.input,
          expectedOutput: firstError.expectedOutput,
          actualOutput: firstError.actualOutput
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể kết nối với AI service');
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
              explanation: data.explanation
            };
          }
        } else {
          explanation = data.explanation;
        }
        
        setAiExplanation(explanation);
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
          {hasErrors && (
            <Button
              variant="outlined"
              size="small"
              onClick={() => setExpanded(!expanded)}
              endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
            >
              {expanded ? 'Thu gọn' : 'Mở rộng'}
            </Button>
          )}
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

            <Collapse in={expanded}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary" mb={1}>
                  Chi tiết lỗi:
                </Typography>
                {errorDetails.map((error, index) => (
                  <Box key={index} mb={2} p={2} border={1} borderColor="divider" borderRadius={1}>
                    <Typography variant="body2" fontWeight="bold" mb={1}>
                      Testcase {error.testcaseIndex}:
                    </Typography>
                    <Typography variant="body2" color="error" mb={1}>
                      <strong>Lỗi:</strong> {error.errorMessage}
                    </Typography>
                    {error.input && (
                      <Typography variant="body2" mb={0.5}>
                        <strong>Input:</strong> {error.input}
                      </Typography>
                    )}
                    {error.expectedOutput && (
                      <Typography variant="body2" mb={0.5}>
                        <strong>Output mong đợi:</strong> {error.expectedOutput}
                      </Typography>
                    )}
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
                      <Typography variant="body2">AI đang phân tích lỗi...</Typography>
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
                        {aiExplanation.errorAnalysis && (
                          <Box mb={2}>
                            <Typography variant="subtitle2" fontWeight="bold" color="primary" mb={1}>
                              📊 Phân tích lỗi:
                            </Typography>
                            <Typography variant="body2">
                              {aiExplanation.errorAnalysis}
                            </Typography>
                          </Box>
                        )}

                        {aiExplanation.suggestions && (
                          <Box mb={2}>
                            <Typography variant="subtitle2" fontWeight="bold" color="primary" mb={1}>
                              💡 Gợi ý sửa lỗi:
                            </Typography>
                            <Typography variant="body2">
                              {aiExplanation.suggestions}
                            </Typography>
                          </Box>
                        )}

                        {aiExplanation.explanation && (
                          <Box>
                            <Typography variant="subtitle2" fontWeight="bold" color="primary" mb={1}>
                              📝 Giải thích chi tiết:
                            </Typography>
                            <Typography variant="body2">
                              {aiExplanation.explanation}
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </Box>
              </Box>
            </Collapse>

            {!expanded && (
              <Button
                variant="text"
                onClick={handleGetAIHelp}
                disabled={!code || loading}
                startIcon={loading ? <CircularProgress size={16} /> : <Lightbulb />}
                sx={{ mt: 1 }}
              >
                {loading ? 'Đang phân tích...' : 'Nhận gợi ý từ AI'}
              </Button>
            )}
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