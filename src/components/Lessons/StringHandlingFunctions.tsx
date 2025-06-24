import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const StringHandlingFunctions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về các hàm xử lý chuỗi trong C, cách sử dụng thư viện string.h để thao tác với chuỗi một cách hiệu quả và an toàn.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Lưu ý quan trọng:</strong> Để sử dụng các hàm xử lý chuỗi, bạn cần include thư viện <code>string.h</code> vào đầu chương trình.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tại sao cần các hàm xử lý chuỗi?</h2>
      <p className="mb-4">
        Trong lập trình, chuỗi là một trong những kiểu dữ liệu được sử dụng phổ biến nhất. Các hàm xử lý chuỗi giúp chúng ta:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        <li>So sánh chuỗi một cách chính xác</li>
        <li>Nối chuỗi an toàn</li>
        <li>Tìm kiếm ký tự hoặc chuỗi con</li>
        <li>Đo độ dài chuỗi</li>
        <li>Sao chép chuỗi</li>
        <li>Chuyển đổi chuỗi</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các hàm cơ bản trong string.h</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. strlen() - Đo độ dài chuỗi</h3>
      <p className="mb-3">Trả về số ký tự trong chuỗi (không tính ký tự null '\0').</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello World";
    int length = strlen(str);
    
    printf("Chuỗi: %s\\n", str);
    printf("Độ dài: %d\\n", length);
    
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
          <span className="text-blue-400">$</span> gcc strlen_example.c -o strlen_example<br/>
          <span className="text-blue-400">$</span> ./strlen_example<br/>
          <span className="text-white">Chuỗi: Hello World</span><br/>
          <span className="text-white">Độ dài: 11</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. strcpy() - Sao chép chuỗi</h3>
      <p className="mb-3">Sao chép nội dung từ chuỗi nguồn sang chuỗi đích.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Hello C Programming";
    char destination[50];
    
    strcpy(destination, source);
    
    printf("Chuỗi nguồn: %s\\n", source);
    printf("Chuỗi đích: %s\\n", destination);
    
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
          <span className="text-blue-400">$</span> gcc strcpy_example.c -o strcpy_example<br/>
          <span className="text-blue-400">$</span> ./strcpy_example<br/>
          <span className="text-white">Chuỗi nguồn: Hello C Programming</span><br/>
          <span className="text-white">Chuỗi đích: Hello C Programming</span><br/>
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
              <strong>Cảnh báo:</strong> Đảm bảo chuỗi đích có đủ không gian để chứa chuỗi nguồn, nếu không sẽ gây tràn bộ nhớ (buffer overflow).
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. strcat() - Nối chuỗi</h3>
      <p className="mb-3">Nối chuỗi nguồn vào cuối chuỗi đích.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Hello ";
    char str2[] = "World!";
    
    strcat(str1, str2);
    
    printf("Kết quả: %s\\n", str1);
    
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
          <span className="text-blue-400">$</span> gcc strcat_example.c -o strcat_example<br/>
          <span className="text-blue-400">$</span> ./strcat_example<br/>
          <span className="text-white">Kết quả: Hello World!</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. strcmp() - So sánh chuỗi</h3>
      <p className="mb-3">So sánh hai chuỗi theo thứ tự từ điển. Trả về 0 nếu bằng nhau, số âm nếu str1 &lt; str2, số dương nếu str1 &gt; str2.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "apple";
    char str2[] = "apple";
    char str3[] = "banana";
    
    printf("So sánh 'apple' với 'apple': %d\\n", strcmp(str1, str2));
    printf("So sánh 'apple' với 'banana': %d\\n", strcmp(str1, str3));
    printf("So sánh 'banana' với 'apple': %d\\n", strcmp(str3, str1));
    
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
          <span className="text-blue-400">$</span> gcc strcmp_example.c -o strcmp_example<br/>
          <span className="text-blue-400">$</span> ./strcmp_example<br/>
          <span className="text-white">So sánh 'apple' với 'apple': 0</span><br/>
          <span className="text-white">So sánh 'apple' với 'banana': -1</span><br/>
          <span className="text-white">So sánh 'banana' với 'apple': 1</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Các hàm tìm kiếm</h2>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. strchr() - Tìm ký tự trong chuỗi</h3>
      <p className="mb-3">Tìm vị trí đầu tiên của ký tự trong chuỗi. Trả về con trỏ đến ký tự đó hoặc NULL nếu không tìm thấy.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello World";
    char *ptr = strchr(str, 'o');
    
    if (ptr != NULL) {
        printf("Tìm thấy 'o' tại vị trí: %ld\\n", ptr - str);
        printf("Chuỗi từ vị trí đó: %s\\n", ptr);
    } else {
        printf("Không tìm thấy ký tự 'o'\\n");
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
          <span className="text-blue-400">$</span> gcc strchr_example.c -o strchr_example<br/>
          <span className="text-blue-400">$</span> ./strchr_example<br/>
          <span className="text-white">Tìm thấy 'o' tại vị trí: 4</span><br/>
          <span className="text-white">Chuỗi từ vị trí đó: o World</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. strstr() - Tìm chuỗi con</h3>
      <p className="mb-3">Tìm vị trí đầu tiên của chuỗi con trong chuỗi chính.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello World Programming";
    char *ptr = strstr(str, "World");
    
    if (ptr != NULL) {
        printf("Tìm thấy 'World' tại vị trí: %ld\\n", ptr - str);
        printf("Chuỗi từ vị trí đó: %s\\n", ptr);
    } else {
        printf("Không tìm thấy chuỗi con\\n");
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
          <span className="text-blue-400">$</span> gcc strstr_example.c -o strstr_example<br/>
          <span className="text-blue-400">$</span> ./strstr_example<br/>
          <span className="text-white">Tìm thấy 'World' tại vị trí: 6</span><br/>
          <span className="text-white">Chuỗi từ vị trí đó: World Programming</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Các hàm an toàn</h2>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. strncpy() - Sao chép với giới hạn</h3>
      <p className="mb-3">Sao chép tối đa n ký tự từ chuỗi nguồn sang chuỗi đích.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Hello World";
    char destination[20];
    
    strncpy(destination, source, 5);
    destination[5] = '\\0'; // Đảm bảo kết thúc chuỗi
    
    printf("Chuỗi nguồn: %s\\n", source);
    printf("Chuỗi đích (5 ký tự): %s\\n", destination);
    
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
          <span className="text-blue-400">$</span> gcc strncpy_example.c -o strncpy_example<br/>
          <span className="text-blue-400">$</span> ./strncpy_example<br/>
          <span className="text-white">Chuỗi nguồn: Hello World</span><br/>
          <span className="text-white">Chuỗi đích (5 ký tự): Hello</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. strncat() - Nối chuỗi với giới hạn</h3>
      <p className="mb-3">Nối tối đa n ký tự từ chuỗi nguồn vào cuối chuỗi đích.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Hello ";
    char str2[] = "World Programming";
    
    strncat(str1, str2, 5); // Chỉ nối 5 ký tự đầu
    
    printf("Kết quả: %s\\n", str1);
    
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
          <span className="text-blue-400">$</span> gcc strncat_example.c -o strncat_example<br/>
          <span className="text-blue-400">$</span> ./strncat_example<br/>
          <span className="text-white">Kết quả: Hello World</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Bảng tóm tắt các hàm quan trọng</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Hàm</th>
              <th className="border border-gray-300 px-4 py-2">Mô tả</th>
              <th className="border border-gray-300 px-4 py-2">Cú pháp</th>
              <th className="border border-gray-300 px-4 py-2">Giá trị trả về</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>strlen()</code></td>
              <td className="border border-gray-300 px-4 py-2">Đo độ dài chuỗi</td>
              <td className="border border-gray-300 px-4 py-2"><code>strlen(str)</code></td>
              <td className="border border-gray-300 px-4 py-2">size_t (số ký tự)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>strcpy()</code></td>
              <td className="border border-gray-300 px-4 py-2">Sao chép chuỗi</td>
              <td className="border border-gray-300 px-4 py-2"><code>strcpy(dest, src)</code></td>
              <td className="border border-gray-300 px-4 py-2">char* (con trỏ đến dest)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>strcat()</code></td>
              <td className="border border-gray-300 px-4 py-2">Nối chuỗi</td>
              <td className="border border-gray-300 px-4 py-2"><code>strcat(dest, src)</code></td>
              <td className="border border-gray-300 px-4 py-2">char* (con trỏ đến dest)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>strcmp()</code></td>
              <td className="border border-gray-300 px-4 py-2">So sánh chuỗi</td>
              <td className="border border-gray-300 px-4 py-2"><code>strcmp(str1, str2)</code></td>
              <td className="border border-gray-300 px-4 py-2">int (0, âm, dương)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>strchr()</code></td>
              <td className="border border-gray-300 px-4 py-2">Tìm ký tự</td>
              <td className="border border-gray-300 px-4 py-2"><code>strchr(str, ch)</code></td>
              <td className="border border-gray-300 px-4 py-2">char* hoặc NULL</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>strstr()</code></td>
              <td className="border border-gray-300 px-4 py-2">Tìm chuỗi con</td>
              <td className="border border-gray-300 px-4 py-2"><code>strstr(str, substr)</code></td>
              <td className="border border-gray-300 px-4 py-2">char* hoặc NULL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Đếm từ trong chuỗi</h3>
      <p className="mb-3">Viết chương trình đếm số từ trong một chuỗi (từ được phân cách bởi khoảng trắng).</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-green-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int countWords(char str[]) {
    int count = 0;
    int len = strlen(str);
    int inWord = 0;
    
    for (int i = 0; i < len; i++) {
        if (str[i] != ' ' && str[i] != '\\t' && str[i] != '\\n') {
            if (!inWord) {
                count++;
                inWord = 1;
            }
        } else {
            inWord = 0;
        }
    }
    
    return count;
}

int main() {
    char str[100];
    printf("Nhập chuỗi: ");
    scanf(" %[^\\n]", str);
    
    printf("Số từ trong chuỗi: %d\\n", countWords(str));
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Kiểm tra chuỗi palindrome</h3>
      <p className="mb-3">Viết chương trình kiểm tra xem một chuỗi có phải là palindrome hay không (đọc xuôi và ngược giống nhau).</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-green-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int isPalindrome(char str[]) {
    int len = strlen(str);
    int start = 0;
    int end = len - 1;
    
    while (start < end) {
        if (str[start] != str[end]) {
            return 0; // Không phải palindrome
        }
        start++;
        end--;
    }
    
    return 1; // Là palindrome
}

int main() {
    char str[100];
    printf("Nhập chuỗi: ");
    scanf(" %[^\\n]", str);
    
    if (isPalindrome(str)) {
        printf("'%s' là chuỗi palindrome\\n", str);
    } else {
        printf("'%s' không phải chuỗi palindrome\\n", str);
    }
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Lưu ý quan trọng</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Mẹo:</strong> Luôn kiểm tra kích thước buffer trước khi sử dụng strcpy() và strcat() để tránh buffer overflow.
            </p>
          </div>
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
              <strong>Cảnh báo:</strong> Các hàm strcpy(), strcat() không kiểm tra giới hạn buffer. Sử dụng strncpy(), strncat() để an toàn hơn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringHandlingFunctions;
