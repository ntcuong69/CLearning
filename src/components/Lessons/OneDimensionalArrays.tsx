import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const OneDimensionalArrays = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu rõ về <b>mảng 1 chiều</b> trong C: cách khai báo, khởi tạo, truy cập, nhập xuất dữ liệu, ứng dụng thực tế, các lỗi thường gặp và bài tập thực hành. Đây là kiến thức nền tảng để xử lý dữ liệu hàng loạt trong lập trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và ý nghĩa</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Mảng (Array)</b> là tập hợp các phần tử cùng kiểu dữ liệu, được lưu trữ liên tiếp trong bộ nhớ và truy cập qua chỉ số (index).</li>
        <li>Mảng giúp lưu trữ, xử lý nhiều giá trị cùng lúc mà không cần khai báo nhiều biến riêng lẻ.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> Lưu điểm của 30 học sinh, lưu dãy số Fibonacci, xử lý dữ liệu cảm biến, ...
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Khai báo và khởi tạo mảng</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp khai báo</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`kiểu_dữ_liệu tên_mảng[kích_thước];`}</SyntaxHighlighter>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li><b>kiểu_dữ_liệu</b>: Kiểu dữ liệu của các phần tử (int, float, char, ...)</li>
        <li><b>tên_mảng</b>: Tên mảng do bạn đặt</li>
        <li><b>kích_thước</b>: Số lượng phần tử (phải là hằng số nguyên dương)</li>
      </ul>
        <b>Ví dụ:</b> 
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <SyntaxHighlighter language="c">
            {`int a[10]; // Mảng 10 số nguyên
float scores[30]; // Mảng 30 số thực
char name[20]; // Mảng 20 ký tự`}</SyntaxHighlighter> 
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Khởi tạo mảng</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int a[5] = {1, 2, 3, 4, 5};
float b[3] = {2.5, 3.1, 4.7};
char c[4] = {'A', 'B', 'C', 'D'};`}</SyntaxHighlighter>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li>Có thể khởi tạo toàn bộ hoặc một phần, phần còn lại sẽ là giá trị mặc định (0 với số, '\0' với char).</li>
        <li>Có thể bỏ qua kích thước nếu khởi tạo ngay: <SyntaxHighlighter language="c">{`int x[] = {1,2,3};`}</SyntaxHighlighter></li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Truy cập và thao tác với mảng</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Chỉ số (index) của mảng</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Chỉ số bắt đầu từ 0 đến (kích_thước - 1).</li>
        <li>Truy cập phần tử: <code>tên_mảng[chỉ_số]</code></li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> <code>a[0]</code> là phần tử đầu, <code>a[4]</code> là phần tử cuối của <code>a[5]</code>.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Nhập và xuất mảng từ bàn phím</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, i, a[100];
    printf("Nhập số phần tử: ");
    scanf("%d", &n);
    for (i = 0; i < n; i++) {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }
    printf("\\nMảng vừa nhập: ");
    for (i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Duyệt, tính toán trên mảng</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Tính tổng các phần tử mảng
int sum = 0;
for (int i = 0; i < n; i++) {
    sum += a[i];
}`}</SyntaxHighlighter>
      </pre>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Tìm giá trị lớn nhất
int max = a[0];
for (int i = 1; i < n; i++) {
    if (a[i] > max) max = a[i];
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Vượt quá chỉ số mảng:</b> Truy cập <code>a[n]</code> hoặc <code>a[-1]</code> sẽ gây lỗi hoặc kết quả không xác định.</li>
          <li><b>Khai báo mảng quá lớn:</b> Dễ gây tràn bộ nhớ stack.</li>
          <li><b>Chưa khởi tạo giá trị:</b> Nếu không gán giá trị, phần tử có thể chứa giá trị rác.</li>
          <li><b>Nhập sai kiểu dữ liệu:</b> Dùng <code>%d</code> cho <code>float</code> hoặc ngược lại.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn kiểm tra chỉ số mảng nằm trong [0, n-1]</li>
          <li>Dùng vòng lặp for để thao tác với mảng</li>
          <li>Khởi tạo mảng với giá trị mặc định nếu cần</li>
          <li>Thực hành với nhiều dạng bài toán: nhập/xuất, tính tổng, tìm max/min, đảo ngược mảng, ...</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Nhập mảng n số nguyên, in ra mảng đảo ngược</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, a[100];
    printf("Nhập số phần tử: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
    printf("Mảng đảo ngược: ");
    for (int i = n-1; i >= 0; i--) {
        printf("%d ", a[i]);
    }
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Tính tổng các số chẵn trong mảng</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, a[100], sum = 0;
    printf("Nhập số phần tử: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
        if (a[i] % 2 == 0) sum += a[i];
    }
    printf("Tổng các số chẵn: %d\\n", sum);
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Tìm phần tử lớn nhất và nhỏ nhất trong mảng</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, a[100];
    printf("Nhập số phần tử: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
    int max = a[0], min = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > max) max = a[i];
        if (a[i] < min) min = a[i];
    }
    printf("Max = %d, Min = %d\\n", max, min);
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết & Ghi nhớ</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Mảng 1 chiều là cấu trúc dữ liệu cơ bản, rất quan trọng trong lập trình.</li>
          <li>Giúp lưu trữ, xử lý nhiều giá trị cùng lúc một cách hiệu quả.</li>
          <li>Luôn kiểm tra chỉ số mảng, tránh truy cập ngoài phạm vi.</li>
          <li>Thực hành nhiều với các bài toán mảng để thành thạo kỹ năng.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Hãy luyện tập nhiều với mảng 1 chiều để làm chủ kỹ năng xử lý dữ liệu hàng loạt trong C!
      </div>
    </div>
  );
};

export default OneDimensionalArrays;
