import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const PointerBasics = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về con trỏ - một khái niệm quan trọng và mạnh mẽ trong C. Con trỏ cho phép bạn làm việc trực tiếp với bộ nhớ, tạo ra các chương trình hiệu quả và linh hoạt.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Con trỏ là gì?</h2>
      <p className="mb-4">
        Con trỏ là một biến đặc biệt lưu trữ địa chỉ bộ nhớ của một biến khác. Thay vì lưu giá trị trực tiếp, con trỏ "trỏ đến" vị trí trong bộ nhớ nơi giá trị được lưu trữ.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ đơn giản:</b> Giống như địa chỉ nhà - bạn không cần biết nội dung bên trong, chỉ cần biết địa chỉ để tìm đến. Con trỏ cũng vậy, nó lưu "địa chỉ" của dữ liệu trong bộ nhớ.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Tại sao cần con trỏ?</h3>
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        <li><strong>Hiệu suất cao:</strong> Truy cập trực tiếp bộ nhớ, không cần sao chép dữ liệu</li>
        <li><strong>Tiết kiệm bộ nhớ:</strong> Chỉ lưu địa chỉ thay vì toàn bộ dữ liệu</li>
        <li><strong>Làm việc với mảng:</strong> Con trỏ và mảng có mối quan hệ chặt chẽ</li>
        <li><strong>Hàm đa giá trị:</strong> Trả về nhiều giá trị thông qua con trỏ</li>
        <li><strong>Cấu trúc dữ liệu động:</strong> Tạo danh sách liên kết, cây, đồ thị</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Khai báo và khởi tạo con trỏ</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp khai báo con trỏ</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`kiểu_dữ_liệu *tên_con_trỏ;`}</SyntaxHighlighter>
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
              <strong>Lưu ý:</strong> Dấu * có thể đặt sát kiểu dữ liệu hoặc sát tên biến. Cả hai cách đều đúng: <code>int* ptr;</code> hoặc <code>int *ptr;</code>
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ khai báo con trỏ</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    // Khai báo các con trỏ
    int *ptr1;        // Con trỏ đến int
    float *ptr2;      // Con trỏ đến float
    char *ptr3;       // Con trỏ đến char
    double *ptr4;     // Con trỏ đến double
    
    // In kích thước con trỏ (luôn giống nhau trên cùng một hệ thống)
    printf("Kích thước con trỏ int: %lu bytes\\n", sizeof(ptr1));
    printf("Kích thước con trỏ float: %lu bytes\\n", sizeof(ptr2));
    printf("Kích thước con trỏ char: %lu bytes\\n", sizeof(ptr3));
    printf("Kích thước con trỏ double: %lu bytes\\n", sizeof(ptr4));
    
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
          <span className="text-blue-400">$</span> gcc pointer_declaration.c -o pointer_declaration<br/>
          <span className="text-blue-400">$</span> ./pointer_declaration<br/>
          <span className="text-white">Kích thước con trỏ int: 8 bytes</span><br/>
          <span className="text-white">Kích thước con trỏ float: 8 bytes</span><br/>
          <span className="text-white">Kích thước con trỏ char: 8 bytes</span><br/>
          <span className="text-white">Kích thước con trỏ double: 8 bytes</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Khởi tạo con trỏ</h3>
      <p className="mb-4">
        Con trỏ mới khai báo chứa giá trị rác (garbage value). Bạn nên khởi tạo con trỏ với NULL hoặc địa chỉ của một biến.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int number = 42;
    
    // Cách 1: Khởi tạo với NULL
    int *ptr1 = NULL;
    
    // Cách 2: Khởi tạo với địa chỉ của biến
    int *ptr2 = &number;
    
    // Cách 3: Khai báo trước, gán sau
    int *ptr3;
    ptr3 = &number;
    
    printf("Giá trị của number: %d\\n", number);
    printf("Địa chỉ của number: %p\\n", (void*)&number);
    printf("Giá trị của ptr2: %p\\n", (void*)ptr2);
    printf("ptr1 có giá trị NULL: %s\\n", (ptr1 == NULL) ? "Đúng" : "Sai");
    
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
          <span className="text-blue-400">$</span> gcc pointer_initialization.c -o pointer_initialization<br/>
          <span className="text-blue-400">$</span> ./pointer_initialization<br/>
          <span className="text-white">Giá trị của number: 42</span><br/>
          <span className="text-white">Địa chỉ của number: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Giá trị của ptr2: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">ptr1 có giá trị NULL: Đúng</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Toán tử địa chỉ (&) và toán tử giải tham chiếu (*)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Toán tử địa chỉ (&)</h3>
      <p className="mb-4">
        Toán tử & trả về địa chỉ bộ nhớ của một biến. Đây là cách để lấy địa chỉ của biến.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int number = 100;
    float price = 25.5;
    char grade = 'A';
    
    // Lấy địa chỉ của các biến
    printf("Địa chỉ của number: %p\\n", (void*)&number);
    printf("Địa chỉ của price: %p\\n", (void*)&price);
    printf("Địa chỉ của grade: %p\\n", (void*)&grade);
    
    // Gán địa chỉ cho con trỏ
    int *ptr1 = &number;
    float *ptr2 = &price;
    char *ptr3 = &grade;
    
    printf("ptr1 trỏ đến: %p\\n", (void*)ptr1);
    printf("ptr2 trỏ đến: %p\\n", (void*)ptr2);
    printf("ptr3 trỏ đến: %p\\n", (void*)ptr3);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Toán tử giải tham chiếu (*)</h3>
      <p className="mb-4">
        Toán tử * (khi dùng với con trỏ) truy cập giá trị tại địa chỉ mà con trỏ trỏ đến. Đây là cách để lấy giá trị từ địa chỉ.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int number = 42;
    int *ptr = &number;
    
    printf("Giá trị của number: %d\\n", number);
    printf("Địa chỉ của number: %p\\n", (void*)&number);
    printf("Giá trị của ptr (địa chỉ): %p\\n", (void*)ptr);
    printf("Giá trị mà ptr trỏ đến: %d\\n", *ptr);
    
    // Thay đổi giá trị thông qua con trỏ
    *ptr = 100;
    printf("\\nSau khi thay đổi qua con trỏ:\\n");
    printf("Giá trị của number: %d\\n", number);
    printf("Giá trị mà ptr trỏ đến: %d\\n", *ptr);
    
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
          <span className="text-blue-400">$</span> gcc dereference.c -o dereference<br/>
          <span className="text-blue-400">$</span> ./dereference<br/>
          <span className="text-white">Giá trị của number: 42</span><br/>
          <span className="text-white">Địa chỉ của number: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Giá trị của ptr (địa chỉ): 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Giá trị mà ptr trỏ đến: 42</span><br/>
          <span className="text-white">Sau khi thay đổi qua con trỏ:</span><br/>
          <span className="text-white">Giá trị của number: 100</span><br/>
          <span className="text-white">Giá trị mà ptr trỏ đến: 100</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Minh họa mối quan hệ</h3>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h4 className="font-semibold mb-2">Sơ đồ mối quan hệ:</h4>
        <div className="text-sm font-mono">
          <p>Biến: <code>number = 42</code></p>
          <p>Địa chỉ: <code>&number = 0x7fff5fbff8c8</code></p>
          <p>Con trỏ: <code>ptr = &number</code></p>
          <p>Giá trị con trỏ trỏ đến: <code>*ptr = 42</code></p>
          <br/>
          <p><strong>Mối quan hệ:</strong></p>
          <p><code>ptr</code> chứa địa chỉ của <code>number</code></p>
          <p><code>*ptr</code> truy cập giá trị tại địa chỉ đó</p>
          <p>Thay đổi <code>*ptr</code> sẽ thay đổi <code>number</code></p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Con trỏ NULL</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khái niệm</h3>
      <p className="mb-4">
        NULL là một giá trị đặc biệt cho biết con trỏ không trỏ đến bất kỳ địa chỉ hợp lệ nào. Đây là cách an toàn để khởi tạo con trỏ.
      </p>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    // Khởi tạo con trỏ với NULL
    int *ptr1 = NULL;
    float *ptr2 = NULL;
    char *ptr3 = NULL;
    
    printf("ptr1 = %p\\n", (void*)ptr1);
    printf("ptr2 = %p\\n", (void*)ptr2);
    printf("ptr3 = %p\\n", (void*)ptr3);
    
    // Kiểm tra con trỏ NULL
    if (ptr1 == NULL) {
        printf("ptr1 là con trỏ NULL\\n");
    }
    
    // So sánh với 0
    if (ptr1 == 0) {
        printf("ptr1 cũng bằng 0\\n");
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
          <span className="text-blue-400">$</span> gcc null_pointer.c -o null_pointer<br/>
          <span className="text-blue-400">$</span> ./null_pointer<br/>
          <span className="text-white">ptr1 = (nil)</span><br/>
          <span className="text-white">ptr2 = (nil)</span><br/>
          <span className="text-white">ptr3 = (nil)</span><br/>
          <span className="text-white">ptr1 là con trỏ NULL</span><br/>
          <span className="text-white">ptr1 cũng bằng 0</span><br/>
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
              <strong>Lưu ý quan trọng:</strong> Không bao giờ truy cập giá trị của con trỏ NULL (*ptr) vì sẽ gây lỗi segmentation fault.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Ví dụ thực tế: Hoán đổi giá trị</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Hoán đổi không dùng con trỏ (không thành công)</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    printf("Trong hàm swap: a = %d, b = %d\\n", a, b);
}

int main() {
    int x = 10, y = 20;
    
    printf("Trước khi gọi swap: x = %d, y = %d\\n", x, y);
    swap(x, y);
    printf("Sau khi gọi swap: x = %d, y = %d\\n", x, y);
    
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
          <span className="text-blue-400">$</span> gcc swap_fail.c -o swap_fail<br/>
          <span className="text-blue-400">$</span> ./swap_fail<br/>
          <span className="text-white">Trước khi gọi swap: x = 10, y = 20</span><br/>
          <span className="text-white">Trong hàm swap: a = 20, b = 10</span><br/>
          <span className="text-white">Sau khi gọi swap: x = 10, y = 20</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Hoán đổi dùng con trỏ (thành công)</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    printf("Trong hàm swap: *a = %d, *b = %d\\n", *a, *b);
}

int main() {
    int x = 10, y = 20;
    
    printf("Trước khi gọi swap: x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("Sau khi gọi swap: x = %d, y = %d\\n", x, y);
    
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
          <span className="text-blue-400">$</span> gcc swap_success.c -o swap_success<br/>
          <span className="text-blue-400">$</span> ./swap_success<br/>
          <span className="text-white">Trước khi gọi swap: x = 10, y = 20</span><br/>
          <span className="text-white">Trong hàm swap: *a = 20, *b = 10</span><br/>
          <span className="text-white">Sau khi gọi swap: x = 20, y = 10</span><br/>
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
            <p className="text-sm text-green-700">
              <strong>Giải thích:</strong> Con trỏ cho phép hàm thay đổi giá trị của biến gốc bằng cách truy cập trực tiếp vào địa chỉ bộ nhớ.
            </p>
          </div>
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
                <li>Truy cập con trỏ chưa khởi tạo (wild pointer)</li>
                <li>Truy cập con trỏ NULL</li>
                <li>Giải phóng con trỏ đã được giải phóng</li>
                <li>Memory leak (rò rỉ bộ nhớ)</li>
                <li>Con trỏ trỏ đến vùng nhớ không hợp lệ</li>
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
                <li>Luôn khởi tạo con trỏ với NULL hoặc địa chỉ hợp lệ</li>
                <li>Kiểm tra con trỏ NULL trước khi sử dụng</li>
                <li>Sử dụng con trỏ một cách cẩn thận và có mục đích</li>
                <li>Hiểu rõ vòng đời của con trỏ</li>
                <li>Test kỹ với các trường hợp biên</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Tìm giá trị lớn nhất và nhỏ nhất</h3>
      <p className="mb-4">Viết hàm <code>findMinMax(int a, int b, int *min, int *max)</code> tìm giá trị nhỏ nhất và lớn nhất trong hai số.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng con trỏ để trả về hai giá trị</li>
          <li>So sánh a và b để xác định min, max</li>
          <li>Gán giá trị cho *min và *max</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Tính tổng và tích</h3>
      <p className="mb-4">Viết hàm <code>calculate(int a, int b, int *sum, int *product)</code> tính tổng và tích của hai số.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>*sum = a + b</li>
          <li>*product = a * b</li>
          <li>Test với các giá trị khác nhau</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Kiểm tra con trỏ NULL</h3>
      <p className="mb-4">Viết hàm <code>safePrint(int *ptr)</code> in giá trị con trỏ trỏ đến, nhưng kiểm tra NULL trước.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Kiểm tra if (ptr == NULL) trước khi in</li>
          <li>In thông báo lỗi nếu ptr là NULL</li>
          <li>In giá trị nếu ptr không phải NULL</li>
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
              <strong>Thử thách:</strong> Hãy thực hành các bài tập trên và thử nghiệm với các giá trị khác nhau để hiểu rõ hơn về cách hoạt động của con trỏ. Đừng quên vẽ sơ đồ để theo dõi mối quan hệ giữa con trỏ và biến!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointerBasics;
