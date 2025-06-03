import React from "react";

const BaiGiang10 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 10: Con trỏ (Pointer) trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Giới thiệu về con trỏ</h2>
      <p>
        Con trỏ là một biến dùng để lưu địa chỉ bộ nhớ của một biến khác trong C.
        Con trỏ cho phép thao tác trực tiếp với bộ nhớ, giúp quản lý và truy cập dữ liệu linh hoạt hơn.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Khai báo con trỏ</h2>
      <p>
        Cú pháp khai báo con trỏ:
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`kiểu_dữ_liệu *tên_con_trỏ;`}</code>
      </pre>
      <p>Ví dụ:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`int *ptr;`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Gán địa chỉ cho con trỏ</h2>
      <p>Dùng toán tử <code>&amp;</code> để lấy địa chỉ của biến:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int x = 10;
int *ptr = &x; // ptr lưu địa chỉ của biến x
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Truy cập giá trị qua con trỏ</h2>
      <p>Dùng toán tử <code>*</code> để lấy giá trị tại địa chỉ con trỏ trỏ tới (giải tham chiếu):</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
printf("Gia tri cua x = %d\\n", *ptr); // In ra giá trị của biến x thông qua con trỏ ptr
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Ví dụ minh họa con trỏ</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto text-sm">
        <code>{`
#include <stdio.h>

int main() {
  int x = 20;
  int *ptr = &x;

  printf("Dia chi cua x: %p\\n", ptr);
  printf("Gia tri cua x: %d\\n", *ptr);

  *ptr = 30; // Thay đổi giá trị của x qua con trỏ
  printf("Gia tri cua x sau khi thay doi: %d\\n", x);

  return 0;
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Các lưu ý quan trọng</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Con trỏ phải được khởi tạo đúng địa chỉ trước khi sử dụng.</li>
        <li>Tránh dereference con trỏ NULL hoặc con trỏ chưa khởi tạo (dangling pointer).</li>
        <li>Toán tử <code>*</code> dùng để lấy giá trị tại địa chỉ, toán tử <code>&amp;</code> dùng để lấy địa chỉ biến.</li>
        <li>Con trỏ rất quan trọng trong việc thao tác với mảng, hàm và cấp phát động bộ nhớ.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết</h2>
      <p>
        Con trỏ là một khái niệm nền tảng trong C, giúp truy cập và quản lý bộ nhớ hiệu quả.
        Nắm vững con trỏ sẽ mở ra nhiều khả năng mạnh mẽ trong lập trình như truyền tham biến, thao tác với mảng động, cấu trúc dữ liệu phức tạp.
      </p>
    </div>
  );
};

export default BaiGiang10;
