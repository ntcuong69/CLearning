import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const BasicStructure = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn nhận diện các thành phần cơ bản của một chương trình C, hiểu vai trò của từng phần và biết cách viết chương trình đầu tiên.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Thành phần cơ bản của chương trình C</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Header files</b>: Khai báo thư viện tiêu chuẩn, ví dụ <code>#include &lt;stdio.h&gt;</code> để sử dụng hàm nhập/xuất.</li>
        <li><b>Hàm <code>main()</code></b>: Điểm bắt đầu chương trình, mọi chương trình C đều phải có.</li>
        <li><b>Khai báo biến</b>: Định nghĩa các biến sẽ sử dụng trong chương trình.</li>
        <li><b>Các lệnh thực thi</b>: Các câu lệnh thực hiện nhiệm vụ cụ thể.</li>
        <li><b>Chú thích</b>: Giải thích mã nguồn, giúp code dễ hiểu hơn, không ảnh hưởng đến chương trình.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> <br/>
        - Mọi chương trình C đều phải có hàm <b>main()</b>.<br/>
        - Để in ra màn hình, cần nạp thư viện <b>stdio.h</b> và dùng <b>printf()</b>.<br/>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Ví dụ chương trình C đơn giản</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h> // Thư viện nhập xuất chuẩn

// Hàm main là điểm bắt đầu chương trình
int main() {
    // In ra màn hình dòng chữ Hello World!
    printf("Hello World!\\n");
    return 0; // Kết thúc chương trình
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
          <span className="text-blue-400">$</span> gcc hello.c -o hello<br/>
          <span className="text-blue-400">$</span> ./hello<br/>
          <span className="text-white">Hello World!</span><br/>
        </div>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300 rounded-lg bg-white">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-2 border-b text-left font-semibold text-blue-700">Dòng code</th>
              <th className="px-4 py-2 border-b text-left font-semibold text-blue-700">Giải thích</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-base">
            <tr>
              <td className="px-4 py-2 border-b font-mono">#include &lt;stdio.h&gt;</td>
              <td className="px-4 py-2 border-b">Nạp thư viện chuẩn để dùng hàm <code>printf()</code>.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">// Hàm main là điểm bắt đầu chương trình</td>
              <td className="px-4 py-2 border-b">Chú thích, không ảnh hưởng đến chương trình.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">int main()</td>
              <td className="px-4 py-2 border-b">Hàm chính, nơi chương trình bắt đầu thực thi.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">// In ra màn hình dòng chữ Hello World!</td>
              <td className="px-4 py-2 border-b">Chú thích cho dòng lệnh tiếp theo.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">printf(&quot;Hello World!\n&quot;);</td>
              <td className="px-4 py-2 border-b">Hàm in dữ liệu ra màn hình, <code>\n</code> là ký tự xuống dòng.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b font-mono">return 0;</td>
              <td className="px-4 py-2 border-b">Kết thúc chương trình, trả về mã thành công cho hệ điều hành.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Quên dấu <code>;</code> ở cuối câu lệnh</li>
          <li>Viết sai tên hàm <code>main</code> (ví dụ: <code>Main</code>, <code>MAIN</code>)</li>
          <li>Thiếu dấu ngoặc nhọn <code>{ }</code> bao quanh thân hàm</li>
          <li>Không nạp thư viện <code>#include &lt;stdio.h&gt;</code> nên không dùng được <code>printf()</code></li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Mỗi câu lệnh phải kết thúc bằng dấu <code>;</code></li>
          <li>Hàm <code>main()</code> là bắt buộc trong mọi chương trình C</li>
          <li>Chú thích giúp code dễ hiểu hơn, dùng <code>//</code> cho 1 dòng hoặc <code>/* ... */</code> cho nhiều dòng</li>
          <li>Hãy tự gõ lại chương trình trên, thử thay đổi nội dung <code>printf()</code> và thêm chú thích để hiểu rõ hơn.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập: Viết chương trình C in ra tên của bạn</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    printf("Tên của tôi là ...\\n"); // Thay ... bằng tên của bạn
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Tổng kết & Ghi nhớ</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Một chương trình C cơ bản gồm: nạp thư viện, hàm <b>main()</b>, khai báo biến, các lệnh thực thi và chú thích.</li>
          <li>Luôn kiểm tra cú pháp, dấu <code>;</code> và tên hàm <code>main</code> khi biên dịch bị lỗi.</li>
          <li>Thực hành viết nhiều chương trình nhỏ để thành thạo cấu trúc cơ bản.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Nắm vững cấu trúc cơ bản là nền tảng để học các phần nâng cao của C!
      </div>
    </div>
  );
};
export default BasicStructure;
