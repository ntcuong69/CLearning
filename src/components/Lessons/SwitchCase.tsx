import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const SwitchCase = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về câu lệnh <b>switch-case</b> trong C, cách sử dụng để thay thế nhiều lệnh <b>if-else</b> khi kiểm tra giá trị của một biến, cùng với ví dụ minh họa và giải thích chi tiết.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và ý nghĩa</h2>
      <p className="mb-4">
        <b>switch-case</b> là một cấu trúc điều khiển cho phép kiểm tra giá trị của một biến (thường là số nguyên hoặc ký tự) và thực hiện các khối lệnh khác nhau tùy theo từng giá trị cụ thể. <br/>
        Khi có nhiều lựa chọn rẽ nhánh dựa trên giá trị, <b>switch-case</b> giúp code gọn gàng, dễ đọc hơn so với nhiều lệnh <b>if-else</b> lồng nhau.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Lưu ý:</b> <b>switch</b> chỉ so sánh giá trị bằng (==), không dùng cho điều kiện phức tạp.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cú pháp cơ bản</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`switch (biến) {
    case giá_trị_1:
        // Khối lệnh 1
        break;
    case giá_trị_2:
        // Khối lệnh 2
        break;
    ...
    default:
        // Khối lệnh mặc định nếu không khớp case nào
}`}</SyntaxHighlighter>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li><b>biến</b>: Biến cần kiểm tra giá trị (thường là int, char).</li>
        <li><b>case</b>: Mỗi nhánh kiểm tra một giá trị cụ thể.</li>
        <li><b>break</b>: Kết thúc nhánh, tránh thực hiện tiếp các case sau (nếu thiếu sẽ bị "rơi qua").</li>
        <li><b>default</b>: (Tùy chọn) Thực hiện nếu không có case nào khớp.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ví dụ minh họa</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Ví dụ đơn giản: In ngày trong tuần</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            printf("Chủ nhật\\n");
            break;
        case 2:
            printf("Thứ hai\\n");
            break;
        case 3:
            printf("Thứ ba\\n");
            break;
        case 4:
            printf("Thứ tư\\n");
            break;
        case 5:
            printf("Thứ năm\\n");
            break;
        case 6:
            printf("Thứ sáu\\n");
            break;
        case 7:
            printf("Thứ bảy\\n");
            break;
        default:
            printf("Giá trị không hợp lệ\\n");
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
          <span className="text-blue-400">$</span> gcc week.c -o week<br/>
          <span className="text-blue-400">$</span> ./week<br/>
          <span className="text-white">Thứ ba</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ: Kiểm tra ký tự nguyên âm, phụ âm</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    char c = 'e';
    
    switch (c) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            printf("%c là nguyên âm\\n", c);
            break;
        default:
            printf("%c là phụ âm\\n", c);
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
          <span className="text-blue-400">$</span> gcc vowel.c -o vowel<br/>
          <span className="text-blue-400">$</span> ./vowel<br/>
          <span className="text-white">e là nguyên âm</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Lưu ý khi dùng switch-case</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Thiếu break:</b> Nếu không có <code>break</code>, chương trình sẽ thực hiện tiếp các case sau (gọi là "fall-through").</li>
          <li><b>Chỉ dùng cho so sánh bằng:</b> Không dùng được cho điều kiện lớn hơn, nhỏ hơn, hoặc phức tạp.</li>
          <li><b>Giá trị case phải là hằng số:</b> Không dùng biến hoặc biểu thức phức tạp trong case.</li>
          <li><b>default là tùy chọn:</b> Nhưng nên có để xử lý trường hợp không khớp case nào.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập: Xếp loại học lực theo điểm</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int score;
    printf("Nhập điểm (0-10): ");
    scanf("%d", &score);
    
    switch (score) {
        case 10:
        case 9:
            printf("Xuất sắc\\n");
            break;
        case 8:
        case 7:
            printf("Khá\\n");
            break;
        case 6:
        case 5:
            printf("Trung bình\\n");
            break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            printf("Yếu\\n");
            break;
        default:
            printf("Điểm không hợp lệ\\n");
    }
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Tổng kết</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>switch-case</b> giúp code gọn gàng, dễ đọc khi có nhiều nhánh kiểm tra giá trị.</li>
          <li>Chỉ nên dùng khi kiểm tra giá trị rời rạc, không dùng cho điều kiện phức tạp.</li>
          <li>Luôn kiểm tra kỹ <code>break</code> để tránh lỗi "rơi qua".</li>
          <li>Nên có <code>default</code> để xử lý trường hợp không khớp case nào.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Hãy sử dụng <b>switch-case</b> khi cần kiểm tra giá trị của một biến với nhiều trường hợp cụ thể. Thực hành nhiều với các ví dụ để hiểu rõ cách hoạt động và tránh lỗi thường gặp!
      </div>
    </div>
  );
};

export default SwitchCase;
