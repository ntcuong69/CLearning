import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const OperatorsInC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về các loại toán tử trong C, cách sử dụng chúng để thực hiện các phép toán và điều khiển luồng chương trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Toán tử là gì?</h2>
      <p className="mb-4">
        Toán tử là các ký hiệu đặc biệt được sử dụng để thực hiện các phép toán trên các toán hạng (operands). Toán tử giúp chúng ta thực hiện các phép tính, so sánh, gán giá trị và điều khiển luồng chương trình.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> Trong biểu thức <code>a + b</code>, <code>+</code> là toán tử, <code>a</code> và <code>b</code> là các toán hạng.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các loại toán tử</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Toán tử số học (Arithmetic Operators)</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Toán tử</th>
              <th className="border border-gray-300 px-4 py-2">Ý nghĩa</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ</th>
              <th className="border border-gray-300 px-4 py-2">Kết quả</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>+</code></td>
              <td className="border border-gray-300 px-4 py-2">Cộng</td>
              <td className="border border-gray-300 px-4 py-2"><code>5 + 3</code></td>
              <td className="border border-gray-300 px-4 py-2">8</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>-</code></td>
              <td className="border border-gray-300 px-4 py-2">Trừ</td>
              <td className="border border-gray-300 px-4 py-2"><code>10 - 4</code></td>
              <td className="border border-gray-300 px-4 py-2">6</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>*</code></td>
              <td className="border border-gray-300 px-4 py-2">Nhân</td>
              <td className="border border-gray-300 px-4 py-2"><code>6 * 7</code></td>
              <td className="border border-gray-300 px-4 py-2">42</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>/</code></td>
              <td className="border border-gray-300 px-4 py-2">Chia</td>
              <td className="border border-gray-300 px-4 py-2"><code>15 / 3</code></td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>%</code></td>
              <td className="border border-gray-300 px-4 py-2">Chia lấy dư</td>
              <td className="border border-gray-300 px-4 py-2"><code>17 % 5</code></td>
              <td className="border border-gray-300 px-4 py-2">2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    printf("a = %d, b = %d\\n", a, b);
    printf("a + b = %d\\n", a + b);    // 13
    printf("a - b = %d\\n", a - b);    // 7
    printf("a * b = %d\\n", a * b);    // 30
    printf("a / b = %d\\n", a / b);    // 3 (chia nguyên)
    printf("a %% b = %d\\n", a % b);   // 1 (chia lấy dư)
    
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
          <span className="text-blue-400">$</span> gcc arithmetic.c -o arithmetic<br/>
          <span className="text-blue-400">$</span> ./arithmetic<br/>
          <span className="text-white">a = 10, b = 3</span><br/>
          <span className="text-white">a + b = 13</span><br/>
          <span className="text-white">a - b = 7</span><br/>
          <span className="text-white">a * b = 30</span><br/>
          <span className="text-white">a / b = 3</span><br/>
          <span className="text-white">a % b = 1</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Toán tử quan hệ (Relational Operators)</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Toán tử</th>
              <th className="border border-gray-300 px-4 py-2">Ý nghĩa</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ</th>
              <th className="border border-gray-300 px-4 py-2">Kết quả</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>==</code></td>
              <td className="border border-gray-300 px-4 py-2">Bằng</td>
              <td className="border border-gray-300 px-4 py-2"><code>5 == 5</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>!=</code></td>
              <td className="border border-gray-300 px-4 py-2">Khác</td>
              <td className="border border-gray-300 px-4 py-2"><code>5 != 3</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&gt;</code></td>
              <td className="border border-gray-300 px-4 py-2">Lớn hơn</td>
              <td className="border border-gray-300 px-4 py-2"><code>10 &gt; 5</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&lt;</code></td>
              <td className="border border-gray-300 px-4 py-2">Nhỏ hơn</td>
              <td className="border border-gray-300 px-4 py-2"><code>3 &lt; 7</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&gt;=</code></td>
              <td className="border border-gray-300 px-4 py-2">Lớn hơn hoặc bằng</td>
              <td className="border border-gray-300 px-4 py-2"><code>5 &gt;= 5</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&lt;=</code></td>
              <td className="border border-gray-300 px-4 py-2">Nhỏ hơn hoặc bằng</td>
              <td className="border border-gray-300 px-4 py-2"><code>4 &lt;= 6</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Toán tử logic (Logical Operators)</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Toán tử</th>
              <th className="border border-gray-300 px-4 py-2">Ý nghĩa</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ</th>
              <th className="border border-gray-300 px-4 py-2">Kết quả</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&&</code></td>
              <td className="border border-gray-300 px-4 py-2">VÀ (AND)</td>
              <td className="border border-gray-300 px-4 py-2"><code>1 && 1</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>||</code></td>
              <td className="border border-gray-300 px-4 py-2">HOẶC (OR)</td>
              <td className="border border-gray-300 px-4 py-2"><code>1 || 0</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>!</code></td>
              <td className="border border-gray-300 px-4 py-2">PHỦ ĐỊNH (NOT)</td>
              <td className="border border-gray-300 px-4 py-2"><code>!0</code></td>
              <td className="border border-gray-300 px-4 py-2">1 (true)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int age = 25;
    int score = 85;
    
    // Kiểm tra điều kiện phức hợp
    if (age >= 18 && score >= 80) {
        printf("Đủ điều kiện nhận học bổng\\n");
    }
    
    if (age < 18 || score < 60) {
        printf("Không đủ điều kiện\\n");
    }
    
    if (!(age < 18)) {
        printf("Đã đủ tuổi\\n");
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
          <span className="text-blue-400">$</span> gcc logical.c -o logical<br/>
          <span className="text-blue-400">$</span> ./logical<br/>
          <span className="text-white">Đủ điều kiện nhận học bổng</span><br/>
          <span className="text-white">Đã đủ tuổi</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. Toán tử gán (Assignment Operators)</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Toán tử</th>
              <th className="border border-gray-300 px-4 py-2">Ý nghĩa</th>
              <th className="border border-gray-300 px-4 py-2">Tương đương với</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>=</code></td>
              <td className="border border-gray-300 px-4 py-2">Gán</td>
              <td className="border border-gray-300 px-4 py-2"><code>a = 5</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>+=</code></td>
              <td className="border border-gray-300 px-4 py-2">Cộng và gán</td>
              <td className="border border-gray-300 px-4 py-2"><code>a += 3</code> tương đương <code>a = a + 3</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>-=</code></td>
              <td className="border border-gray-300 px-4 py-2">Trừ và gán</td>
              <td className="border border-gray-300 px-4 py-2"><code>a -= 2</code> tương đương <code>a = a - 2</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>*=</code></td>
              <td className="border border-gray-300 px-4 py-2">Nhân và gán</td>
              <td className="border border-gray-300 px-4 py-2"><code>a *= 4</code> tương đương <code>a = a * 4</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>/=</code></td>
              <td className="border border-gray-300 px-4 py-2">Chia và gán</td>
              <td className="border border-gray-300 px-4 py-2"><code>a /= 2</code> tương đương <code>a = a / 2</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>%=</code></td>
              <td className="border border-gray-300 px-4 py-2">Chia lấy dư và gán</td>
              <td className="border border-gray-300 px-4 py-2"><code>a %= 3</code> tương đương <code>a = a % 3</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">5. Toán tử tăng/giảm (Increment/Decrement)</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int a = 5;
    
    printf("Giá trị ban đầu: a = %d\\n", a);
    
    // Tăng trước (++a)
    printf("++a = %d\\n", ++a);  // a = 6, in ra 6
    printf("Sau ++a: a = %d\\n", a);
    
    // Tăng sau (a++)
    printf("a++ = %d\\n", a++);  // in ra 6, sau đó a = 7
    printf("Sau a++: a = %d\\n", a);
    
    // Giảm trước (--a)
    printf("--a = %d\\n", --a);  // a = 6, in ra 6
    printf("Sau --a: a = %d\\n", a);
    
    // Giảm sau (a--)
    printf("a-- = %d\\n", a--);  // in ra 6, sau đó a = 5
    printf("Sau a--: a = %d\\n", a);
    
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
          <span className="text-blue-400">$</span> gcc increment.c -o increment<br/>
          <span className="text-blue-400">$</span> ./increment<br/>
          <span className="text-white">Giá trị ban đầu: a = 5</span><br/>
          <span className="text-white">++a = 6</span><br/>
          <span className="text-white">Sau ++a: a = 6</span><br/>
          <span className="text-white">a++ = 6</span><br/>
          <span className="text-white">Sau a++: a = 7</span><br/>
          <span className="text-white">--a = 6</span><br/>
          <span className="text-white">Sau --a: a = 6</span><br/>
          <span className="text-white">a-- = 6</span><br/>
          <span className="text-white">Sau a--: a = 5</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Thứ tự ưu tiên toán tử</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <h4 className="font-semibold mb-2">Thứ tự ưu tiên (từ cao đến thấp):</h4>
        <ol className="list-decimal pl-6">
          <li><code>()</code> - Dấu ngoặc</li>
          <li><code>++</code>, <code>--</code> - Tăng/giảm</li>
          <li><code>*</code>, <code>/</code>, <code>%</code> - Nhân, chia, chia lấy dư</li>
          <li><code>+</code>, <code>-</code> - Cộng, trừ</li>
          <li><code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code> - So sánh</li>
          <li><code>==</code>, <code>!=</code> - So sánh bằng</li>
          <li><code>&&</code> - VÀ logic</li>
          <li><code>||</code> - HOẶC logic</li>
          <li><code>=</code>, <code>+=</code>, <code>-=</code>, ... - Gán</li>
        </ol>
      </div>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int a = 2, b = 3, c = 4;
    
    // Thứ tự ưu tiên quan trọng
    int result1 = a + b * c;        // 2 + (3 * 4) = 2 + 12 = 14
    int result2 = (a + b) * c;      // (2 + 3) * 4 = 5 * 4 = 20
    
    printf("a + b * c = %d\\n", result1);
    printf("(a + b) * c = %d\\n", result2);
    
    // Toán tử logic
    int x = 5, y = 10;
    int logical_result = x < y && y > 0;  // (5 < 10) && (10 > 0) = 1 && 1 = 1
    
    printf("x < y && y > 0 = %d\\n", logical_result);
    
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
          <span className="text-blue-400">$</span> gcc precedence.c -o precedence<br/>
          <span className="text-blue-400">$</span> ./precedence<br/>
          <span className="text-white">a + b * c = 14</span><br/>
          <span className="text-white">(a + b) * c = 20</span><br/>
          <span className="text-white">x {'<'} y {'&&'} y {'>'} 0 = 1</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Ví dụ thực tế</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    // Tính điểm trung bình
    float math = 8.5, physics = 7.8, chemistry = 9.2;
    float average = (math + physics + chemistry) / 3;
    
    printf("Điểm trung bình: %.2f\\n", average);
    
    // Kiểm tra điều kiện học bổng
    if (average >= 8.0 && math >= 8.0) {
        printf("Đủ điều kiện nhận học bổng!\\n");
    } else {
        printf("Chưa đủ điều kiện học bổng.\\n");
    }
    
    // Đếm số lần lặp
    int count = 0;
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {  // Số chẵn
            count++;
        }
    }
    printf("Có %d số chẵn từ 1 đến 10\\n", count);
    
    // Tính lũy thừa
    int base = 2, power = 5;
    int result = 1;
    for (int i = 0; i < power; i++) {
        result *= base;
    }
    printf("%d^%d = %d\\n", base, power, result);
    
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
          <span className="text-blue-400">$</span> gcc practical.c -o practical<br/>
          <span className="text-blue-400">$</span> ./practical<br/>
          <span className="text-white">Điểm trung bình: 8.50</span><br/>
          <span className="text-white">Đủ điều kiện nhận học bổng!</span><br/>
          <span className="text-white">Có 5 số chẵn từ 1 đến 10</span><br/>
          <span className="text-white">2^5 = 32</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Nhầm lẫn <code>=</code> và <code>==</code>:</b> Dùng <code>=</code> thay vì <code>==</code> trong điều kiện</li>
          <li><b>Chia cho 0:</b> Gây lỗi runtime khi chia cho 0</li>
          <li><b>Thứ tự ưu tiên:</b> Không dùng dấu ngoặc khi cần thiết</li>
          <li><b>Tràn số:</b> Kết quả vượt quá phạm vi kiểu dữ liệu</li>
          <li><b>So sánh số thực:</b> Dùng <code>==</code> để so sánh số thực</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn dùng dấu ngoặc để làm rõ thứ tự ưu tiên</li>
          <li>Kiểm tra chia cho 0 trước khi thực hiện phép chia</li>
          <li>Dùng <code>fabs()</code> để so sánh số thực</li>
          <li>Hiểu rõ sự khác biệt giữa <code>++a</code> và <code>a++</code></li>
          <li>Thực hành với nhiều ví dụ để làm quen với các toán tử</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold mb-2">Bài tập 1:</h4>
        <p>Viết chương trình kiểm tra một số có phải là số chẵn và chia hết cho 3 không.</p>
        
        <h4 className="font-semibold mb-2 mt-4">Bài tập 2:</h4>
        <p>Viết chương trình tính diện tích hình tròn và kiểm tra xem có lớn hơn 100 không.</p>
        
        <h4 className="font-semibold mb-2 mt-4">Bài tập 3:</h4>
        <p>Viết chương trình tìm số lớn nhất trong 3 số được nhập từ bàn phím.</p>
        
        <h4 className="font-semibold mb-2 mt-4">Bài tập 4:</h4>
        <p>Viết chương trình kiểm tra một năm có phải là năm nhuận không.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Toán tử là công cụ mạnh mẽ để thực hiện các phép toán và điều khiển luồng chương trình. Hãy thực hành nhiều để làm quen với cách sử dụng chúng một cách hiệu quả!
      </div>
    </div>
  );
};

export default OperatorsInC;
