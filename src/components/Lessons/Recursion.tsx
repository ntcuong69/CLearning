import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const Recursion = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về đệ quy - một kỹ thuật lập trình mạnh mẽ cho phép hàm gọi lại chính nó. Đệ quy giúp giải quyết các bài toán phức tạp một cách thanh lịch và hiệu quả.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Đệ quy là gì?</h2>
      <p className="mb-4">
        Đệ quy là kỹ thuật trong đó một hàm gọi lại chính nó để giải quyết bài toán. Thay vì sử dụng vòng lặp, đệ quy chia bài toán lớn thành các bài toán nhỏ hơn cùng loại.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ đơn giản:</b> Tính giai thừa của n (n!) = n × (n-1) × (n-2) × ... × 1. Thay vì dùng vòng lặp, ta có thể viết: n! = n × (n-1)!
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Đặc điểm của đệ quy</h3>
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        <li><strong>Điều kiện dừng (Base case):</strong> Trường hợp đơn giản nhất, không cần đệ quy</li>
        <li><strong>Bước đệ quy (Recursive case):</strong> Chia bài toán thành bài toán nhỏ hơn</li>
        <li><strong>Hội tụ:</strong> Mỗi lần đệ quy phải tiến gần đến điều kiện dừng</li>
        <li><strong>Ngăn xếp (Stack):</strong> Mỗi lần gọi đệ quy được lưu trong bộ nhớ stack</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cấu trúc cơ bản của hàm đệ quy</h2>
      
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`kiểu_dữ_liệu tên_hàm(tham_số) {
    // 1. Điều kiện dừng (Base case)
    if (điều_kiện_dừng) {
        return giá_trị_cơ_bản;
    }
    
    // 2. Bước đệ quy (Recursive case)
    return xử_lý + tên_hàm(tham_số_mới);
}`}</SyntaxHighlighter>
      </pre>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Lưu ý quan trọng:</strong> Luôn phải có điều kiện dừng, nếu không hàm sẽ gọi vô hạn và gây tràn stack.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ví dụ cơ bản: Tính giai thừa</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cách tiếp cận đệ quy</h3>
      <p className="mb-4">
        Giai thừa của n (n!) = n × (n-1) × (n-2) × ... × 1. Ta có thể viết: n! = n × (n-1)!
      </p>
      
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h4 className="font-semibold mb-2">Phân tích:</h4>
        <ul className="text-sm space-y-1">
          <li><strong>Điều kiện dừng:</strong> 0! = 1 và 1! = 1</li>
          <li><strong>Bước đệ quy:</strong> n! = n × (n-1)!</li>
          <li><strong>Ví dụ:</strong> 5! = 5 × 4! = 5 × 4 × 3! = 5 × 4 × 3 × 2! = 5 × 4 × 3 × 2 × 1! = 5 × 4 × 3 × 2 × 1 = 120</li>
        </ul>
      </div>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int factorial(int n) {
    // Điều kiện dừng
    if (n == 0 || n == 1) {
        return 1;
    }
    
    // Bước đệ quy
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    printf("Giai thừa của %d là: %d\\n", n, factorial(n));
    
    // Test với các giá trị khác
    printf("Giai thừa của 0 là: %d\\n", factorial(0));
    printf("Giai thừa của 1 là: %d\\n", factorial(1));
    printf("Giai thừa của 3 là: %d\\n", factorial(3));
    
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
          <span className="text-blue-400">$</span> gcc factorial.c -o factorial<br/>
          <span className="text-blue-400">$</span> ./factorial<br/>
          <span className="text-white">Giai thừa của 5 là: 120</span><br/>
          <span className="text-white">Giai thừa của 0 là: 1</span><br/>
          <span className="text-white">Giai thừa của 1 là: 1</span><br/>
          <span className="text-white">Giai thừa của 3 là: 6</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Minh họa quá trình đệ quy</h3>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h4 className="font-semibold mb-2">Khi gọi factorial(5):</h4>
        <p className="text-sm font-mono">factorial(5) → 5 × factorial(4)<br/>
factorial(4) → 4 × factorial(3)<br/>
factorial(3) → 3 × factorial(2)<br/>
factorial(2) → 2 × factorial(1)<br/>
factorial(1) → 1 (điều kiện dừng)<br/>
Kết quả: 5 × 4 × 3 × 2 × 1 = 120
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Ví dụ: Dãy Fibonacci</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Định nghĩa dãy Fibonacci</h3>
      <p className="mb-4">
        Dãy Fibonacci: F(n) = F(n-1) + F(n-2), với F(0) = 0 và F(1) = 1
      </p>
      
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h4 className="font-semibold mb-2">Dãy Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</h4>
        <ul className="text-sm space-y-1">
          <li>F(0) = 0</li>
          <li>F(1) = 1</li>
          <li>F(2) = F(1) + F(0) = 1 + 0 = 1</li>
          <li>F(3) = F(2) + F(1) = 1 + 1 = 2</li>
          <li>F(4) = F(3) + F(2) = 2 + 1 = 3</li>
        </ul>
      </div>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int fibonacci(int n) {
    // Điều kiện dừng
    if (n <= 1) {
        return n;
    }
    
    // Bước đệ quy
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Dãy Fibonacci (10 số đầu):\\n");
    for (int i = 0; i < 10; i++) {
        printf("F(%d) = %d\\n", i, fibonacci(i));
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
          <span className="text-blue-400">$</span> gcc fibonacci.c -o fibonacci<br/>
          <span className="text-blue-400">$</span> ./fibonacci<br/>
          <span className="text-white">Dãy Fibonacci (10 số đầu):</span><br/>
          <span className="text-white">F(0) = 0</span><br/>
          <span className="text-white">F(1) = 1</span><br/>
          <span className="text-white">F(2) = 1</span><br/>
          <span className="text-white">F(3) = 2</span><br/>
          <span className="text-white">F(4) = 3</span><br/>
          <span className="text-white">F(5) = 5</span><br/>
          <span className="text-white">F(6) = 8</span><br/>
          <span className="text-white">F(7) = 13</span><br/>
          <span className="text-white">F(8) = 21</span><br/>
          <span className="text-white">F(9) = 34</span><br/>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              <strong>Lưu ý:</strong> Đệ quy Fibonacci có hiệu suất kém vì tính toán lặp lại nhiều lần. Với n lớn, nên dùng vòng lặp hoặc quy hoạch động.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Ví dụ: Tìm ước chung lớn nhất (GCD)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Thuật toán Euclidean</h3>
      <p className="mb-4">
        GCD(a, b) = GCD(b, a % b) với điều kiện dừng GCD(a, 0) = a
      </p>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int gcd(int a, int b) {
    // Điều kiện dừng
    if (b == 0) {
        return a;
    }
    
    // Bước đệ quy
    return gcd(b, a % b);
}

int main() {
    int a = 48, b = 18;
    printf("GCD(%d, %d) = %d\\n", a, b, gcd(a, b));
    
    // Test thêm
    printf("GCD(12, 8) = %d\\n", gcd(12, 8));
    printf("GCD(54, 24) = %d\\n", gcd(54, 24));
    
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
          <span className="text-blue-400">$</span> gcc gcd.c -o gcd<br/>
          <span className="text-blue-400">$</span> ./gcd<br/>
          <span className="text-white">GCD(48, 18) = 6</span><br/>
          <span className="text-white">GCD(12, 8) = 4</span><br/>
          <span className="text-white">GCD(54, 24) = 6</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Đệ quy với mảng</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Tìm tổng mảng bằng đệ quy</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int arraySum(int arr[], int n) {
    // Điều kiện dừng
    if (n <= 0) {
        return 0;
    }
    
    // Bước đệ quy: tổng = phần tử đầu + tổng phần còn lại
    return arr[0] + arraySum(arr + 1, n - 1);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    
    printf("Tổng mảng: %d\\n", arraySum(arr, n));
    
    // Test với mảng khác
    int arr2[] = {10, 20, 30};
    printf("Tổng mảng 2: %d\\n", arraySum(arr2, 3));
    
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
          <span className="text-blue-400">$</span> gcc array_sum.c -o array_sum<br/>
          <span className="text-blue-400">$</span> ./array_sum<br/>
          <span className="text-white">Tổng mảng: 15</span><br/>
          <span className="text-white">Tổng mảng 2: 60</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Đệ quy đuôi (Tail Recursion)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khái niệm</h3>
      <p className="mb-4">
        Đệ quy đuôi là trường hợp đặc biệt khi lời gọi đệ quy là thao tác cuối cùng trong hàm. Compiler có thể tối ưu hóa đệ quy đuôi thành vòng lặp.
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ: Giai thừa với đệ quy đuôi</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int factorialTail(int n, int accumulator) {
    // Điều kiện dừng
    if (n <= 1) {
        return accumulator;
    }
    
    // Đệ quy đuôi: lời gọi đệ quy là thao tác cuối cùng
    return factorialTail(n - 1, n * accumulator);
}

int factorial(int n) {
    return factorialTail(n, 1);
}

int main() {
    printf("5! = %d\\n", factorial(5));
    printf("4! = %d\\n", factorial(4));
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              <strong>Ưu điểm:</strong> Đệ quy đuôi tiết kiệm bộ nhớ stack và có thể được tối ưu hóa thành vòng lặp.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VIII. Ưu và nhược điểm của đệ quy</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <h3 className="font-semibold text-green-800 mb-2">Ưu điểm:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Code ngắn gọn, dễ đọc</li>
            <li>• Giải quyết bài toán phức tạp dễ dàng</li>
            <li>• Phù hợp với cấu trúc dữ liệu đệ quy</li>
            <li>• Tự nhiên cho một số thuật toán</li>
            <li>• Dễ debug và hiểu logic</li>
          </ul>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="font-semibold text-red-800 mb-2">Nhược điểm:</h3>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Tốn bộ nhớ stack</li>
            <li>• Có thể chậm hơn vòng lặp</li>
            <li>• Khó tối ưu hóa</li>
            <li>• Có thể gây tràn stack</li>
            <li>• Khó hiểu với người mới</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IX. Khi nào sử dụng đệ quy?</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Sử dụng đệ quy khi:</b>
        <ul className="mt-2 space-y-1">
          <li>• Bài toán có thể chia thành bài toán con cùng loại</li>
          <li>• Có điều kiện dừng rõ ràng</li>
          <li>• Làm việc với cấu trúc dữ liệu đệ quy (cây, đồ thị)</li>
          <li>• Code ngắn gọn quan trọng hơn hiệu suất</li>
          <li>• Thuật toán tự nhiên là đệ quy (quicksort, mergesort)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">X. Lưu ý quan trọng</h2>
      
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
                <li>Quên điều kiện dừng &rarr; tràn stack</li>
                <li>Điều kiện dừng không đúng &rarr; vòng lặp vô hạn</li>
                <li>Không tiến đến điều kiện dừng &rarr; đệ quy vô hạn</li>
                <li>Sử dụng đệ quy cho bài toán đơn giản</li>
                <li>Không xem xét hiệu suất với dữ liệu lớn</li>
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
                <li>Luôn xác định rõ điều kiện dừng trước khi viết đệ quy</li>
                <li>Đảm bảo mỗi bước đệ quy tiến gần đến điều kiện dừng</li>
                <li>Sử dụng đệ quy đuôi khi có thể</li>
                <li>Xem xét sử dụng vòng lặp cho bài toán đơn giản</li>
                <li>Test với các trường hợp biên</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">XI. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Tính tổng từ 1 đến n</h3>
      <p className="mb-4">Viết hàm đệ quy <code>sumToN(int n)</code> tính tổng từ 1 đến n.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Điều kiện dừng: sumToN(1) = 1</li>
          <li>Bước đệ quy: sumToN(n) = n + sumToN(n-1)</li>
          <li>Test với n = 5 &rarr; kết quả = 15</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Đảo ngược chuỗi</h3>
      <p className="mb-4">Viết hàm đệ quy <code>reverseString(char str[], int start, int end)</code> đảo ngược chuỗi.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Điều kiện dừng: start &gt;= end</li>
          <li>Bước đệ quy: hoán đổi str[start] và str[end], sau đó gọi đệ quy với start+1, end-1</li>
          <li>Test với "hello" &rarr; "olleh"</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Tìm số lớn nhất trong mảng</h3>
      <p className="mb-4">Viết hàm đệ quy <code>findMax(int arr[], int n)</code> tìm số lớn nhất trong mảng.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Điều kiện dừng: n == 1 &rarr; trả về arr[0]</li>
          <li>Bước đệ quy: max(arr[0], findMax(arr+1, n-1))</li>
          <li>Test với [3, 7, 2, 9, 1] &rarr; kết quả = 9</li>
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
              <strong>Thử thách:</strong> Hãy thực hành các bài tập trên và thử nghiệm với các giá trị khác nhau để hiểu rõ hơn về cách hoạt động của đệ quy. Đừng quên vẽ sơ đồ để theo dõi quá trình đệ quy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recursion;
