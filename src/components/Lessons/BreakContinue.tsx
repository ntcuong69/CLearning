import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const BreakContinue = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu rõ về hai câu lệnh đặc biệt <b>break</b> và <b>continue</b> trong C, cách sử dụng chúng để điều khiển luồng thực thi trong các vòng lặp (<b>for</b>, <b>while</b>, <b>do-while</b>) và <b>switch-case</b>. Bạn sẽ biết khi nào nên dùng, cú pháp, ví dụ minh họa, lỗi thường gặp và thực hành với các bài tập thực tế.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và ý nghĩa</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>break</b>: Dùng để kết thúc ngay lập tức vòng lặp hoặc khối <b>switch-case</b> chứa nó, chuyển quyền điều khiển ra ngoài vòng lặp/khối đó.</li>
        <li><b>continue</b>: Dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo (nếu điều kiện còn đúng).</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> <br/>
        - Khi tìm thấy phần tử cần thiết trong mảng, dùng <b>break</b> để dừng tìm kiếm.<br/>
        - Khi muốn bỏ qua các số lẻ và chỉ xử lý số chẵn trong vòng lặp, dùng <b>continue</b>.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cú pháp và cách dùng</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Câu lệnh <code>break</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`break;`}</SyntaxHighlighter>
      </pre>
      <p className="mb-4">Thường dùng trong <b>for</b>, <b>while</b>, <b>do-while</b> và <b>switch-case</b>.</p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Câu lệnh <code>continue</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`continue;`}</SyntaxHighlighter>
      </pre>
      <p className="mb-4">Chỉ dùng trong các vòng lặp (<b>for</b>, <b>while</b>, <b>do-while</b>).</p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ví dụ</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Dùng <code>break</code> trong vòng lặp for</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break;
        }
        printf("%d ", i);
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
          <span className="text-blue-400">$</span> gcc break1.c -o break1<br/>
          <span className="text-blue-400">$</span> ./break1<br/>
          <span className="text-white">1 2 3 4 </span><br/>
        </div>
      </div>
      <p className="mb-4">Khi <code>i == 5</code>, câu lệnh <code>break</code> được thực hiện, vòng lặp kết thúc ngay lập tức.</p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Dùng <code>continue</code> trong vòng lặp for</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;
        }
        printf("%d ", i);
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
          <span className="text-blue-400">$</span> gcc continue1.c -o continue1<br/>
          <span className="text-blue-400">$</span> ./continue1<br/>
          <span className="text-white">1 2 4 5 </span><br/>
        </div>
      </div>
      <p className="mb-4">Khi <code>i == 3</code>, <code>continue</code> bỏ qua lệnh <code>printf</code> và chuyển sang lần lặp tiếp theo.</p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Dùng <code>break</code> trong <code>switch-case</code></h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int day = 2;
    switch (day) {
        case 1:
            printf("Chủ nhật\\n");
            break;
        case 2:
            printf("Thứ hai\\n");
            break;
        default:
            printf("Ngày không hợp lệ\\n");
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
          <span className="text-blue-400">$</span> gcc switchbreak.c -o switchbreak<br/>
          <span className="text-blue-400">$</span> ./switchbreak<br/>
          <span className="text-white">Thứ hai</span><br/>
        </div>
      </div>
      <p className="mb-4">Nếu thiếu <code>break</code>, chương trình sẽ thực hiện tiếp các case sau (fall-through).</p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. Dùng <code>break</code> và <code>continue</code> trong vòng lặp while</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        i++;
        if (i == 3) continue;
        if (i == 5) break;
        printf("%d ", i);
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
          <span className="text-blue-400">$</span> gcc breakcont.c -o breakcont<br/>
          <span className="text-blue-400">$</span> ./breakcont<br/>
          <span className="text-white">1 2 4 </span><br/>
        </div>
      </div>
      <p className="mb-4">Khi <code>i == 3</code>, <code>continue</code> bỏ qua <code>printf</code>. Khi <code>i == 5</code>, <code>break</code> kết thúc vòng lặp.</p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Dùng break ngoài vòng lặp hoặc switch-case:</b> Sẽ gây lỗi biên dịch.</li>
          <li><b>Dùng continue ngoài vòng lặp:</b> Sẽ gây lỗi biên dịch.</li>
          <li><b>Quên break trong switch-case:</b> Dẫn đến "rơi qua" các case tiếp theo.</li>
          <li><b>Dùng break quá sớm:</b> Có thể làm vòng lặp kết thúc trước khi hoàn thành nhiệm vụ.</li>
          <li><b>Dùng continue không đúng chỗ:</b> Có thể bỏ qua các lệnh quan trọng trong vòng lặp.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Chỉ dùng <b>break</b> khi thực sự cần dừng vòng lặp hoặc switch-case.</li>
          <li>Dùng <b>continue</b> để bỏ qua các trường hợp đặc biệt, giúp code gọn hơn.</li>
          <li>Luôn kiểm tra kỹ vị trí đặt break/continue để tránh lỗi logic.</li>
          <li>Thực hành với nhiều ví dụ để hiểu rõ tác động của break và continue.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Tìm số đầu tiên chia hết cho 7 trong dãy 1-100</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            printf("Số đầu tiên chia hết cho 7 là %d\\n", i);
            break;
        }
    }
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: In ra các số chẵn từ 1 đến 20 (dùng continue)</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 20; i++) {
        if (i % 2 != 0) continue;
        printf("%d ", i);
    }
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Nhập dãy số, dừng khi gặp số âm (dùng break)</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n;
    while (1) {
        printf("Nhập số (âm để dừng): ");
        scanf("%d", &n);
        if (n < 0) break;
        printf("Bạn vừa nhập: %d\\n", n);
    }
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết & Ghi nhớ</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>break</b> và <b>continue</b> giúp điều khiển linh hoạt luồng thực thi trong vòng lặp và switch-case.</li>
          <li>Dùng đúng lúc sẽ giúp code ngắn gọn, hiệu quả và dễ hiểu hơn.</li>
          <li>Luôn kiểm tra kỹ vị trí đặt break/continue để tránh lỗi logic.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Hãy luyện tập nhiều với break và continue để thành thạo kỹ năng điều khiển luồng chương trình trong C!
      </div>
    </div>
  );
};

export default BreakContinue;
