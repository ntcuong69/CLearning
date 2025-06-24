import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const WhileDoWhile = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về <b>vòng lặp while</b> và <b>do-while</b> trong C, cách sử dụng để lặp lại một khối lệnh khi điều kiện còn đúng, cùng với ví dụ minh họa, giải thích chi tiết và hướng dẫn thực hành.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và ý nghĩa</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>while</b>: Lặp lại khối lệnh khi điều kiện còn đúng. Kiểm tra điều kiện trước khi thực hiện.</li>
        <li><b>do-while</b>: Luôn thực hiện khối lệnh ít nhất một lần, sau đó kiểm tra điều kiện để lặp tiếp.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> Nhập số cho đến khi đúng, in ra các số nhỏ hơn 10, tính tổng dãy số chưa biết trước số lần lặp.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cú pháp cơ bản</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Vòng lặp while</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`while (điều_kiện) {
    // Khối lệnh được lặp lại
}`}</SyntaxHighlighter>
      </pre>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Vòng lặp do-while</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`do {
    // Khối lệnh được lặp lại
} while (điều_kiện);`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ví dụ minh họa</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. In các số từ 1 đến 5 bằng while</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("%d ", i);
        i++;
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
          <span className="text-blue-400">$</span> gcc while1.c -o while1<br/>
          <span className="text-blue-400">$</span> ./while1<br/>
          <span className="text-white">1 2 3 4 5 </span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. In các số từ 1 đến 5 bằng do-while</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("%d ", i);
        i++;
    } while (i <= 5);
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
          <span className="text-blue-400">$</span> gcc dowhile1.c -o dowhile1<br/>
          <span className="text-blue-400">$</span> ./dowhile1<br/>
          <span className="text-white">1 2 3 4 5 </span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Nhập số cho đến khi nhập số dương</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n;
    do {
        printf("Nhập số nguyên dương: ");
        scanf("%d", &n);
    } while (n <= 0);
    printf("Bạn đã nhập: %d\\n", n);
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
          <span className="text-blue-400">$</span> gcc inputpos.c -o inputpos<br/>
          <span className="text-blue-400">$</span> ./inputpos<br/>
          <span className="text-white">Nhập số nguyên dương: -2</span><br/>
          <span className="text-white">Nhập số nguyên dương: 0</span><br/>
          <span className="text-white">Nhập số nguyên dương: 5</span><br/>
          <span className="text-white">Bạn đã nhập: 5</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. So sánh while và do-while</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>while</b>: Có thể không thực hiện lần nào nếu điều kiện sai ngay từ đầu.</li>
          <li><b>do-while</b>: Luôn thực hiện ít nhất một lần, sau đó mới kiểm tra điều kiện.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Quên cập nhật biến lặp:</b> Dẫn đến vòng lặp vô hạn.</li>
          <li><b>Điều kiện sai:</b> Vòng lặp không chạy hoặc chạy sai số lần.</li>
          <li><b>Không dùng ngoặc nhọn:</b> Dễ gây lỗi khi thêm nhiều lệnh vào khối lặp.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Tính tổng các số chẵn nhỏ hơn n bằng while</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, sum = 0, i = 0;
    printf("Nhập n: ");
    scanf("%d", &n);
    while (i < n) {
        if (i % 2 == 0) sum += i;
        i++;
    }
    printf("Tổng các số chẵn nhỏ hơn %d là %d\\n", n, sum);
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
          <span className="text-blue-400">$</span> gcc evenwhile.c -o evenwhile<br/>
          <span className="text-blue-400">$</span> ./evenwhile<br/>
          <span className="text-white">Nhập n: 10</span><br/>
          <span className="text-white">Tổng các số chẵn nhỏ hơn 10 là 20</span><br/>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Đếm số chữ số của một số nguyên dương bằng do-while</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, count = 0;
    printf("Nhập số nguyên dương: ");
    scanf("%d", &n);
    do {
        count++;
        n /= 10;
    } while (n > 0);
    printf("Số chữ số: %d\\n", count);
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
          <span className="text-blue-400">$</span> gcc countdigit.c -o countdigit<br/>
          <span className="text-blue-400">$</span> ./countdigit<br/>
          <span className="text-white">Nhập số nguyên dương: 12345</span><br/>
          <span className="text-white">Số chữ số: 5</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết & Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>while và do-while phù hợp khi chưa biết trước số lần lặp.</li>
          <li>Luôn cập nhật biến lặp đúng cách để tránh vòng lặp vô hạn.</li>
          <li>Thực hành với nhiều dạng bài toán: nhập dữ liệu, kiểm tra điều kiện, xử lý số liệu.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Hãy luyện tập nhiều với while và do-while để thành thạo kỹ năng lập trình lặp trong C!
      </div>
    </div>
  );
};

export default WhileDoWhile;
