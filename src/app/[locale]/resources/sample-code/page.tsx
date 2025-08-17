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
  {
    id: "7",
    title: "Tìm ước chung lớn nhất (GCD)",
    description: "Chương trình tìm ước chung lớn nhất của hai số sử dụng thuật toán Euclidean",
    language: "c",
    code: `#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int num1, num2;
    
    printf("Nhập số thứ nhất: ");
    scanf("%d", &num1);
    
    printf("Nhập số thứ hai: ");
    scanf("%d", &num2);
    
    int result = gcd(num1, num2);
    printf("Ước chung lớn nhất của %d và %d là: %d\\n", num1, num2, result);
    
    return 0;
}`,
  },
  {
    id: "8",
    title: "Kiểm tra số nguyên tố",
    description: "Chương trình kiểm tra một số có phải là số nguyên tố hay không",
    language: "c",
    code: `#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}

int main() {
    int number;
    
    printf("Nhập một số nguyên: ");
    scanf("%d", &number);
    
    if (isPrime(number)) {
        printf("%d là số nguyên tố\\n", number);
    } else {
        printf("%d không phải là số nguyên tố\\n", number);
    }
    
    return 0;
}`,
  },
  {
    id: "9",
    title: "Đảo ngược chuỗi",
    description: "Chương trình đảo ngược một chuỗi ký tự",
    language: "c",
    code: `#include <stdio.h>
#include <string.h>

void reverseString(char str[]) {
    int length = strlen(str);
    int start = 0;
    int end = length - 1;
    
    while (start < end) {
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

int main() {
    char str[100];
    
    printf("Nhập một chuỗi: ");
    scanf("%s", str);
    
    printf("Chuỗi ban đầu: %s\\n", str);
    
    reverseString(str);
    
    printf("Chuỗi sau khi đảo ngược: %s\\n", str);
    
    return 0;
}`,
  },
  {
    id: "10",
    title: "Tìm kiếm nhị phân",
    description: "Thuật toán tìm kiếm nhị phân trong mảng đã sắp xếp",
    language: "c",
    code: `#include <stdio.h>

int binarySearch(int arr[], int left, int right, int x) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == x)
            return mid;
        
        if (arr[mid] < x)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = {2, 3, 4, 10, 40, 50, 60, 70, 80, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 10;
    
    printf("Mảng: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    int result = binarySearch(arr, 0, n - 1, x);
    
    if (result == -1) {
        printf("Không tìm thấy %d trong mảng\\n", x);
    } else {
        printf("%d được tìm thấy tại vị trí %d\\n", x, result);
    }
    
    return 0;
}`,
  },
  {
    id: "11",
    title: "Cấu trúc Student",
    description: "Ví dụ về sử dụng cấu trúc (struct) để quản lý thông tin sinh viên",
    language: "c",
    code: `#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int roll_no;
    float marks;
};

void inputStudent(struct Student *s) {
    printf("Nhập tên sinh viên: ");
    scanf(" %[^\\n]s", s->name);
    
    printf("Nhập mã số sinh viên: ");
    scanf("%d", &s->roll_no);
    
    printf("Nhập điểm: ");
    scanf("%f", &s->marks);
}

void displayStudent(struct Student s) {
    printf("\\nThông tin sinh viên:\\n");
    printf("Tên: %s\\n", s.name);
    printf("Mã số: %d\\n", s.roll_no);
    printf("Điểm: %.2f\\n", s.marks);
}

int main() {
    struct Student student;
    
    inputStudent(&student);
    displayStudent(student);
    
    return 0;
}`,
  },
  {
    id: "12",
    title: "Con trỏ và mảng",
    description: "Ví dụ về sử dụng con trỏ để truy cập và thao tác với mảng",
    language: "c",
    code: `#include <stdio.h>

void printArray(int *arr, int size) {
    printf("Mảng: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", *(arr + i));
    }
    printf("\\n");
}

void modifyArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        *(arr + i) *= 2;  // Nhân mỗi phần tử với 2
    }
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printf("Trước khi sửa đổi:\\n");
    printArray(numbers, size);
    
    modifyArray(numbers, size);
    
    printf("Sau khi sửa đổi:\\n");
    printArray(numbers, size);
    
    return 0;
}`,
  },
  {
    id: "13",
    title: "Đọc ghi file",
    description: "Chương trình đọc và ghi dữ liệu vào file văn bản",
    language: "c",
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *file;
    char filename[] = "data.txt";
    char content[100];
    
    // Ghi vào file
    file = fopen(filename, "w");
    if (file == NULL) {
        printf("Không thể mở file để ghi\\n");
        return 1;
    }
    
    fprintf(file, "Hello World!\\n");
    fprintf(file, "Đây là dòng thứ hai\\n");
    fprintf(file, "Dòng cuối cùng\\n");
    
    fclose(file);
    printf("Đã ghi dữ liệu vào file %s\\n", filename);
    
    // Đọc từ file
    file = fopen(filename, "r");
    if (file == NULL) {
        printf("Không thể mở file để đọc\\n");
        return 1;
    }
    
    printf("\\nNội dung file:\\n");
    while (fgets(content, sizeof(content), file) != NULL) {
        printf("%s", content);
    }
    
    fclose(file);
    return 0;
}`,
  },
  {
    id: "14",
    title: "Sắp xếp nhanh (Quick Sort)",
    description: "Thuật toán sắp xếp nhanh sử dụng đệ quy",
    language: "c",
    code: `#include <stdio.h>

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Mảng ban đầu: ");
    printArray(arr, n);
    
    quickSort(arr, 0, n - 1);
    
    printf("Mảng sau khi sắp xếp: ");
    printArray(arr, n);
    
    return 0;
}`,
  },
  {
    id: "15",
    title: "Danh sách liên kết đơn",
    description: "Triển khai danh sách liên kết đơn với các thao tác cơ bản",
    language: "c",
    code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    
    struct Node* current = *head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
}

void printList(struct Node* head) {
    struct Node* current = head;
    printf("Danh sách: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node* head = NULL;
    
    insertAtEnd(&head, 10);
    insertAtEnd(&head, 20);
    insertAtEnd(&head, 30);
    insertAtEnd(&head, 40);
    
    printList(head);
    
    return 0;
}`,
  },
  {
    id: "16",
    title: "Tính tổng dãy số",
    description: "Chương trình tính tổng của dãy số từ 1 đến n",
    language: "c",
    code: `#include <stdio.h>

int sumSeries(int n) {
    if (n <= 0) return 0;
    return n + sumSeries(n - 1);
}

int main() {
    int n;
    
    printf("Nhập số nguyên dương n: ");
    scanf("%d", &n);
    
    if (n <= 0) {
        printf("Vui lòng nhập số nguyên dương\\n");
        return 1;
    }
    
    int result = sumSeries(n);
    printf("Tổng dãy số từ 1 đến %d là: %d\\n", n, result);
    
    // Công thức toán học: n*(n+1)/2
    int formula = n * (n + 1) / 2;
    printf("Kiểm tra bằng công thức: %d\\n", formula);
    
    return 0;
}`,
  },
  {
    id: "17",
    title: "Chuyển đổi hệ số",
    description: "Chương trình chuyển đổi số từ hệ thập phân sang hệ nhị phân",
    language: "c",
    code: `#include <stdio.h>

void decimalToBinary(int decimal) {
    if (decimal == 0) {
        printf("0");
        return;
    }
    
    int binary[32];
    int i = 0;
    
    while (decimal > 0) {
        binary[i] = decimal % 2;
        decimal = decimal / 2;
        i++;
    }
    
    printf("Số nhị phân: ");
    for (int j = i - 1; j >= 0; j--) {
        printf("%d", binary[j]);
    }
    printf("\\n");
}

int main() {
    int decimal;
    
    printf("Nhập số thập phân: ");
    scanf("%d", &decimal);
    
    if (decimal < 0) {
        printf("Vui lòng nhập số không âm\\n");
        return 1;
    }
    
    decimalToBinary(decimal);
    
    return 0;
}`,
  },
  {
    id: "18",
    title: "Ma trận và phép nhân",
    description: "Chương trình nhân hai ma trận",
    language: "c",
    code: `#include <stdio.h>

#define MAX_SIZE 10

void inputMatrix(int matrix[][MAX_SIZE], int rows, int cols, char name) {
    printf("Nhập ma trận %c:\\n", name);
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%c[%d][%d] = ", name, i, j);
            scanf("%d", &matrix[i][j]);
        }
    }
}

void printMatrix(int matrix[][MAX_SIZE], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d\\t", matrix[i][j]);
        }
        printf("\\n");
    }
}

void multiplyMatrices(int a[][MAX_SIZE], int b[][MAX_SIZE], 
                     int result[][MAX_SIZE], int rowsA, int colsA, int colsB) {
    for (int i = 0; i < rowsA; i++) {
        for (int j = 0; j < colsB; j++) {
            result[i][j] = 0;
            for (int k = 0; k < colsA; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

int main() {
    int a[MAX_SIZE][MAX_SIZE], b[MAX_SIZE][MAX_SIZE], result[MAX_SIZE][MAX_SIZE];
    int rowsA, colsA, rowsB, colsB;
    
    printf("Nhập số hàng ma trận A: ");
    scanf("%d", &rowsA);
    printf("Nhập số cột ma trận A: ");
    scanf("%d", &colsA);
    
    printf("Nhập số hàng ma trận B: ");
    scanf("%d", &rowsB);
    printf("Nhập số cột ma trận B: ");
    scanf("%d", &colsB);
    
    if (colsA != rowsB) {
        printf("Không thể nhân hai ma trận này\\n");
        return 1;
    }
    
    inputMatrix(a, rowsA, colsA, 'A');
    inputMatrix(b, rowsB, colsB, 'B');
    
    printf("\\nMa trận A:\\n");
    printMatrix(a, rowsA, colsA);
    
    printf("\\nMa trận B:\\n");
    printMatrix(b, rowsB, colsB);
    
    multiplyMatrices(a, b, result, rowsA, colsA, colsB);
    
    printf("\\nKết quả nhân ma trận:\\n");
    printMatrix(result, rowsA, colsB);
    
    return 0;
}`,
  },
  {
    id: "19",
    title: "Xử lý chuỗi nâng cao",
    description: "Các hàm xử lý chuỗi tự viết",
    language: "c",
    code: `#include <stdio.h>
#include <string.h>

int stringLength(const char* str) {
    int length = 0;
    while (str[length] != '\\0') {
        length++;
    }
    return length;
}

void stringCopy(char* dest, const char* src) {
    int i = 0;
    while (src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\\0';
}

int stringCompare(const char* str1, const char* str2) {
    int i = 0;
    while (str1[i] != '\\0' && str2[i] != '\\0') {
        if (str1[i] != str2[i]) {
            return str1[i] - str2[i];
        }
        i++;
    }
    return str1[i] - str2[i];
}

void stringConcatenate(char* dest, const char* src) {
    int destLen = stringLength(dest);
    int i = 0;
    while (src[i] != '\\0') {
        dest[destLen + i] = src[i];
        i++;
    }
    dest[destLen + i] = '\\0';
}

int main() {
    char str1[100] = "Hello";
    char str2[100] = "World";
    char str3[100];
    
    printf("Chuỗi 1: %s\\n", str1);
    printf("Chuỗi 2: %s\\n", str2);
    printf("Độ dài chuỗi 1: %d\\n", stringLength(str1));
    
    stringCopy(str3, str1);
    printf("Sao chép chuỗi 1 vào chuỗi 3: %s\\n", str3);
    
    stringConcatenate(str1, " ");
    stringConcatenate(str1, str2);
    printf("Nối chuỗi: %s\\n", str1);
    
    int result = stringCompare("Hello", "Hello");
    printf("So sánh 'Hello' với 'Hello': %d\\n", result);
    
    return 0;
}`,
  },
  {
    id: "20",
    title: "Quản lý bộ nhớ động",
    description: "Ví dụ về cấp phát và giải phóng bộ nhớ động",
    language: "c",
    code: `#include <stdio.h>
#include <stdlib.h>

int* createDynamicArray(int size) {
    int* arr = (int*)malloc(size * sizeof(int));
    if (arr == NULL) {
        printf("Không thể cấp phát bộ nhớ\\n");
        exit(1);
    }
    return arr;
}

void inputArray(int* arr, int size) {
    printf("Nhập %d phần tử:\\n", size);
    for (int i = 0; i < size; i++) {
        printf("Phần tử %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
}

void printArray(int* arr, int size) {
    printf("Mảng: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int* resizeArray(int* arr, int oldSize, int newSize) {
    int* newArr = (int*)realloc(arr, newSize * sizeof(int));
    if (newArr == NULL) {
        printf("Không thể thay đổi kích thước mảng\\n");
        return arr;
    }
    return newArr;
}

int main() {
    int size;
    printf("Nhập kích thước mảng: ");
    scanf("%d", &size);
    
    // Cấp phát bộ nhớ
    int* dynamicArray = createDynamicArray(size);
    
    // Nhập dữ liệu
    inputArray(dynamicArray, size);
    printArray(dynamicArray, size);
    
    // Thay đổi kích thước mảng
    int newSize = size + 2;
    dynamicArray = resizeArray(dynamicArray, size, newSize);
    
    printf("\\nNhập thêm 2 phần tử:\\n");
    for (int i = size; i < newSize; i++) {
        printf("Phần tử %d: ", i + 1);
        scanf("%d", &dynamicArray[i]);
    }
    
    printArray(dynamicArray, newSize);
    
    // Giải phóng bộ nhớ
    free(dynamicArray);
    printf("\\nĐã giải phóng bộ nhớ\\n");
    
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
