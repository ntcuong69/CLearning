import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const BasicAlgorithms = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Trong bài này, bạn sẽ học về các <b>thuật toán cơ bản</b> trong lập trình: tìm giá trị lớn nhất/nhỏ nhất (max/min), đếm (counting), sắp xếp (sorting), và tìm kiếm (searching). Đây là nền tảng cho mọi kỹ năng giải quyết vấn đề bằng code!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tìm giá trị lớn nhất/nhỏ nhất (max/min)</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, a[100];
    printf("Nhập số phần tử: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);
    int max = a[0], min = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > max) max = a[i];
        if (a[i] < min) min = a[i];
    }
    printf("Max = %d, Min = %d\n", max, min);
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
          <span className="text-blue-400">$</span> gcc maxmin.c -o maxmin<br/>
          <span className="text-blue-400">$</span> ./maxmin<br/>
          <span className="text-white">Nhập số phần tử: 5</span><br/>
          <span className="text-white">1 7 3 9 2</span><br/>
          <span className="text-white">Max = 9, Min = 1</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Đếm số lượng phần tử (Counting)</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Đếm số chẵn trong mảng
int count = 0;
for (int i = 0; i < n; i++) {
    if (a[i] % 2 == 0) count++;
}
printf("Có %d số chẵn\n", count);`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Sắp xếp mảng (Bubble Sort)</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Sắp xếp tăng dần bằng Bubble Sort
for (int i = 0; i < n-1; i++) {
    for (int j = 0; j < n-i-1; j++) {
        if (a[j] > a[j+1]) {
            int tmp = a[j];
            a[j] = a[j+1];
            a[j+1] = tmp;
        }
    }
}
printf("Mảng sau khi sắp xếp: ");
for (int i = 0; i < n; i++) printf("%d ", a[i]);
printf("\n");`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Tìm kiếm tuyến tính (Linear Search)</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int x, found = 0;
printf("Nhập giá trị cần tìm: ");
scanf("%d", &x);
for (int i = 0; i < n; i++) {
    if (a[i] == x) {
        printf("Tìm thấy tại vị trí %d\n", i);
        found = 1;
        break;
    }
}
if (!found) printf("Không tìm thấy!\n");`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Tìm kiếm nhị phân (Binary Search)</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Mảng phải được sắp xếp tăng dần trước khi tìm kiếm nhị phân!
      </div>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int left = 0, right = n-1, mid, x, found = 0;
printf("Nhập giá trị cần tìm: ");
scanf("%d", &x);
while (left <= right) {
    mid = (left + right) / 2;
    if (a[mid] == x) {
        printf("Tìm thấy tại vị trí %d\n", mid);
        found = 1;
        break;
    } else if (a[mid] < x) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
if (!found) printf("Không tìm thấy!\n");`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Lỗi thường gặp & Lưu ý</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Quên khởi tạo max/min bằng phần tử đầu tiên</li>
          <li>So sánh sai dấu trong bubble sort</li>
          <li>Quên break trong tìm kiếm tuyến tính</li>
          <li>Dùng binary search cho mảng chưa sắp xếp</li>
        </ul>
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <b>Lưu ý:</b>
        <ul className="list-disc pl-6 text-green-700 mt-2">
          <li>Luôn kiểm tra dữ liệu đầu vào</li>
          <li>Thử với nhiều bộ test khác nhau</li>
          <li>Viết hàm riêng cho từng thuật toán để code gọn hơn</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Tìm max/min và đếm số âm</h3>
      <p className="mb-4">Viết chương trình nhập mảng n số nguyên, in ra max, min và đếm số phần tử âm.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng biến đếm, so sánh max/min</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Sắp xếp và tìm kiếm</h3>
      <p className="mb-4">Viết chương trình nhập mảng n số nguyên, sắp xếp tăng dần, sau đó cho phép người dùng nhập giá trị và tìm kiếm bằng binary search.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng bubble sort và binary search</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thử viết hàm tổng quát cho các thuật toán trên để tái sử dụng nhiều lần!
      </div>
    </div>
  );
};

export default BasicAlgorithms;
