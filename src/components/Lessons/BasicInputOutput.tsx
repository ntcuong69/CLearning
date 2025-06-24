import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const BasicInputOutput = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn nắm vững cách nhập dữ liệu từ bàn phím và xuất dữ liệu ra màn hình trong ngôn ngữ lập trình C, sử dụng các hàm <code>printf</code> và <code>scanf</code>. Đây là kiến thức nền tảng để bạn có thể giao tiếp với chương trình và kiểm tra kết quả xử lý dữ liệu.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Xuất dữ liệu với <code>printf</code></h2>
      <p className="mb-4">
        <code>printf</code> là hàm dùng để in dữ liệu ra màn hình. Đây là cách phổ biến nhất để hiển thị thông tin cho người dùng.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Cú pháp:</b> <code>printf("định_dạng", biến1, biến2, ...);</code>
      </div>
      <p className="mb-2">Trong đó <b>"định_dạng"</b> là chuỗi chứa văn bản và các ký hiệu đặc biệt (format specifier) để in giá trị biến.</p>
      <ul className="list-disc pl-6 mb-4">
        <li><b>%d</b>: Số nguyên</li>
        <li><b>%f</b>: Số thực (float/double)</li>
        <li><b>%c</b>: Ký tự</li>
        <li><b>%s</b>: Chuỗi ký tự</li>
      </ul>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int age = 20;
printf("Tuổi của bạn là: %d\\n", age);`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Nhập dữ liệu với <code>scanf</code></h2>
      <p className="mb-4">
        <code>scanf</code> cho phép chương trình nhận dữ liệu từ bàn phím. Bạn cần truyền địa chỉ biến (dùng <code>&</code>) để lưu giá trị nhập vào.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Cú pháp:</b> <code>scanf("định_dạng", &biến1, &biến2, ...);</code>
      </div>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int age;
printf("Nhập tuổi của bạn: ");
scanf("%d", &age);`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <b>Lưu ý:</b> Với <code>scanf</code>, luôn dùng <code>&</code> trước tên biến (trừ chuỗi ký tự).
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Bảng các format specifier phổ biến</h2>
      <p className="mb-4">
        <b>Format specifier</b> (ký hiệu định dạng) là các ký tự đặc biệt bắt đầu bằng dấu <code>%</code> trong chuỗi định dạng của <code>printf</code> hoặc <code>scanf</code>. Chúng cho biết kiểu dữ liệu của biến mà bạn muốn in ra hoặc nhập vào (ví dụ: <code>%d</code> cho số nguyên, <code>%f</code> cho số thực, <code>%s</code> cho chuỗi ký tự, ...). Việc sử dụng đúng format specifier giúp chương trình hiển thị và nhận dữ liệu chính xác, tránh lỗi khi chạy.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Specifier</th>
              <th className="border border-gray-300 px-4 py-2">Ý nghĩa</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>%d</code></td>
              <td className="border border-gray-300 px-4 py-2">Số nguyên (int)</td>
              <td className="border border-gray-300 px-4 py-2">42</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>%f</code></td>
              <td className="border border-gray-300 px-4 py-2">Số thực (float)</td>
              <td className="border border-gray-300 px-4 py-2">3.14</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>%lf</code></td>
              <td className="border border-gray-300 px-4 py-2">Số thực kép (double)</td>
              <td className="border border-gray-300 px-4 py-2">2.71828</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>%c</code></td>
              <td className="border border-gray-300 px-4 py-2">Ký tự (char)</td>
              <td className="border border-gray-300 px-4 py-2">'A'</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>%s</code></td>
              <td className="border border-gray-300 px-4 py-2">Chuỗi ký tự</td>
              <td className="border border-gray-300 px-4 py-2">"Hello"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Escape Sequence (Ký tự thoát)</h2>
      <p className="mb-4">Escape sequence là các ký tự đặc biệt bắt đầu bằng dấu <code>\</code> dùng để điều khiển định dạng xuất/nhập.</p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Escape</th>
              <th className="border border-gray-300 px-4 py-2">Ý nghĩa</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ sử dụng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>\n</code></td>
              <td className="border border-gray-300 px-4 py-2">Xuống dòng mới</td>
              <td className="border border-gray-300 px-4 py-2">printf("Hello\nWorld");</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>\t</code></td>
              <td className="border border-gray-300 px-4 py-2">Tab ngang</td>
              <td className="border border-gray-300 px-4 py-2">printf("A\tB");</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>\\</code></td>
              <td className="border border-gray-300 px-4 py-2">In ra dấu \</td>
              <td className="border border-gray-300 px-4 py-2">printf("C:\\Program Files\\");</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>\"</code></td>
              <td className="border border-gray-300 px-4 py-2">In ra dấu "</td>
              <td className="border border-gray-300 px-4 py-2">printf("\"Xin chào!\"");</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Ví dụ minh họa tổng hợp</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int age;
    float height;
    char name[30];

    printf("Nhập tên của bạn: ");
    scanf("%s", name);
    printf("Nhập tuổi: ");
    scanf("%d", &age);
    printf("Nhập chiều cao (m): ");
    scanf("%f", &height);

    printf("\\nXin chào %s!\\n", name);
    printf("Tuổi: %d\\n", age);
    printf("Chiều cao: %.2f m\\n", height);
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
          <span className="text-blue-400">$</span> gcc input_output.c -o input_output<br/>
          <span className="text-blue-400">$</span> ./input_output<br/>
          <span className="text-white">Nhập tên của bạn: An</span><br/>
          <span className="text-white">Nhập tuổi: 20</span><br/>
          <span className="text-white">Nhập chiều cao (m): 1.65</span><br/>
          <br/>
          <span className="text-white">Xin chào An!</span><br/>
          <span className="text-white">Tuổi: 20</span><br/>
          <span className="text-white">Chiều cao: 1.65 m</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Quên dùng <code>&</code> trong <code>scanf</code> (trừ chuỗi)</li>
          <li>Nhập sai kiểu dữ liệu (ví dụ nhập chữ cho <code>%d</code>)</li>
          <li>Dùng sai format specifier (<code>%d</code> cho <code>float</code>...)</li>
          <li>Quên <code>\n</code> nên các dòng bị dính vào nhau</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn kiểm tra kỹ format specifier khi nhập/xuất dữ liệu</li>
          <li>Dùng <code>\n</code> để xuống dòng, <code>\t</code> để căn lề đẹp</li>
          <li>Thực hành nhập xuất với nhiều kiểu dữ liệu khác nhau</li>
          <li>Thử nhập dữ liệu sai để xem chương trình báo lỗi gì</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Thành thạo nhập xuất là bước đầu để bạn có thể xây dựng các chương trình tương tác với người dùng. Hãy luyện tập thật nhiều với <code>printf</code> và <code>scanf</code>!
      </div>
    </div>
  );
};

export default BasicInputOutput;
