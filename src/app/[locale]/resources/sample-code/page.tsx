"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
  Fade,
  Slide,
  Grow,
  TextField,
  InputAdornment,
  Snackbar,
  Alert
} from "@mui/material";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Header";
import CodeIcon from "@mui/icons-material/Code";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Sample code data structure
interface CodeSample {
  id: string;
  title: string;
  description: string;
  language: "c" | "cpp" | "python" | "javascript";
  code: string;
}

// Sample data
const sampleCodes: CodeSample[] = [
  {
    id: "1",
    title: "Hello World in C",
    description: "Chương trình C cơ bản để in ra màn hình dòng chữ 'Hello World'",
    language: "c",
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  },
  {
    id: "2",
    title: "Tính tổng hai số",
    description: "Chương trình nhập hai số từ bàn phím và tính tổng của chúng",
    language: "c",
    code: `#include <stdio.h>

int main() {
    int a, b, sum;
    
    printf("Nhập số thứ nhất: ");
    scanf("%d", &a);
    
    printf("Nhập số thứ hai: ");
    scanf("%d", &b);
    
    sum = a + b;
    printf("Tổng của %d và %d là: %d\\n", a, b, sum);
    
    return 0;
}`,
  },
  {
    id: "3",
    title: "Kiểm tra số chẵn lẻ",
    description: "Chương trình kiểm tra một số là chẵn hay lẻ",
    language: "c",
    code: `#include <stdio.h>

int main() {
    int number;
    
    printf("Nhập một số nguyên: ");
    scanf("%d", &number);
    
    if (number % 2 == 0) {
        printf("%d là số chẵn\\n", number);
    } else {
        printf("%d là số lẻ\\n", number);
    }
    
    return 0;
}`,
  },
  {
    id: "4",
    title: "Tính giai thừa",
    description: "Chương trình tính giai thừa của một số sử dụng vòng lặp for",
    language: "c",
    code: `#include <stdio.h>

int main() {
    int n, i;
    unsigned long long factorial = 1;
    
    printf("Nhập một số nguyên dương: ");
    scanf("%d", &n);
    
    if (n < 0) {
        printf("Lỗi! Giai thừa không tồn tại cho số âm.\\n");
    } else {
        for (i = 1; i <= n; ++i) {
            factorial *= i;
        }
        printf("Giai thừa của %d = %llu\\n", n, factorial);
    }
    
    return 0;
}`,
  },
  {
    id: "5",
    title: "Sắp xếp mảng bằng Bubble Sort",
    description: "Thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự tăng dần",
    language: "c",
    code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Mảng ban đầu: ");
    printArray(arr, n);
    
    bubbleSort(arr, n);
    
    printf("Mảng sau khi sắp xếp: ");
    printArray(arr, n);
    
    return 0;
}`,
  },
  {
    id: "6",
    title: "Tìm số Fibonacci",
    description: "Chương trình tìm số Fibonacci thứ n sử dụng đệ quy",
    language: "c",
    code: `#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    int n, i;
    
    printf("Nhập số lượng số Fibonacci: ");
    scanf("%d", &n);
    
    printf("Dãy Fibonacci: ");
    for (i = 0; i < n; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    
    return 0;
}`,
  },
];



const SampleCodePage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCode, setSelectedCode] = useState<CodeSample | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Filter codes based on search
  const filteredCodes = sampleCodes.filter((code) => {
    const matchesSearch = code.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         code.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px", bgcolor: "background.default" }}>
      <NavBar />
      <Sidebar />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ml: { md: "290px" } }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Header Section */}
          <Fade in timeout={800}>
            <Box sx={{ mb: 6, textAlign: "center" }}>
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                sx={{ 
                  mb: 2,
                  background: "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2rem", md: "3rem" }
                }}
              >
                Code Mẫu
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 700, 
                  mx: "auto",
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", md: "1.25rem" }
                }}
              >
                Thư viện code mẫu chất lượng cao với các ví dụ thực tế từ cơ bản đến nâng cao
              </Typography>
            </Box>
          </Fade>

          {/* Search Section */}
          <Slide direction="up" in timeout={600}>
            <Card sx={{ 
              mb: 4, 
              p: 3, 
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
            }}>
              <TextField
                fullWidth
                placeholder="Tìm kiếm code mẫu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  }
                }}
              />
            </Card>
          </Slide>

                    {/* Code Samples Grid */}
          <Grow in timeout={900}>
            <Box sx={{ 
              display: "grid", 
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
              gap: 3 
            }}>
              {filteredCodes.map((code, index) => (
                <Grow in timeout={1000 + index * 100} key={code.id}>
                  <Card sx={{ 
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
                    }
                  }}
                  onClick={() => setSelectedCode(code)}
                  >
                                         {/* Header */}
                     <Box sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}>
                       <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.3, mb: 2 }}>
                         {code.title}
                       </Typography>
                       
                       <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                         {code.description}
                       </Typography>
                     </Box>

                    {/* Code Preview */}
                    <Box sx={{ p: 2, bgcolor: "grey.50" }}>
                      <Box sx={{ 
                        bgcolor: "grey.900", 
                        borderRadius: 2, 
                        p: 2,
                        maxHeight: 120,
                        overflow: "hidden",
                        position: "relative"
                      }}>
                        <SyntaxHighlighter
                          language={code.language}
                          style={vscDarkPlus}
                          customStyle={{
                            margin: 0,
                            fontSize: "0.8rem",
                            background: "transparent",
                          }}
                          showLineNumbers={false}
                        >
                          {code.code.split('\n').slice(0, 6).join('\n')}
                        </SyntaxHighlighter>
                        {code.code.split('\n').length > 6 && (
                          <Box sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 20,
                            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                            pointerEvents: "none"
                          }} />
                        )}
                      </Box>
                    </Box>

                    
                  </Card>
                </Grow>
              ))}
            </Box>
          </Grow>

          {/* Empty State */}
          {filteredCodes.length === 0 && (
            <Slide direction="up" in timeout={500}>
              <Box sx={{ textAlign: "center", py: 8 }}>
                <CodeIcon sx={{ fontSize: 80, color: "text.secondary", mb: 3, opacity: 0.5 }} />
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                  Không tìm thấy code mẫu nào
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
                </Typography>
              </Box>
            </Slide>
          )}
        </Container>
      </Box>

      {/* Code Detail Dialog */}
      <Dialog
        open={!!selectedCode}
        onClose={() => setSelectedCode(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: "90vh"
          }
        }}
      >
        {selectedCode && (
          <>
                         <DialogTitle sx={{ pb: 1 }}>
               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                 <Box sx={{ flex: 1 }}>
                   <Typography variant="h5" fontWeight="bold" gutterBottom>
                     {selectedCode.title}
                   </Typography>
                   <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                     {selectedCode.description}
                   </Typography>
                 </Box>
                 <IconButton onClick={() => setSelectedCode(null)}>
                   <Box component="span" sx={{ fontSize: 24 }}>×</Box>
                 </IconButton>
               </Box>
             </DialogTitle>
            
            <DialogContent sx={{ pt: 2 }}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Code
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<ContentCopyIcon />}
                    onClick={() => handleCopyCode(selectedCode.code)}
                    size="small"
                  >
                    Sao chép
                  </Button>
                </Box>
                <Box sx={{ 
                  bgcolor: "grey.900", 
                  borderRadius: 2, 
                  overflow: "hidden",
                  border: 1,
                  borderColor: "grey.300"
                }}>
                                     <SyntaxHighlighter
                     language={selectedCode.language}
                     style={vscDarkPlus}
                     customStyle={{
                       margin: 0,
                       fontSize: "0.9rem",
                       background: "transparent",
                     }}
                     showLineNumbers={true}
                   >
                     {selectedCode.code}
                   </SyntaxHighlighter>
                </Box>
              </Box>

              
            </DialogContent>
          </>
                 )}
       </Dialog>

       {/* Snackbar for copy success */}
       <Snackbar
         open={snackbarOpen}
         autoHideDuration={3000}
         onClose={handleCloseSnackbar}
         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
       >
         <Alert 
           onClose={handleCloseSnackbar} 
           severity="success" 
           sx={{ width: '100%' }}
         >
           Đã sao chép code thành công!
         </Alert>
       </Snackbar>
     </Box>
   );
 };

export default SampleCodePage;
