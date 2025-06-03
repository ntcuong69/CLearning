import React from "react";

const BaiGiang11 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 11: Cấu trúc (struct) trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Giới thiệu về cấu trúc</h2>
      <p>
        Cấu trúc (<code>struct</code>) là một kiểu dữ liệu do người dùng định nghĩa, cho phép nhóm nhiều biến có thể khác kiểu thành một đơn vị duy nhất.
        Điều này giúp tổ chức dữ liệu phức tạp hơn, như lưu thông tin về một đối tượng với nhiều thuộc tính.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Khai báo cấu trúc</h2>
      <p>Cú pháp khai báo cấu trúc:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
struct TênCauTruc {
  kiểu_dữ_liệu biến1;
  kiểu_dữ_liệu biến2;
  ...
};
        `}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">Ví dụ khai báo:</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
struct SinhVien {
  char ten[50];
  int tuoi;
  float diemTB;
};
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Khai báo biến kiểu struct</h2>
      <p>Bạn có thể khai báo biến kiểu struct như sau:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
struct SinhVien sv1;
        `}</code>
      </pre>
      <p>Cũng có thể dùng <code>typedef</code> để tạo tên kiểu mới cho struct giúp viết ngắn gọn hơn:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
typedef struct {
  char ten[50];
  int tuoi;
  float diemTB;
} SinhVien;

SinhVien sv2;
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Truy cập thành phần của struct</h2>
      <p>Dùng dấu chấm <code>.</code> để truy cập các thành phần bên trong struct:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
sv1.tuoi = 20;
strcpy(sv1.ten, "Nguyen Van A");
sv1.diemTB = 8.5;
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Ví dụ sử dụng struct</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto text-sm">
        <code>{`
#include <stdio.h>
#include <string.h>

typedef struct {
  char ten[50];
  int tuoi;
  float diemTB;
} SinhVien;

int main() {
  SinhVien sv;

  strcpy(sv.ten, "Tran Thi B");
  sv.tuoi = 21;
  sv.diemTB = 9.0;

  printf("Thong tin sinh vien:\\n");
  printf("Ten: %s\\n", sv.ten);
  printf("Tuoi: %d\\n", sv.tuoi);
  printf("Diem TB: %.2f\\n", sv.diemTB);

  return 0;
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Cấu trúc lồng nhau</h2>
      <p>Bạn có thể khai báo một struct bên trong struct khác:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
typedef struct {
  int ngay, thang, nam;
} NgaySinh;

typedef struct {
  char ten[50];
  NgaySinh ns;
  float diemTB;
} SinhVien;
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết</h2>
      <p>
        Struct giúp bạn tổ chức dữ liệu phức tạp một cách hiệu quả bằng cách nhóm các biến khác kiểu thành một đơn vị duy nhất.
        Đây là nền tảng để xây dựng các kiểu dữ liệu tùy chỉnh trong C.
      </p>
    </div>
  );
};

export default BaiGiang11;
