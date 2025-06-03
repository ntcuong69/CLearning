import React from "react";

const BaiGiang8 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 8: Mảng một chiều và mảng hai chiều trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Giới thiệu</h2>
      <p>
        Mảng (array) là tập hợp các phần tử cùng kiểu dữ liệu được lưu trữ liên tiếp trong bộ nhớ,
        giúp quản lý nhiều giá trị cùng lúc. Mảng một chiều là danh sách tuyến tính,
        còn mảng hai chiều là dạng bảng (ma trận) gồm hàng và cột.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Mảng một chiều</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">1. Khai báo mảng một chiều</h3>
      <p>Cú pháp:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`kiểu_dữ_liệu tên_mảng[kích_thước];`}</code>
      </pre>
      <p>Ví dụ:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`int arr[5];`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Khởi tạo mảng một chiều</h3>
      <p>Có thể khởi tạo khi khai báo:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`int arr[5] = {1, 2, 3, 4, 5};`}</code>
      </pre>
      <p>Nếu không khởi tạo, giá trị trong mảng là rác (không xác định).</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Truy cập phần tử mảng một chiều</h3>
      <p>Chỉ số mảng bắt đầu từ 0 đến <code>kích_thước - 1</code>.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`int x = arr[2]; // Lấy phần tử thứ 3`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">4. Ví dụ sử dụng mảng một chiều</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto text-sm">
        <code>{`
#include <stdio.h>

int main() {
  int arr[5] = {10, 20, 30, 40, 50};
  for(int i = 0; i < 5; i++) {
    printf("arr[%d] = %d\\n", i, arr[i]);
  }
  return 0;
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Mảng hai chiều</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">1. Khai báo mảng hai chiều</h3>
      <p>Cú pháp:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`kiểu_dữ_liệu tên_mảng[số_hàng][số_cột];`}</code>
      </pre>
      <p>Ví dụ khai báo mảng 2 chiều 3x4:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`int matrix[3][4];`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Khởi tạo mảng hai chiều</h3>
      <p>Có thể khởi tạo khi khai báo:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int matrix[2][3] = {
  {1, 2, 3},
  {4, 5, 6}
};
        `}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Truy cập phần tử mảng hai chiều</h3>
      <p>Cú pháp truy cập: <code>tên_mảng[hàng][cột]</code>.</p>
      <p>Ví dụ truy cập phần tử ở hàng 1, cột 2:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`int val = matrix[1][2];`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">4. Ví dụ sử dụng mảng hai chiều</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto text-sm">
        <code>{`
#include <stdio.h>

int main() {
  int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };

  for(int i = 0; i < 2; i++) {
    for(int j = 0; j < 3; j++) {
      printf("matrix[%d][%d] = %d\\t", i, j, matrix[i][j]);
    }
    printf("\\n");
  }
  return 0;
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Một số lưu ý quan trọng</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Kích thước mảng phải là số nguyên dương cố định.</li>
        <li>Chỉ số mảng bắt đầu từ 0.</li>
        <li>Mảng một chiều có thể coi như một chuỗi các phần tử.</li>
        <li>Mảng hai chiều là mảng các mảng, có thể dùng để biểu diễn ma trận.</li>
        <li>Truy cập ngoài phạm vi chỉ số mảng sẽ gây lỗi truy cập bộ nhớ.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Tổng kết</h2>
      <p>
        Mảng là cấu trúc dữ liệu cơ bản và rất quan trọng trong lập trình C,
        giúp quản lý dữ liệu hiệu quả. Hiểu rõ cách khai báo, khởi tạo và truy cập mảng
        sẽ giúp bạn xử lý nhiều bài toán phức tạp hơn.
      </p>
    </div>
  );
};

export default BaiGiang8;
