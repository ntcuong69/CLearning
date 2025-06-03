import React from "react";

const BaiGiang2 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 2: Cấu trúc chương trình C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Thành phần cơ bản của chương trình C</h2>
      <ul className="list-disc pl-6">
        <li><strong>Thư viện tiêu chuẩn:</strong> Cung cấp các hàm và định nghĩa sẵn.</li>
        <li><strong>Hàm <code>main()</code>:</strong> Điểm bắt đầu của mọi chương trình C.</li>
        <li><strong>Biến và kiểu dữ liệu:</strong> Khai báo và sử dụng dữ liệu.</li>
        <li><strong>Hàm:</strong> Định nghĩa các chức năng con để tái sử dụng.</li>
        <li><strong>Toán tử và biểu thức:</strong> Xử lý tính toán logic.</li>
        <li><strong>Cấu trúc điều khiển:</strong> if, else, switch, for, while, do-while.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Mẫu chương trình C cơ bản</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>
          {`#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int sum = a + b;
    printf("Tong = %d\n", sum);
    return 0;
}`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">Giải thích:</h3>
      <ul className="list-disc pl-6">
        <li><code>#include &lt;stdio.h&gt;</code>: Nạp thư viện nhập/xuất chuẩn.</li>
        <li><code>int main()</code>: Hàm chính của chương trình.</li>
        <li><code>int a = 10;</code>: Khai báo biến nguyên và gán giá trị.</li>
        <li><code>sum = a + b;</code>: Tính tổng hai biến.</li>
        <li><code>printf(...)</code>: In kết quả ra màn hình.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ghi chú về cú pháp</h2>
      <ul className="list-disc pl-6">
        <li>Mỗi câu lệnh phải kết thúc bằng dấu <code>;</code>.</li>
        <li>Chương trình C phân biệt chữ hoa và chữ thường.</li>
        <li>Dấu ngoặc nhọn <code>{}</code> dùng để nhóm khối lệnh.</li>
      </ul>

      <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 my-4">
        Hãy thử sửa đổi giá trị biến <code>a</code> và <code>b</code> để tính tổng khác nhau.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Tổng kết</h2>
      <ul className="list-disc pl-6">
        <li>Một chương trình C bắt đầu bằng hàm <code>main()</code>.</li>
        <li>Các lệnh thực thi nằm trong dấu <code>{}</code>.</li>
        <li>Sử dụng thư viện tiêu chuẩn để gọi các hàm như <code>printf()</code>.</li>
        <li>Biến cần khai báo đúng kiểu dữ liệu.</li>
      </ul>

      <p className="mt-4">Trong bài tiếp theo, chúng ta sẽ tìm hiểu sâu hơn về <strong>biến và kiểu dữ liệu trong C</strong>.</p>
    </div>
  );
};

export default BaiGiang2;