import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const PointerFunctions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này khám phá cách sử dụng con trỏ với hàm trong C. Con trỏ cho phép hàm trả về nhiều giá trị, truyền tham chiếu hiệu quả, và tạo ra các hàm callback mạnh mẽ.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Truyền con trỏ vào hàm</h2>
      <p className="mb-4">
        Khi truyền con trỏ vào hàm, bạn đang truyền địa chỉ của biến. Điều này cho phép hàm thay đổi giá trị của biến gốc thay vì chỉ làm việc với bản sao.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Lợi ích:</b> Truyền con trỏ giúp tiết kiệm bộ nhớ (không cần sao chép dữ liệu) và cho phép hàm thay đổi giá trị của biến gốc.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp truyền con trỏ</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Khai báo hàm nhận con trỏ
void functionName(dataType *parameter);

// Gọi hàm với địa chỉ
functionName(&variable);

// Ví dụ cụ thể
void modifyValue(int *ptr) {
    *ptr = 100;  // Thay đổi giá trị tại địa chỉ
}

int main() {
    int number = 42;
    modifyValue(&number);  // Truyền địa chỉ
    printf("Sau khi gọi hàm: %d\\n", number);
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ thực tế: Hoán đổi giá trị</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// Hàm hoán đổi sử dụng con trỏ
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    printf("Trong hàm swap: *a = %d, *b = %d\\n", *a, *b);
}

// Hàm hoán đổi không sử dụng con trỏ (không hiệu quả)
void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    printf("Trong hàm swapByValue: a = %d, b = %d\\n", a, b);
}

int main() {
    int x = 10, y = 20;
    
    printf("Trước khi gọi hàm:\\n");
    printf("x = %d, y = %d\\n", x, y);
    
    // Gọi hàm với con trỏ
    swap(&x, &y);
    printf("Sau khi gọi swap: x = %d, y = %d\\n", x, y);
    
    // Reset giá trị
    x = 10; y = 20;
    
    // Gọi hàm không có con trỏ
    swapByValue(x, y);
    printf("Sau khi gọi swapByValue: x = %d, y = %d\\n", x, y);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc pointer_swap.c -o pointer_swap<br/>
          <span className="text-blue-400">$</span> ./pointer_swap<br/>
          <span className="text-white">Trước khi gọi hàm:</span><br/>
          <span className="text-white">x = 10, y = 20</span><br/>
          <span className="text-white">Trong hàm swap: *a = 20, *b = 10</span><br/>
          <span className="text-white">Sau khi gọi swap: x = 20, y = 10</span><br/>
          <span className="text-white">Trong hàm swapByValue: a = 20, b = 10</span><br/>
          <span className="text-white">Sau khi gọi swapByValue: x = 10, y = 20</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Hàm trả về nhiều giá trị</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Sử dụng con trỏ để trả về nhiều giá trị</h3>
      <p className="mb-4">
        Trong C, hàm chỉ có thể trả về một giá trị. Tuy nhiên, sử dụng con trỏ, bạn có thể "trả về" nhiều giá trị thông qua tham số.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// Hàm trả về tổng và tích của hai số
void calculate(int a, int b, int *sum, int *product) {
    *sum = a + b;
    *product = a * b;
}

// Hàm tìm min, max trong mảng
void findMinMax(int arr[], int size, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    
    for (int i = 1; i < size; i++) {
        if (arr[i] < *min) {
            *min = arr[i];
        }
        if (arr[i] > *max) {
            *max = arr[i];
        }
    }
}

// Hàm chia số và trả về thương và dư
int divide(int dividend, int divisor, int *quotient, int *remainder) {
    if (divisor == 0) {
        return 0;  // Lỗi: chia cho 0
    }
    
    *quotient = dividend / divisor;
    *remainder = dividend % divisor;
    return 1;  // Thành công
}

int main() {
    int x = 10, y = 3;
    int sum, product;
    
    // Tính tổng và tích
    calculate(x, y, &sum, &product);
    printf("%d + %d = %d\\n", x, y, sum);
    printf("%d * %d = %d\\n", x, y, product);
    
    // Tìm min, max trong mảng
    int arr[] = {5, 2, 8, 1, 9, 3};
    int min, max;
    findMinMax(arr, 6, &min, &max);
    printf("Min: %d, Max: %d\\n", min, max);
    
    // Phép chia
    int quotient, remainder;
    if (divide(17, 5, &quotient, &remainder)) {
        printf("17 / 5 = %d dư %d\\n", quotient, remainder);
    }
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc multiple_values.c -o multiple_values<br/>
          <span className="text-blue-400">$</span> ./multiple_values<br/>
          <span className="text-white">10 + 3 = 13</span><br/>
          <span className="text-white">10 * 3 = 30</span><br/>
          <span className="text-white">Min: 1, Max: 9</span><br/>
          <span className="text-white">17 / 5 = 3 dư 2</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Con trỏ hàm (Function Pointers)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khái niệm con trỏ hàm</h3>
      <p className="mb-4">
        Con trỏ hàm là một con trỏ trỏ đến một hàm. Nó cho phép bạn truyền hàm như một tham số và tạo ra các hàm callback.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// Khai báo con trỏ hàm
// returnType (*pointerName)(parameterTypes);
int (*operation)(int, int);

// Các hàm toán học
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

int divide(int a, int b) {
    if (b != 0) {
        return a / b;
    }
    return 0;
}

int main() {
    int x = 10, y = 3;
    
    // Gán con trỏ hàm
    operation = add;
    printf("%d + %d = %d\\n", x, y, operation(x, y));
    
    operation = subtract;
    printf("%d - %d = %d\\n", x, y, operation(x, y));
    
    operation = multiply;
    printf("%d * %d = %d\\n", x, y, operation(x, y));
    
    operation = divide;
    printf("%d / %d = %d\\n", x, y, operation(x, y));
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc function_pointer.c -o function_pointer<br/>
          <span className="text-blue-400">$</span> ./function_pointer<br/>
          <span className="text-white">10 + 3 = 13</span><br/>
          <span className="text-white">10 - 3 = 7</span><br/>
          <span className="text-white">10 * 3 = 30</span><br/>
          <span className="text-white">10 / 3 = 3</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Con trỏ hàm như tham số</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// Định nghĩa kiểu con trỏ hàm
typedef int (*Operation)(int, int);

// Hàm nhận con trỏ hàm làm tham số
int calculate(int a, int b, Operation op) {
    return op(a, b);
}

// Hàm áp dụng phép toán cho mảng
void applyOperation(int arr[], int size, int value, Operation op) {
    for (int i = 0; i < size; i++) {
        arr[i] = op(arr[i], value);
    }
}

// Các hàm toán học
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

int main() {
    int x = 10, y = 3;
    
    // Sử dụng con trỏ hàm như tham số
    printf("Kết quả: %d\\n", calculate(x, y, add));
    printf("Kết quả: %d\\n", calculate(x, y, subtract));
    printf("Kết quả: %d\\n", calculate(x, y, multiply));
    
    // Áp dụng cho mảng
    int numbers[] = {1, 2, 3, 4, 5};
    int size = 5;
    
    printf("\\nMảng ban đầu: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    
    applyOperation(numbers, size, 2, multiply);
    printf("\\nSau khi nhân với 2: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc callback_function.c -o callback_function<br/>
          <span className="text-blue-400">$</span> ./callback_function<br/>
          <span className="text-white">Kết quả: 13</span><br/>
          <span className="text-white">Kết quả: 7</span><br/>
          <span className="text-white">Kết quả: 30</span><br/>
          <span className="text-white">Mảng ban đầu: 1 2 3 4 5</span><br/>
          <span className="text-white">Sau khi nhân với 2: 2 4 6 8 10</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Mảng con trỏ hàm</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khái niệm và sử dụng</h3>
      <p className="mb-4">
        Mảng con trỏ hàm cho phép bạn lưu trữ nhiều hàm và gọi chúng theo chỉ số, tạo ra một "bảng điều khiển" các hàm.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// Định nghĩa kiểu con trỏ hàm
typedef int (*Operation)(int, int);

// Các hàm toán học
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
int divide(int a, int b) { return (b != 0) ? a / b : 0; }

int main() {
    int x = 20, y = 4;
    
    // Mảng con trỏ hàm
    Operation operations[] = {add, subtract, multiply, divide};
    char *operation_names[] = {"Cộng", "Trừ", "Nhân", "Chia"};
    
    printf("Các phép toán với %d và %d:\\n", x, y);
    for (int i = 0; i < 4; i++) {
        int result = operations[i](x, y);
        printf("%s: %d %s %d = %d\\n", 
               operation_names[i], x, 
               (i == 0) ? "+" : (i == 1) ? "-" : (i == 2) ? "*" : "/", 
               y, result);
    }
    
    // Menu tương tác
    printf("\\nChọn phép toán (0-3): ");
    int choice;
    scanf("%d", &choice);
    
    if (choice >= 0 && choice < 4) {
        int result = operations[choice](x, y);
        printf("Kết quả: %d\\n", result);
    } else {
        printf("Lựa chọn không hợp lệ!\\n");
    }
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc function_array.c -o function_array<br/>
          <span className="text-blue-400">$</span> ./function_array<br/>
          <span className="text-white">Các phép toán với 20 và 4:</span><br/>
          <span className="text-white">Cộng: 20 + 4 = 24</span><br/>
          <span className="text-white">Trừ: 20 - 4 = 16</span><br/>
          <span className="text-white">Nhân: 20 * 4 = 80</span><br/>
          <span className="text-white">Chia: 20 / 4 = 5</span><br/>
          <span className="text-white">Chọn phép toán (0-3): 2</span><br/>
          <span className="text-white">Kết quả: 80</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Con trỏ void và hàm</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Con trỏ void với hàm</h3>
      <p className="mb-4">
        Con trỏ void cho phép hàm làm việc với bất kỳ kiểu dữ liệu nào, tạo ra tính linh hoạt cao.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

// Hàm so sánh cho int
int compareInt(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

// Hàm so sánh cho double
int compareDouble(const void *a, const void *b) {
    double diff = *(double*)a - *(double*)b;
    return (diff > 0) ? 1 : (diff < 0) ? -1 : 0;
}

// Hàm so sánh cho string
int compareString(const void *a, const void *b) {
    return strcmp(*(char**)a, *(char**)b);
}

// Hàm tìm phần tử lớn nhất (generic)
void* findMax(void *arr, int size, int elementSize, 
              int (*compare)(const void*, const void*)) {
    void *max = arr;
    
    for (int i = 1; i < size; i++) {
        void *current = (char*)arr + i * elementSize;
        if (compare(current, max) > 0) {
            max = current;
        }
    }
    
    return max;
}

int main() {
    // Với mảng int
    int intArr[] = {5, 2, 8, 1, 9, 3};
    int *maxInt = (int*)findMax(intArr, 6, sizeof(int), compareInt);
    printf("Số lớn nhất: %d\\n", *maxInt);
    
    // Với mảng double
    double doubleArr[] = {3.14, 2.71, 1.41, 2.23};
    double *maxDouble = (double*)findMax(doubleArr, 4, sizeof(double), compareDouble);
    printf("Số lớn nhất: %.2f\\n", *maxDouble);
    
    // Với mảng string
    char *stringArr[] = {"apple", "banana", "cherry", "date"};
    char **maxString = (char**)findMax(stringArr, 4, sizeof(char*), compareString);
    printf("Chuỗi lớn nhất: %s\\n", *maxString);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc void_pointer.c -o void_pointer<br/>
          <span className="text-blue-400">$</span> ./void_pointer<br/>
          <span className="text-white">Số lớn nhất: 9</span><br/>
          <span className="text-white">Số lớn nhất: 3.14</span><br/>
          <span className="text-white">Chuỗi lớn nhất: date</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Lưu ý quan trọng</h2>
      
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Các lỗi thường gặp</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Truyền NULL pointer vào hàm mà không kiểm tra</li>
                <li>Không khởi tạo con trỏ trước khi truyền vào hàm</li>
                <li>Nhầm lẫn giữa truyền giá trị và truyền tham chiếu</li>
                <li>Không kiểm tra giá trị trả về của hàm</li>
                <li>Sử dụng con trỏ hàm không đúng kiểu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Lưu ý</h3>
            <div className="mt-2 text-sm text-green-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Luôn kiểm tra NULL pointer trước khi sử dụng</li>
                <li>Sử dụng const với con trỏ khi không cần thay đổi giá trị</li>
                <li>Hiểu rõ khi nào cần truyền con trỏ và khi nào truyền giá trị</li>
                <li>Sử dụng typedef để đơn giản hóa khai báo con trỏ hàm</li>
                <li>Test kỹ với các trường hợp biên</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Hàm tính toán với con trỏ</h3>
      <p className="mb-4">Viết hàm <code>calculate(int a, int b, int *sum, int *diff, int *product, int *quotient)</code> tính tất cả các phép toán cơ bản.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng con trỏ để "trả về" nhiều giá trị</li>
          <li>Kiểm tra chia cho 0 trước khi thực hiện phép chia</li>
          <li>Test với các giá trị khác nhau</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Con trỏ hàm với sắp xếp</h3>
      <p className="mb-4">Viết hàm <code>sortArray(int arr[], int size, int (*compare)(int, int))</code> sắp xếp mảng với hàm so sánh tùy chỉnh.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Tạo các hàm so sánh: ascending, descending, absolute</li>
          <li>Sử dụng thuật toán bubble sort hoặc selection sort</li>
          <li>Test với các kiểu sắp xếp khác nhau</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Hàm callback với filter</h3>
      <p className="mb-4">Viết hàm <code>filterArray(int arr[], int size, int *result, int *resultSize, int (*predicate)(int))</code> lọc mảng theo điều kiện.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Tạo các hàm predicate: isEven, isPositive, isPrime</li>
          <li>Sử dụng con trỏ để trả về mảng kết quả và kích thước</li>
          <li>Đếm số phần tử thỏa mãn điều kiện trước</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Thử thách:</strong> Hãy thực hành các bài tập trên và thử nghiệm với các kiểu dữ liệu khác nhau. Con trỏ hàm mở ra khả năng tạo ra code linh hoạt và tái sử dụng cao!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointerFunctions;
