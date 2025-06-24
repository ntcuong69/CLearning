import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const ForLoop = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về <b>vòng lặp for</b> trong C, cách sử dụng để lặp lại một khối lệnh nhiều lần, cùng với ví dụ minh họa, giải thích chi tiết và hướng dẫn thực hành.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và ý nghĩa</h2>
      <p className="mb-4">
        <b>Vòng lặp for</b> là cấu trúc lặp phổ biến nhất trong C, cho phép thực hiện một khối lệnh lặp đi lặp lại với số lần xác định trước. Thường dùng khi biết trước số lần lặp.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> In ra các số từ 1 đến 10, tính tổng 100 số đầu tiên, duyệt qua các phần tử của mảng.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cú pháp cơ bản</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`for (khởi_tạo; điều_kiện; cập_nhật) {
    // Khối lệnh được lặp lại
}`}</SyntaxHighlighter>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li><b>khởi_tạo</b>: Gán giá trị ban đầu cho biến lặp.</li>
        <li><b>điều_kiện</b>: Kiểm tra điều kiện lặp (nếu đúng thì lặp tiếp, sai thì dừng).</li>
        <li><b>cập_nhật</b>: Thay đổi giá trị biến lặp sau mỗi vòng lặp.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ví dụ minh họa</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. In các số từ 1 đến 5</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
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
          <span className="text-blue-400">$</span> gcc for1.c -o for1<br/>
          <span className="text-blue-400">$</span> ./for1<br/>
          <span className="text-white">1 2 3 4 5 </span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Tính tổng các số từ 1 đến n</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Nhập n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    printf("Tổng từ 1 đến %d là %d\\n", n, sum);
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
          <span className="text-blue-400">$</span> gcc sum.c -o sum<br/>
          <span className="text-blue-400">$</span> ./sum<br/>
          <span className="text-white">Nhập n: 5</span><br/>
          <span className="text-white">Tổng từ 1 đến 5 là 15</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Duyệt mảng và in các phần tử</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int arr[5] = {2, 4, 6, 8, 10};
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
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
          <span className="text-blue-400">$</span> gcc array.c -o array<br/>
          <span className="text-blue-400">$</span> ./array<br/>
          <span className="text-white">2 4 6 8 10 </span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Giải thích từng phần</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Khởi tạo:</b> Thường là <code>int i = 0</code> hoặc <code>int i = 1</code> tùy bài toán.</li>
          <li><b>Điều kiện:</b> Kiểm tra trước mỗi vòng lặp. Nếu đúng thì thực hiện, sai thì dừng.</li>
          <li><b>Cập nhật:</b> Thường là <code>i++</code> (tăng 1), có thể là <code>i--</code> hoặc thay đổi khác.</li>
          <li><b>Khối lệnh lặp:</b> Có thể là 1 hoặc nhiều câu lệnh, nên dùng ngoặc nhọn <code>{}</code> để bao quanh.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Quên cập nhật biến lặp:</b> Dẫn đến vòng lặp vô hạn.</li>
          <li><b>Điều kiện sai:</b> Vòng lặp không chạy hoặc chạy sai số lần.</li>
          <li><b>Chỉ dùng <code>i++</code>:</b> Có thể dùng <code>i+=2</code>, <code>i--</code> tùy yêu cầu.</li>
          <li><b>Không dùng ngoặc nhọn:</b> Dễ gây lỗi khi thêm nhiều lệnh vào khối lặp.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: In bảng cửu chương 5</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        printf("5 x %d = %d\\n", i, 5*i);
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
          <span className="text-blue-400">$</span> gcc bang5.c -o bang5<br/>
          <span className="text-blue-400">$</span> ./bang5<br/>
          <span className="text-white">5 x 1 = 5</span><br/>
          <span className="text-white">5 x 2 = 10</span><br/>
          <span className="text-white">5 x 3 = 15</span><br/>
          <span className="text-white">5 x 4 = 20</span><br/>
          <span className="text-white">5 x 5 = 25</span><br/>
          <span className="text-white">5 x 6 = 30</span><br/>
          <span className="text-white">5 x 7 = 35</span><br/>
          <span className="text-white">5 x 8 = 40</span><br/>
          <span className="text-white">5 x 9 = 45</span><br/>
          <span className="text-white">5 x 10 = 50</span><br/>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Tính giai thừa của n</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, gt = 1;
    printf("Nhập n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        gt *= i;
    }
    printf("Giai thừa của %d là %d\\n", n, gt);
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
          <span className="text-blue-400">$</span> gcc gt.c -o gt<br/>
          <span className="text-blue-400">$</span> ./gt<br/>
          <span className="text-white">Nhập n: 5</span><br/>
          <span className="text-white">Giai thừa của 5 là 120</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết & Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Vòng lặp for rất mạnh mẽ, dùng khi biết trước số lần lặp.</li>
          <li>Luôn kiểm tra điều kiện và cập nhật biến lặp đúng cách.</li>
          <li>Dùng ngoặc nhọn cho khối lệnh lặp để tránh lỗi.</li>
          <li>Thực hành với nhiều dạng bài toán: tính tổng, duyệt mảng, in bảng, ...</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Hãy luyện tập nhiều với vòng lặp for để thành thạo kỹ năng lập trình cơ bản này!
      </div>
    </div>
  );
};

export default ForLoop;
