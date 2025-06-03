import React from "react";

const BaiGiang9 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 9: Chuỗi (String) trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Giới thiệu về chuỗi trong C</h2>
      <p>
        Chuỗi trong ngôn ngữ C được biểu diễn dưới dạng mảng ký tự (char array), kết thúc bằng ký tự đặc biệt <code>'\0'</code> gọi là ký tự null.
        Đây là cách để đánh dấu kết thúc chuỗi, giúp các hàm xử lý biết được đâu là phần tử cuối cùng.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Khai báo và khởi tạo chuỗi</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">1. Khai báo mảng ký tự</h3>
      <p>Cách khai báo mảng ký tự để lưu chuỗi:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`char str[50]; // khai báo mảng ký tự với sức chứa 50`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Khởi tạo chuỗi khi khai báo</h3>
      <p>Có thể khởi tạo trực tiếp như sau:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`char str[] = "Hello World";`}</code>
      </pre>
      <p>Lưu ý: Bộ biên dịch sẽ tự động thêm ký tự <code>'\\0'</code> vào cuối chuỗi.</p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Các hàm xử lý chuỗi cơ bản</h2>
      <p>Thư viện <code>string.h</code> cung cấp nhiều hàm hỗ trợ làm việc với chuỗi:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><code>strlen(str)</code>: Đếm độ dài chuỗi (không tính ký tự <code>'\\0'</code>).</li>
        <li><code>strcpy(dest, src)</code>: Sao chép chuỗi từ <code>src</code> sang <code>dest</code>.</li>
        <li><code>strcat(dest, src)</code>: Nối chuỗi <code>src</code> vào cuối chuỗi <code>dest</code>.</li>
        <li><code>strcmp(str1, str2)</code>: So sánh 2 chuỗi, trả về 0 nếu bằng nhau.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Ví dụ sử dụng chuỗi</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto text-sm">
        <code>{`
#include <stdio.h>
#include <string.h>

int main() {
  char str1[20] = "Hello";
  char str2[] = " World";
  char str3[50];

  // Sao chép str1 vào str3
  strcpy(str3, str1);
  // Nối str2 vào str3
  strcat(str3, str2);

  printf("Chuoi str3: %s\\n", str3);
  printf("Do dai chuoi str3: %lu\\n", strlen(str3));

  // So sanh chuoi
  if (strcmp(str1, str2) == 0) {
    printf("Hai chuoi bang nhau\\n");
  } else {
    printf("Hai chuoi khac nhau\\n");
  }
  return 0;
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Một số lưu ý quan trọng</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Chuỗi trong C luôn kết thúc bằng ký tự <code>'\0'</code>.</li>
        <li>Kích thước mảng phải đủ lớn để chứa toàn bộ chuỗi và ký tự <code>'\0'</code>.</li>
        <li>Cẩn thận khi thao tác với chuỗi để tránh tràn bộ đệm (buffer overflow).</li>
        <li>Nên dùng các hàm an toàn để xử lý chuỗi trong thực tế.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Tổng kết</h2>
      <p>
        Chuỗi là kiểu dữ liệu quan trọng trong C và được biểu diễn qua mảng ký tự. Việc hiểu rõ cách khai báo, khởi tạo và xử lý chuỗi
        giúp bạn làm việc hiệu quả với văn bản và dữ liệu dạng ký tự.
      </p>
    </div>
  );
};

export default BaiGiang9;
