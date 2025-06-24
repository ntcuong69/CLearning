import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const FunctionDeclaration = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về cách khai báo và định nghĩa hàm trong C, một khái niệm quan trọng để tổ chức code thành các module nhỏ, dễ quản lý và tái sử dụng.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tại sao cần hàm?</h2>
      <p className="mb-4">
        Hàm là một khối lệnh được đặt tên, có thể được gọi để thực hiện một nhiệm vụ cụ thể. Việc sử dụng hàm giúp:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        <li><strong>Tái sử dụng code:</strong> Viết một lần, sử dụng nhiều lần</li>
        <li><strong>Modular hóa:</strong> Chia chương trình thành các phần nhỏ, dễ quản lý</li>
        <li><strong>Dễ bảo trì:</strong> Sửa lỗi ở một nơi, áp dụng cho toàn bộ chương trình</li>
        <li><strong>Dễ đọc hiểu:</strong> Code rõ ràng, có cấu trúc</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> Thay vì viết code tính tổng nhiều lần, ta tạo một hàm <code>sum()</code> và gọi khi cần.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cấu trúc cơ bản của hàm</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp khai báo hàm</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`kiểu_dữ_liệu_trả_về tên_hàm(danh_sách_tham_số) {
    // Thân hàm - các câu lệnh thực hiện
    return giá_trị_trả_về; // (tùy chọn)
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Các thành phần của hàm</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Thành phần</th>
              <th className="border border-gray-300 px-4 py-2">Mô tả</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Kiểu trả về</strong></td>
              <td className="border border-gray-300 px-4 py-2">Kiểu dữ liệu mà hàm sẽ trả về</td>
              <td className="border border-gray-300 px-4 py-2"><code>int, float, void</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Tên hàm</strong></td>
              <td className="border border-gray-300 px-4 py-2">Tên định danh của hàm</td>
              <td className="border border-gray-300 px-4 py-2"><code>calculateSum, printMessage</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Tham số</strong></td>
              <td className="border border-gray-300 px-4 py-2">Dữ liệu đầu vào cho hàm</td>
              <td className="border border-gray-300 px-4 py-2"><code>(int a, int b)</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Thân hàm</strong></td>
              <td className="border border-gray-300 px-4 py-2">Các câu lệnh thực hiện</td>
              <td className="border border-gray-300 px-4 py-2"><code>{'{ return a + b; }'}</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Khai báo và định nghĩa hàm</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khai báo hàm (Function Declaration)</h3>
      <p className="mb-4">
        Khai báo hàm giống như "giới thiệu" hàm với compiler. Nó cho compiler biết: "Có một hàm tên như vậy, nhận tham số kiểu này, trả về kiểu kia". Khai báo hàm thường được đặt ở đầu file.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`kiểu_dữ_liệu_trả_về tên_hàm(danh_sách_tham_số);`}</SyntaxHighlighter>
      </pre>

      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ khai báo:</b>
        <ul className="mt-2 space-y-1">
          <li><code>int add(int a, int b);</code> - Hàm add nhận 2 số nguyên, trả về số nguyên</li>
          <li><code>void printMessage(char message[]);</code> - Hàm printMessage nhận chuỗi, không trả về gì</li>
          <li><code>float calculateAverage(int arr[], int size);</code> - Hàm tính trung bình</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Lưu ý:</strong> Khai báo hàm kết thúc bằng dấu chấm phẩy (;) và không có thân hàm.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Định nghĩa hàm (Function Definition)</h3>
      <p className="mb-4">
        Định nghĩa hàm là "thực hiện" của hàm - nơi bạn viết code để hàm làm việc. Nó chứa toàn bộ logic và câu lệnh mà hàm sẽ thực hiện.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`kiểu_dữ_liệu_trả_về tên_hàm(danh_sách_tham_số) {
    // Thân hàm - các câu lệnh thực hiện
    return giá_trị_trả_về; // (tùy chọn)
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Ví dụ hoàn chỉnh: Khai báo + Định nghĩa</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// === KHAI BÁO HÀM (ở đầu file) ===
int add(int a, int b);
void printMessage(char message[]);
int multiply(int a, int b);

int main() {
    // Gọi hàm add
    int result = add(5, 3);
    printf("Tổng: %d\\n", result);
    
    // Gọi hàm printMessage
    printMessage("Xin chào!");
    
    // Gọi hàm multiply
    int product = multiply(4, 6);
    printf("Tích: %d\\n", product);
    
    return 0;
}

// === ĐỊNH NGHĨA HÀM (ở cuối file) ===
int add(int a, int b) {
    int sum = a + b;
    return sum;
}

void printMessage(char message[]) {
    printf("Thông báo: %s\\n", message);
}

int multiply(int a, int b) {
    return a * b;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. Cách viết gọn: Khai báo và định nghĩa ở đầu file</h3>
      <p className="mb-4">
        Để tiện lợi hơn, bạn có thể khai báo và định nghĩa hàm ngay ở đầu file, trước hàm main(). Cách này giúp code gọn gàng và dễ đọc hơn.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// === KHAI BÁO VÀ ĐỊNH NGHĨA HÀM (ở đầu file) ===
int add(int a, int b) {
    return a + b;
}

void printMessage(char message[]) {
    printf("Thông báo: %s\\n", message);
}

int multiply(int a, int b) {
    return a * b;
}

int main() {
    // Gọi hàm add
    int result = add(5, 3);
    printf("Tổng: %d\\n", result);
    
    // Gọi hàm printMessage
    printMessage("Xin chào!");
    
    // Gọi hàm multiply
    int product = multiply(4, 6);
    printf("Tích: %d\\n", product);
    
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
          <span className="text-blue-400">$</span> gcc function_example.c -o function_example<br/>
          <span className="text-blue-400">$</span> ./function_example<br/>
          <span className="text-white">Tổng: 8</span><br/>
          <span className="text-white">Thông báo: Xin chào!</span><br/>
          <span className="text-white">Tích: 24</span><br/>
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
            <h3 className="text-sm font-medium text-green-800">Quy tắc quan trọng</h3>
            <div className="mt-2 text-sm text-green-700">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Phải khai báo trước khi sử dụng:</strong> Compiler cần biết về hàm trước khi bạn gọi nó</li>
                <li><strong>Khai báo và định nghĩa phải khớp nhau:</strong> Kiểu trả về, tên hàm, tham số phải giống hệt</li>
                <li><strong>Có thể khai báo nhiều lần:</strong> Nhưng chỉ định nghĩa một lần</li>
                <li><strong>Thứ tự trong file:</strong> Khai báo ở đầu, định nghĩa ở cuối hoặc sau main()</li>
                <li><strong>Cách viết gọn:</strong> Có thể khai báo và định nghĩa hàm ở đầu file (trước main()) để tiện lợi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ưu điểm của cách viết gọn:</b>
        <ul className="mt-2 space-y-1">
          <li>Không cần khai báo riêng biệt - định nghĩa hàm đã là khai báo</li>
          <li>Code gọn gàng, dễ đọc hơn</li>
          <li>Ít lỗi hơn vì không cần đảm bảo khai báo và định nghĩa khớp nhau</li>
          <li>Phù hợp cho các chương trình nhỏ và vừa</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Các kiểu hàm cơ bản</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Hàm có tham số và có trả về</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int multiply(int a, int b) {
    return a * b;
}

float divide(float a, float b) {
    if (b != 0) {
        return a / b;
    }
    return 0; // Trả về 0 nếu chia cho 0
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Hàm có tham số nhưng không trả về (void)</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`void printNumber(int num) {
    printf("Số bạn nhập là: %d\\n", num);
}

void printArray(int arr[], int size) {
    printf("Mảng: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Hàm không có tham số nhưng có trả về</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int getRandomNumber() {
    return rand() % 100; // Trả về số ngẫu nhiên từ 0-99
}

char getGrade() {
    return 'A'; // Trả về ký tự
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. Hàm không có tham số và không trả về</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`void printHello() {
    printf("Hello World!\\n");
}

void showMenu() {
    printf("=== MENU ===\\n");
    printf("1. Thêm sinh viên\\n");
    printf("2. Xem danh sách\\n");
    printf("3. Thoát\\n");
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Truyền tham số</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Truyền theo giá trị (Pass by Value)</h3>
      <p className="mb-4">
        Khi truyền tham số theo giá trị, một bản sao của giá trị được tạo ra. Thay đổi trong hàm không ảnh hưởng đến biến gốc.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void modifyValue(int x) {
    x = x * 2;
    printf("Trong hàm: x = %d\\n", x);
}

int main() {
    int number = 10;
    printf("Trước khi gọi hàm: number = %d\\n", number);
    
    modifyValue(number);
    
    printf("Sau khi gọi hàm: number = %d\\n", number);
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
          <span className="text-blue-400">$</span> gcc pass_by_value.c -o pass_by_value<br/>
          <span className="text-blue-400">$</span> ./pass_by_value<br/>
          <span className="text-white">Trước khi gọi hàm: number = 10</span><br/>
          <span className="text-white">Trong hàm: x = 20</span><br/>
          <span className="text-white">Sau khi gọi hàm: number = 10</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Truyền theo tham chiếu (Pass by Reference)</h3>
      <p className="mb-4">
        Sử dụng con trỏ để truyền địa chỉ của biến. Thay đổi trong hàm sẽ ảnh hưởng đến biến gốc.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void modifyValueByReference(int *x) {
    *x = *x * 2;
    printf("Trong hàm: *x = %d\\n", *x);
}

int main() {
    int number = 10;
    printf("Trước khi gọi hàm: number = %d\\n", number);
    
    modifyValueByReference(&number);
    
    printf("Sau khi gọi hàm: number = %d\\n", number);
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
          <span className="text-blue-400">$</span> gcc pass_by_reference.c -o pass_by_reference<br/>
          <span className="text-blue-400">$</span> ./pass_by_reference<br/>
          <span className="text-white">Trước khi gọi hàm: number = 10</span><br/>
          <span className="text-white">Trong hàm: *x = 20</span><br/>
          <span className="text-white">Sau khi gọi hàm: number = 20</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Ví dụ thực tế</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Chương trình tính toán đơn giản</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <math.h>

// Khai báo các hàm
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
float divide(int a, int b);
int power(int base, int exponent);
void printResult(char operation[], int a, int b, float result);

int main() {
    int num1, num2, choice;
    
    printf("Nhập số thứ nhất: ");
    scanf("%d", &num1);
    
    printf("Nhập số thứ hai: ");
    scanf("%d", &num2);
    
    printf("\\nChọn phép tính:\\n");
    printf("1. Cộng\\n");
    printf("2. Trừ\\n");
    printf("3. Nhân\\n");
    printf("4. Chia\\n");
    printf("5. Lũy thừa\\n");
    printf("Nhập lựa chọn (1-5): ");
    scanf("%d", &choice);
    
    switch(choice) {
        case 1:
            printResult("Cộng", num1, num2, add(num1, num2));
            break;
        case 2:
            printResult("Trừ", num1, num2, subtract(num1, num2));
            break;
        case 3:
            printResult("Nhân", num1, num2, multiply(num1, num2));
            break;
        case 4:
            if (num2 != 0) {
                printResult("Chia", num1, num2, divide(num1, num2));
            } else {
                printf("Lỗi: Không thể chia cho 0!\\n");
            }
            break;
        case 5:
            printResult("Lũy thừa", num1, num2, power(num1, num2));
            break;
        default:
            printf("Lựa chọn không hợp lệ!\\n");
    }
    
    return 0;
}

// Định nghĩa các hàm
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

float divide(int a, int b) {
    return (float)a / b;
}

int power(int base, int exponent) {
    return (int)pow(base, exponent);
}

void printResult(char operation[], int a, int b, float result) {
    printf("%s %d và %d = %.2f\\n", operation, a, b, result);
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
          <span className="text-blue-400">$</span> gcc calculator.c -o calculator -lm<br/>
          <span className="text-blue-400">$</span> ./calculator<br/>
          <span className="text-white">Nhập số thứ nhất: 10</span><br/>
          <span className="text-white">Nhập số thứ hai: 5</span><br/>
          <span className="text-white">Chọn phép tính: 1</span><br/>
          <span className="text-white">Cộng 10 và 5 = 15.00</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Lưu ý quan trọng</h2>
      
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
                <li>Quên khai báo hàm trước khi sử dụng</li>
                <li>Không khớp kiểu dữ liệu tham số</li>
                <li>Quên return statement trong hàm có kiểu trả về</li>
                <li>Gọi hàm với số lượng tham số sai</li>
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
                <li>Luôn khai báo hàm ở đầu file hoặc trong header</li>
                <li>Đặt tên hàm có ý nghĩa, dễ hiểu</li>
                <li>Một hàm chỉ nên thực hiện một nhiệm vụ cụ thể</li>
                <li>Kiểm tra điều kiện đầu vào trong hàm</li>
                <li>Sử dụng comment để giải thích logic phức tạp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VIII. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Viết hàm tính giai thừa</h3>
      <p className="mb-4">Viết hàm <code>factorial(int n)</code> tính giai thừa của số nguyên n.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Giai thừa của 0 và 1 là 1</li>
          <li>n! = n × (n-1) × (n-2) × ... × 1</li>
          <li>Sử dụng vòng lặp hoặc đệ quy</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Viết hàm kiểm tra số nguyên tố</h3>
      <p className="mb-4">Viết hàm <code>isPrime(int n)</code> trả về 1 nếu n là số nguyên tố, 0 nếu không.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Số nguyên tố chỉ chia hết cho 1 và chính nó</li>
          <li>Kiểm tra từ 2 đến căn bậc hai của n</li>
          <li>Xử lý trường hợp n ≤ 1</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Viết hàm tìm số lớn nhất trong mảng</h3>
      <p className="mb-4">Viết hàm <code>findMax(int arr[], int size)</code> tìm và trả về số lớn nhất trong mảng.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Khởi tạo max = arr[0]</li>
          <li>So sánh với từng phần tử trong mảng</li>
          <li>Cập nhật max nếu tìm thấy số lớn hơn</li>
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
              <strong>Thử thách:</strong> Hãy thực hành viết các hàm trên và test với nhiều trường hợp khác nhau để hiểu rõ hơn về cách hoạt động của hàm trong C.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionDeclaration;
