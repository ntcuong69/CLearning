import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const CharacterStrings = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu rõ về <b>chuỗi ký tự (string)</b> trong C: cách khai báo, khởi tạo, nhập xuất, các hàm thao tác chuỗi cơ bản, lỗi thường gặp và bài tập thực hành. Đây là kiến thức quan trọng để xử lý văn bản, dữ liệu đầu vào, tên, mã số,... trong lập trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và ý nghĩa</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Chuỗi ký tự</b> là một dãy các ký tự liên tiếp nhau, kết thúc bởi ký tự đặc biệt <code>'\0'</code> (null character).</li>
        <li>Trong C, chuỗi thực chất là một mảng 1 chiều các ký tự (<code>char</code>).</li>
        <li>Chuỗi thường dùng để lưu tên, địa chỉ, mã số, văn bản,...</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> Lưu tên sinh viên, nhập mật khẩu, xử lý dữ liệu đầu vào dạng text, ...
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Khai báo và khởi tạo chuỗi</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp khai báo</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`char tên_chuỗi[kích_thước];`}</SyntaxHighlighter>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li><b>tên_chuỗi</b>: Tên biến chuỗi do bạn đặt</li>
        <li><b>kích_thước</b>: Số ký tự tối đa (bao gồm cả ký tự '\0')</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b>
        <SyntaxHighlighter language="c">{`char name[20]; // Chuỗi tối đa 19 ký tự + 1 ký tự '\\0'
char password[30];`}</SyntaxHighlighter>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Khởi tạo chuỗi</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`char s1[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
char s2[] = "Hello"; // Tự động thêm '\\0' cuối chuỗi`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Ký tự thoát trong chuỗi</h3>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ký tự thoát</b> (escape sequence) là các ký tự đặc biệt bắt đầu bằng dấu <code>\</code> dùng để biểu diễn các ký tự không thể gõ trực tiếp hoặc có ý nghĩa đặc biệt trong chuỗi.<br/>
        Một số escape sequence thường dùng trong C:
      </div>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300 rounded-lg bg-white text-base">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-2 border-b text-left font-semibold text-blue-700">Escape</th>
              <th className="px-4 py-2 border-b text-left font-semibold text-blue-700">Ý nghĩa</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr>
              <td className="px-4 py-2 border-b font-mono">{"\\n"}</td>
              <td className="px-4 py-2 border-b">Xuống dòng mới</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">{"\\t"}</td>
              <td className="px-4 py-2 border-b">Tab ngang</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">{"\\\\"}</td>
              <td className="px-4 py-2 border-b">Dấu gạch chéo ngược (\)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">{"\\\""}</td>
              <td className="px-4 py-2 border-b">Dấu nháy kép (")</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">{"\\'"}</td>
              <td className="px-4 py-2 border-b">Dấu nháy đơn (')</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">{"\\0"}</td>
              <td className="px-4 py-2 border-b">Ký tự null (kết thúc chuỗi)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <b>Lưu ý:</b> Khi in chuỗi chứa ký tự đặc biệt, luôn dùng escape sequence. Nếu quên <code>\\</code> sẽ gây lỗi cú pháp hoặc kết quả không như mong muốn.<br/>
        <b>Ví dụ:</b>
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    printf("Dòng 1\\nDòng 2\\n");
    printf("C:\\\\Program Files\\\\");
    printf("\\"Xin chào!\\"\\n");
    return 0;
}`}</SyntaxHighlighter>
      </div>
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc escape.c -o escape<br/>
          <span className="text-blue-400">$</span> ./escape<br/>
          <span className="text-white">Dòng 1</span><br/>
          <span className="text-white">Dòng 2</span><br/>
          <span className="text-white">C:\Program Files\</span><br/>
          <span className="text-white">"Xin chào!"</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Nhập và xuất chuỗi</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Nhập chuỗi bằng <code>scanf</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    char name[20];
    printf("Nhập tên: ");
    scanf("%s", name); // Dừng khi gặp khoảng trắng
    printf("Xin chào, %s!\\n", name);
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
          <span className="text-blue-400">$</span> gcc scanf_str.c -o scanf_str<br/>
          <span className="text-blue-400">$</span> ./scanf_str<br/>
          <span className="text-white">Nhập tên: Alice</span><br/>
          <span className="text-white">Xin chào, Alice!</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Nhập chuỗi có khoảng trắng bằng <code>gets</code> (không khuyến khích) hoặc <code>fgets</code></h3>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <b>Lưu ý:</b> <b>Không nên dùng <code>gets</code></b> vì hàm này <b>không kiểm soát được số ký tự nhập vào</b>, dễ gây <b>tràn bộ nhớ (buffer overflow)</b> và là lỗ hổng bảo mật nghiêm trọng. <br/>
        <b>fgets</b> an toàn hơn vì bạn chỉ định được số ký tự tối đa có thể nhập.
      </div>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    char line[50];
    printf("Nhập một dòng: ");
    fgets(line, sizeof(line), stdin); // Đọc cả dòng, kể cả khoảng trắng
    printf("Bạn vừa nhập: %s", line);
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
          <span className="text-blue-400">$</span> gcc fgets_str.c -o fgets_str<br/>
          <span className="text-blue-400">$</span> ./fgets_str<br/>
          <span className="text-white">Nhập một dòng: Hello world 123</span><br/>
          <span className="text-white">Bạn vừa nhập: Hello world 123</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Một số hàm thao tác chuỗi cơ bản</h2>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Về thư viện <code>string.h</code>:</b> Đây là thư viện chuẩn của C cung cấp các hàm thao tác với chuỗi như <code>strlen</code>, <code>strcpy</code>, <code>strcat</code>, <code>strcmp</code>,... Để sử dụng các hàm này, bạn cần thêm <code>#include &lt;string.h&gt;</code> ở đầu chương trình.
      </div>
      <ul className="list-disc pl-6 mb-4">
        <li><b>strlen(s)</b>: Trả về độ dài chuỗi (không tính '\0')</li>
        <li><b>strcpy(dest, src)</b>: Sao chép chuỗi <code>src</code> sang <code>dest</code></li>
        <li><b>strcat(dest, src)</b>: Nối chuỗi <code>src</code> vào cuối <code>dest</code></li>
        <li><b>strcmp(s1, s2)</b>: So sánh hai chuỗi (trả về 0 nếu giống nhau)</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Độ dài chuỗi với <code>strlen</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char s[50] = "Hello, world!";
    printf("Độ dài chuỗi: %lu\\n", strlen(s));
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
          <span className="text-blue-400">$</span> gcc strlen_ex.c -o strlen_ex<br/>
          <span className="text-blue-400">$</span> ./strlen_ex<br/>
          <span className="text-white">Độ dài chuỗi: 13</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Sao chép chuỗi với <code>strcpy</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello";
    char dest[20];
    strcpy(dest, src);
    printf("Chuỗi dest: %s\\n", dest);
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
          <span className="text-blue-400">$</span> gcc strcpy_ex.c -o strcpy_ex<br/>
          <span className="text-blue-400">$</span> ./strcpy_ex<br/>
          <span className="text-white">Chuỗi dest: Hello</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Nối chuỗi với <code>strcat</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char s1[30] = "Hello";
    char s2[] = " world";
    strcat(s1, s2);
    printf("Sau khi nối: %s\\n", s1);
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
          <span className="text-blue-400">$</span> gcc strcat_ex.c -o strcat_ex<br/>
          <span className="text-blue-400">$</span> ./strcat_ex<br/>
          <span className="text-white">Sau khi nối: Hello world</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. So sánh chuỗi với <code>strcmp</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char s1[] = "abc";
    char s2[] = "abc";
    char s3[] = "xyz";
    printf("So sánh s1 và s2: %d\\n", strcmp(s1, s2));
    printf("So sánh s1 và s3: %d\\n", strcmp(s1, s3));
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
          <span className="text-blue-400">$</span> gcc strcmp_ex.c -o strcmp_ex<br/>
          <span className="text-blue-400">$</span> ./strcmp_ex<br/>
          <span className="text-white">So sánh s1 và s2: 0</span><br/>
          <span className="text-white">So sánh s1 và s3: -23</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Quên ký tự '\0':</b> Chuỗi không kết thúc đúng sẽ gây lỗi hoặc in ra ký tự rác.</li>
          <li><b>Tràn bộ nhớ:</b> Nhập chuỗi dài hơn kích thước mảng.</li>
          <li><b>Dùng gets:</b> <b>Không an toàn, dễ gây lỗi tràn bộ nhớ và bị khai thác bảo mật</b> (nên dùng <code>fgets</code>).</li>
          <li><b>So sánh chuỗi bằng ==:</b> Không so sánh nội dung, chỉ so sánh địa chỉ.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn khai báo đủ kích thước cho chuỗi (bao gồm '\0')</li>
          <li>Dùng fgets thay cho gets để nhập chuỗi an toàn</li>
          <li>Dùng các hàm trong string.h để thao tác chuỗi</li>
          <li>Thực hành với nhiều dạng bài toán: nhập tên, nối chuỗi, kiểm tra chuỗi đối xứng, ...</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Nhập tên và in ra tên đảo ngược</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    printf("Nhập tên: ");
    scanf("%s", name);
    int len = strlen(name);
    printf("Tên đảo ngược: ");
    for (int i = len - 1; i >= 0; i--) {
        printf("%c", name[i]);
    }
    printf("\n");
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
          <span className="text-blue-400">$</span> gcc reverse_name.c -o reverse_name<br/>
          <span className="text-blue-400">$</span> ./reverse_name<br/>
          <span className="text-white">Nhập tên: Alice</span><br/>
          <span className="text-white">Tên đảo ngược: ecilA</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Đếm số từ trong một câu (dùng fgets)</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char line[100];
    printf("Nhập một câu: ");
    fgets(line, sizeof(line), stdin);
    int count = 0, inWord = 0;
    for (int i = 0; line[i] != '\\0'; i++) {
        if (!isspace(line[i]) && line[i] != '\\n') {
            if (!inWord) {
                count++;
                inWord = 1;
            }
        } else {
            inWord = 0;
        }
    }
    printf("Số từ: %d\\n", count);
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
          <span className="text-blue-400">$</span> gcc word_count.c -o word_count<br/>
          <span className="text-blue-400">$</span> ./word_count<br/>
          <span className="text-white">Nhập một câu: Hello world 123</span><br/>
          <span className="text-white">Số từ: 3</span><br/>
        </div>
      </div>
    </div>
  );
};

export default CharacterStrings;
