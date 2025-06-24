import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const PointerArrays = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này khám phá mối quan hệ mật thiết giữa con trỏ và mảng trong C. Hiểu được mối quan hệ này sẽ giúp bạn viết code hiệu quả hơn và tối ưu hóa việc truy cập dữ liệu.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Mối quan hệ giữa con trỏ và mảng</h2>
      <p className="mb-4">
        Trong C, tên mảng thực chất là một con trỏ hằng (constant pointer) trỏ đến phần tử đầu tiên của mảng. Điều này tạo ra mối quan hệ đặc biệt giữa con trỏ và mảng.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Quan trọng:</b> Tên mảng là địa chỉ của phần tử đầu tiên. Khi bạn khai báo <code>int arr[5]</code>, thì <code>arr</code> tương đương với <code>&arr[0]</code>.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khai báo và khởi tạo</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr;  // ptr trỏ đến phần tử đầu tiên
    
    printf("Địa chỉ của mảng: %p\\n", (void*)arr);
    printf("Địa chỉ của arr[0]: %p\\n", (void*)&arr[0]);
    printf("Giá trị của ptr: %p\\n", (void*)ptr);
    
    printf("\\nGiá trị phần tử đầu tiên:\\n");
    printf("arr[0] = %d\\n", arr[0]);
    printf("*ptr = %d\\n", *ptr);
    printf("*arr = %d\\n", *arr);
    
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
          <span className="text-blue-400">$</span> gcc array_pointer.c -o array_pointer<br/>
          <span className="text-blue-400">$</span> ./array_pointer<br/>
          <span className="text-white">Địa chỉ của mảng: 0x7fff5fbff8a0</span><br/>
          <span className="text-white">Địa chỉ của arr[0]: 0x7fff5fbff8a0</span><br/>
          <span className="text-white">Giá trị của ptr: 0x7fff5fbff8a0</span><br/>
          <span className="text-white">Giá trị phần tử đầu tiên:</span><br/>
          <span className="text-white">arr[0] = 10</span><br/>
          <span className="text-white">*ptr = 10</span><br/>
          <span className="text-white">*arr = 10</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Truy cập phần tử mảng bằng con trỏ</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cách truy cập cơ bản</h3>
      <p className="mb-4">
        Có hai cách chính để truy cập phần tử mảng: sử dụng chỉ số mảng hoặc sử dụng con trỏ.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    
    printf("Truy cập bằng chỉ số mảng:\\n");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
    
    printf("\\nTruy cập bằng con trỏ:\\n");
    for (int i = 0; i < 5; i++) {
        printf("*(ptr + %d) = %d\\n", i, *(ptr + i));
    }
    
    printf("\\nTruy cập bằng tên mảng như con trỏ:\\n");
    for (int i = 0; i < 5; i++) {
        printf("*(arr + %d) = %d\\n", i, *(arr + i));
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
          <span className="text-blue-400">$</span> gcc access_methods.c -o access_methods<br/>
          <span className="text-blue-400">$</span> ./access_methods<br/>
          <span className="text-white">Truy cập bằng chỉ số mảng:</span><br/>
          <span className="text-white">arr[0] = 10</span><br/>
          <span className="text-white">arr[1] = 20</span><br/>
          <span className="text-white">arr[2] = 30</span><br/>
          <span className="text-white">arr[3] = 40</span><br/>
          <span className="text-white">arr[4] = 50</span><br/>
          <span className="text-white">Truy cập bằng con trỏ:</span><br/>
          <span className="text-white">*(ptr + 0) = 10</span><br/>
          <span className="text-white">*(ptr + 1) = 20</span><br/>
          <span className="text-white">*(ptr + 2) = 30</span><br/>
          <span className="text-white">*(ptr + 3) = 40</span><br/>
          <span className="text-white">*(ptr + 4) = 50</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Sử dụng con trỏ để duyệt mảng</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    
    printf("Duyệt mảng bằng con trỏ:\\n");
    
    // Cách 1: Sử dụng vòng lặp for với con trỏ
    for (int i = 0; i < 5; i++) {
        printf("%d ", *ptr);
        ptr++;  // Di chuyển con trỏ đến phần tử tiếp theo
    }
    printf("\\n");
    
    // Reset con trỏ về đầu mảng
    ptr = arr;
    
    // Cách 2: Sử dụng con trỏ như iterator
    int *end = arr + 5;  // Con trỏ đến cuối mảng
    while (ptr < end) {
        printf("%d ", *ptr);
        ptr++;
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
          <span className="text-blue-400">$</span> gcc pointer_traversal.c -o pointer_traversal<br/>
          <span className="text-blue-400">$</span> ./pointer_traversal<br/>
          <span className="text-white">Duyệt mảng bằng con trỏ:</span><br/>
          <span className="text-white">10 20 30 40 50</span><br/>
          <span className="text-white">10 20 30 40 50</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Con trỏ và mảng ký tự (chuỗi)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Chuỗi và con trỏ</h3>
      <p className="mb-4">
        Chuỗi trong C là một mảng ký tự kết thúc bằng ký tự null ('\0'). Con trỏ char thường được sử dụng để làm việc với chuỗi.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    char str[] = "Hello";
    char *ptr = str;
    
    printf("Chuỗi: %s\\n", str);
    printf("Địa chỉ của str: %p\\n", (void*)str);
    printf("Địa chỉ của ptr: %p\\n", (void*)ptr);
    
    printf("\\nIn từng ký tự:\\n");
    while (*ptr != '\\0') {
        printf("%c ", *ptr);
        ptr++;
    }
    printf("\\n");
    
    // Reset con trỏ
    ptr = str;
    
    printf("\\nIn từng ký tự (cách khác):\\n");
    for (int i = 0; str[i] != '\\0'; i++) {
        printf("%c ", *(ptr + i));
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
          <span className="text-blue-400">$</span> gcc string_pointer.c -o string_pointer<br/>
          <span className="text-blue-400">$</span> ./string_pointer<br/>
          <span className="text-white">Chuỗi: Hello</span><br/>
          <span className="text-white">Địa chỉ của str: 0x7fff5fbff8a0</span><br/>
          <span className="text-white">Địa chỉ của ptr: 0x7fff5fbff8a0</span><br/>
          <span className="text-white">In từng ký tự:</span><br/>
          <span className="text-white">H e l l o</span><br/>
          <span className="text-white">In từng ký tự (cách khác):</span><br/>
          <span className="text-white">H e l l o</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Hàm xử lý chuỗi với con trỏ</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

// Hàm đếm độ dài chuỗi
int stringLength(char *str) {
    int length = 0;
    while (*str != '\\0') {
        length++;
        str++;
    }
    return length;
}

// Hàm sao chép chuỗi
void stringCopy(char *dest, char *src) {
    while (*src != '\\0') {
        *dest = *src;
        dest++;
        src++;
    }
    *dest = '\\0';  // Kết thúc chuỗi đích
}

// Hàm so sánh chuỗi
int stringCompare(char *str1, char *str2) {
    while (*str1 != '\\0' && *str2 != '\\0') {
        if (*str1 != *str2) {
            return *str1 - *str2;
        }
        str1++;
        str2++;
    }
    return *str1 - *str2;
}

int main() {
    char str1[] = "Hello";
    char str2[10];
    
    printf("Độ dài của '%s': %d\\n", str1, stringLength(str1));
    
    stringCopy(str2, str1);
    printf("Sao chép: %s\\n", str2);
    
    printf("So sánh '%s' và '%s': %d\\n", str1, str2, stringCompare(str1, str2));
    printf("So sánh '%s' và 'World': %d\\n", str1, stringCompare(str1, "World"));
    
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
          <span className="text-blue-400">$</span> gcc string_functions.c -o string_functions<br/>
          <span className="text-blue-400">$</span> ./string_functions<br/>
          <span className="text-white">Độ dài của 'Hello': 5</span><br/>
          <span className="text-white">Sao chép: Hello</span><br/>
          <span className="text-white">So sánh 'Hello' và 'Hello': 0</span><br/>
          <span className="text-white">So sánh 'Hello' và 'World': -15</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Mảng con trỏ</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khái niệm mảng con trỏ</h3>
      <p className="mb-4">
        Mảng con trỏ là một mảng chứa các con trỏ. Mỗi phần tử của mảng là một con trỏ trỏ đến một địa chỉ khác nhau.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 30, d = 40;
    
    // Mảng con trỏ
    int *ptr_array[4] = {&a, &b, &c, &d};
    
    printf("Giá trị của các biến:\\n");
    printf("a = %d, b = %d, c = %d, d = %d\\n", a, b, c, d);
    
    printf("\\nTruy cập qua mảng con trỏ:\\n");
    for (int i = 0; i < 4; i++) {
        printf("ptr_array[%d] trỏ đến giá trị: %d\\n", i, *ptr_array[i]);
    }
    
    printf("\\nThay đổi giá trị qua con trỏ:\\n");
    *ptr_array[0] = 100;  // Thay đổi giá trị của a
    *ptr_array[1] = 200;  // Thay đổi giá trị của b
    
    printf("Sau khi thay đổi: a = %d, b = %d, c = %d, d = %d\\n", a, b, c, d);
    
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
          <span className="text-blue-400">$</span> gcc pointer_array.c -o pointer_array<br/>
          <span className="text-blue-400">$</span> ./pointer_array<br/>
          <span className="text-white">Giá trị của các biến:</span><br/>
          <span className="text-white">a = 10, b = 20, c = 30, d = 40</span><br/>
          <span className="text-white">Truy cập qua mảng con trỏ:</span><br/>
          <span className="text-white">ptr_array[0] trỏ đến giá trị: 10</span><br/>
          <span className="text-white">ptr_array[1] trỏ đến giá trị: 20</span><br/>
          <span className="text-white">ptr_array[2] trỏ đến giá trị: 30</span><br/>
          <span className="text-white">ptr_array[3] trỏ đến giá trị: 40</span><br/>
          <span className="text-white">Sau khi thay đổi: a = 100, b = 200, c = 30, d = 40</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Mảng con trỏ với chuỗi</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    // Mảng con trỏ đến chuỗi
    char *names[] = {"Alice", "Bob", "Charlie", "David", "Eve"};
    
    printf("Danh sách tên:\\n");
    for (int i = 0; i < 5; i++) {
        printf("%d. %s\\n", i + 1, names[i]);
    }
    
    printf("\\nĐịa chỉ của các chuỗi:\\n");
    for (int i = 0; i < 5; i++) {
        printf("names[%d] = %p -> '%s'\\n", i, (void*)names[i], names[i]);
    }
    
    printf("\\nIn từng ký tự của tên đầu tiên:\\n");
    char *first_name = names[0];
    while (*first_name != '\\0') {
        printf("%c ", *first_name);
        first_name++;
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
          <span className="text-blue-400">$</span> gcc string_pointer_array.c -o string_pointer_array<br/>
          <span className="text-blue-400">$</span> ./string_pointer_array<br/>
          <span className="text-white">Danh sách tên:</span><br/>
          <span className="text-white">1. Alice</span><br/>
          <span className="text-white">2. Bob</span><br/>
          <span className="text-white">3. Charlie</span><br/>
          <span className="text-white">4. David</span><br/>
          <span className="text-white">5. Eve</span><br/>
          <span className="text-white">Địa chỉ của các chuỗi:</span><br/>
          <span className="text-white">names[0] = 0x4006b0 -&gt; 'Alice'</span><br/>
          <span className="text-white">names[1] = 0x4006b6 -&gt; 'Bob'</span><br/>
          <span className="text-white">names[2] = 0x4006ba -&gt; 'Charlie'</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Con trỏ và mảng đa chiều</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Mảng 2 chiều và con trỏ</h3>
      <p className="mb-4">
        Với mảng 2 chiều, con trỏ cần được khai báo phù hợp với số cột của mảng.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    
    // Con trỏ đến mảng 2 chiều (cần chỉ định số cột)
    int (*ptr)[4] = matrix;
    
    printf("Truy cập bằng chỉ số mảng:\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%2d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    printf("\\nTruy cập bằng con trỏ:\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%2d ", *(*(ptr + i) + j));
        }
        printf("\\n");
    }
    
    printf("\\nTruy cập bằng con trỏ (cách khác):\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%2d ", ptr[i][j]);
        }
        printf("\\n");
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
          <span className="text-blue-400">$</span> gcc matrix_pointer.c -o matrix_pointer<br/>
          <span className="text-blue-400">$</span> ./matrix_pointer<br/>
          <span className="text-white">Truy cập bằng chỉ số mảng:</span><br/>
          <span className="text-white"> 1  2  3  4</span><br/>
          <span className="text-white"> 5  6  7  8</span><br/>
          <span className="text-white"> 9 10 11 12</span><br/>
          <span className="text-white">Truy cập bằng con trỏ:</span><br/>
          <span className="text-white"> 1  2  3  4</span><br/>
          <span className="text-white"> 5  6  7  8</span><br/>
          <span className="text-white"> 9 10 11 12</span><br/>
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
                <li>Truy cập ngoài giới hạn mảng</li>
                <li>Không kiểm tra NULL trước khi sử dụng con trỏ</li>
                <li>Nhầm lẫn giữa con trỏ và mảng</li>
                <li>Không khởi tạo con trỏ trước khi sử dụng</li>
                <li>Memory leak khi làm việc với con trỏ động</li>
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
                <li>Luôn kiểm tra giới hạn mảng trước khi truy cập</li>
                <li>Sử dụng const với con trỏ khi không cần thay đổi giá trị</li>
                <li>Hiểu rõ sự khác biệt giữa con trỏ và mảng</li>
                <li>Sử dụng con trỏ một cách có mục đích và an toàn</li>
                <li>Test kỹ với các trường hợp biên</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Tìm phần tử lớn nhất trong mảng</h3>
      <p className="mb-4">Viết hàm <code>findMax(int *arr, int size)</code> tìm phần tử lớn nhất trong mảng sử dụng con trỏ.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng con trỏ để duyệt mảng</li>
          <li>So sánh từng phần tử với giá trị max hiện tại</li>
          <li>Cập nhật max khi tìm thấy phần tử lớn hơn</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Đảo ngược mảng</h3>
      <p className="mb-4">Viết hàm <code>reverseArray(int *arr, int size)</code> đảo ngược thứ tự các phần tử trong mảng.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng hai con trỏ: một ở đầu, một ở cuối</li>
          <li>Hoán đổi giá trị tại hai vị trí</li>
          <li>Di chuyển con trỏ về giữa cho đến khi gặp nhau</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Sắp xếp mảng</h3>
      <p className="mb-4">Viết hàm <code>sortArray(int *arr, int size)</code> sắp xếp mảng theo thứ tự tăng dần sử dụng thuật toán bubble sort.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng hai vòng lặp lồng nhau</li>
          <li>So sánh và hoán đổi các phần tử liền kề</li>
          <li>Sử dụng con trỏ để truy cập phần tử</li>
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
              <strong>Thử thách:</strong> Hãy thực hành các bài tập trên và thử nghiệm với các kích thước mảng khác nhau. Đừng quên vẽ sơ đồ để hiểu rõ cách con trỏ di chuyển trong mảng!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointerArrays;
