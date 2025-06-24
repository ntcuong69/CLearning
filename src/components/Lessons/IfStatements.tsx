import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const IfStatements = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về câu lệnh điều kiện trong C, cách sử dụng if, if-else và if-else if-else để điều khiển luồng thực thi của chương trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tại sao cần câu lệnh điều kiện?</h2>
      <p className="mb-4">
        Câu lệnh điều kiện cho phép chương trình thực hiện các hành động khác nhau dựa trên điều kiện đúng hay sai. Đây là một trong những khái niệm cơ bản nhất trong lập trình, giúp tạo ra các chương trình thông minh và linh hoạt.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> Chương trình kiểm tra điểm số để quyết định đậu/rớt, hoặc kiểm tra tuổi để xác định quyền truy cập.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Câu lệnh if đơn giản</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp cơ bản</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`if (điều_kiện) {
    // Khối lệnh được thực hiện nếu điều kiện đúng
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ minh họa</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int number = 10;
    
    if (number % 2 == 0) {
        printf("%d là số chẵn\\n", number);
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
          <span className="text-blue-400">$</span> gcc if_example.c -o if_example<br/>
          <span className="text-blue-400">$</span> ./if_example<br/>
          <span className="text-white">10 là số chẵn</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Câu lệnh if-else</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`if (điều_kiện) {
    // Khối lệnh được thực hiện nếu điều kiện đúng
} else {
    // Khối lệnh được thực hiện nếu điều kiện sai
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ: Kiểm tra số chẵn lẻ</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int number = 7;
    
    if (number % 2 == 0) {
        printf("%d là số chẵn\\n", number);
    } else {
        printf("%d là số lẻ\\n", number);
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
          <span className="text-blue-400">$</span> gcc even_odd.c -o even_odd<br/>
          <span className="text-blue-400">$</span> ./even_odd<br/>
          <span className="text-white">7 là số lẻ</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Câu lệnh if-else if-else (nhiều điều kiện)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`if (điều_kiện_1) {
    // Thực hiện nếu điều_kiện_1 đúng
} else if (điều_kiện_2) {
    // Thực hiện nếu điều_kiện_2 đúng
} else if (điều_kiện_3) {
    // Thực hiện nếu điều_kiện_3 đúng
} else {
    // Thực hiện nếu tất cả điều kiện trên đều sai
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ: Xếp loại học lực</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    float score = 7.5;
    
    if (score >= 9.0) {
        printf("Điểm %.1f: Xuất sắc\\n", score);
    } else if (score >= 8.0) {
        printf("Điểm %.1f: Giỏi\\n", score);
    } else if (score >= 7.0) {
        printf("Điểm %.1f: Khá\\n", score);
    } else if (score >= 5.0) {
        printf("Điểm %.1f: Trung bình\\n", score);
    } else {
        printf("Điểm %.1f: Yếu\\n", score);
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
          <span className="text-blue-400">$</span> gcc grade.c -o grade<br/>
          <span className="text-blue-400">$</span> ./grade<br/>
          <span className="text-white">Điểm 7.5: Khá</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Các toán tử so sánh</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Toán tử</th>
              <th className="border border-gray-300 px-4 py-2">Ý nghĩa</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>==</code></td>
              <td className="border border-gray-300 px-4 py-2">Bằng</td>
              <td className="border border-gray-300 px-4 py-2"><code>a == b</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>!=</code></td>
              <td className="border border-gray-300 px-4 py-2">Khác</td>
              <td className="border border-gray-300 px-4 py-2"><code>a != b</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&gt;</code></td>
              <td className="border border-gray-300 px-4 py-2">Lớn hơn</td>
              <td className="border border-gray-300 px-4 py-2"><code>a &gt; b</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&lt;</code></td>
              <td className="border border-gray-300 px-4 py-2">Nhỏ hơn</td>
              <td className="border border-gray-300 px-4 py-2"><code>a &lt; b</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&gt;=</code></td>
              <td className="border border-gray-300 px-4 py-2">Lớn hơn hoặc bằng</td>
              <td className="border border-gray-300 px-4 py-2"><code>a &gt;= b</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>&lt;=</code></td>
              <td className="border border-gray-300 px-4 py-2">Nhỏ hơn hoặc bằng</td>
              <td className="border border-gray-300 px-4 py-2"><code>a &lt;= b</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Kiểm tra số nguyên dương, âm hoặc bằng 0</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int number;
    
    printf("Nhập một số nguyên: ");
    scanf("%d", &number);
    
    if (number > 0) {
        printf("%d là số nguyên dương\\n", number);
    } else if (number < 0) {
        printf("%d là số nguyên âm\\n", number);
    } else {
        printf("%d bằng 0\\n", number);
    }
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Tính tiền điện theo bậc thang</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int kWh;
    float bill;
    
    printf("Nhập số kWh tiêu thụ: ");
    scanf("%d", &kWh);
    
    if (kWh <= 50) {
        bill = kWh * 1500;  // 1500 VND/kWh cho 50 kWh đầu
    } else if (kWh <= 100) {
        bill = 50 * 1500 + (kWh - 50) * 2000;  // 2000 VND/kWh cho kWh thứ 51-100
    } else {
        bill = 50 * 1500 + 50 * 2000 + (kWh - 100) * 2500;  // 2500 VND/kWh cho kWh > 100
    }
    
    printf("Tiền điện: %.0f VND\\n", bill);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Dấu = và ==:</b> <code>=</code> là phép gán, <code>==</code> là phép so sánh bằng. Đây là lỗi phổ biến của người mới học!</li>
          <li><b>Thiếu dấu ngoặc nhọn:</b> Luôn sử dụng dấu ngoặc nhọn {} cho khối lệnh, ngay cả khi chỉ có một lệnh</li>
          <li><b>Thứ tự kiểm tra:</b> Trong if-else if-else, các điều kiện được kiểm tra từ trên xuống dưới. Chỉ khối lệnh đầu tiên có điều kiện đúng được thực hiện</li>
          <li><b>Điều kiện phức tạp:</b> Tránh viết điều kiện quá phức tạp, nên chia nhỏ thành nhiều điều kiện đơn giản</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VIII. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn sử dụng dấu ngoặc nhọn {} cho khối lệnh, giúp code dễ đọc và tránh lỗi</li>
          <li>Kiểm tra điều kiện từ đơn giản đến phức tạp trong if-else if-else</li>
          <li>Sử dụng comment để giải thích logic của điều kiện phức tạp</li>
          <li>Test chương trình với nhiều trường hợp khác nhau</li>
          <li>Thực hành với các bài toán thực tế để hiểu rõ cách sử dụng</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Câu lệnh điều kiện là nền tảng của lập trình. Hãy thực hành nhiều với các ví dụ đơn giản trước khi làm bài tập phức tạp. Đặc biệt chú ý đến sự khác biệt giữa <code>=</code> và <code>==</code>!
      </div>
    </div>
  );
};

export default IfStatements;
