import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const ArrayNestedStructs = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu sâu về <b>mảng struct</b> và <b>struct lồng nhau</b> trong C. Đây là hai kỹ thuật cực kỳ hữu ích để quản lý dữ liệu phức tạp, ví dụ như danh sách sinh viên, sách, hoặc các thực thể có nhiều thuộc tính lồng nhau.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Mảng struct là gì?</h2>
      <p className="mb-4">
        <b>Mảng struct</b> là một mảng mà mỗi phần tử là một struct. Điều này cho phép bạn quản lý nhiều đối tượng cùng loại (ví dụ: nhiều sinh viên, nhiều sách) một cách có tổ chức.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> Quản lý danh sách sinh viên, mỗi sinh viên có tên, tuổi, điểm trung bình.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cú pháp khai báo mảng struct</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`struct SinhVien {
    char ten[50];
    int tuoi;
    float diemTB;
};

struct SinhVien ds[100]; // Mảng 100 sinh viên`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Nhập xuất mảng struct</h2>
      <p className="mb-4">Bạn có thể nhập và xuất dữ liệu cho từng phần tử trong mảng struct bằng vòng lặp.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

struct SinhVien {
    char ten[50];
    int tuoi;
    float diemTB;
};

int main() {
    int n;
    printf("Nhập số sinh viên: ");
    scanf("%d", &n);
    struct SinhVien ds[100];
    for (int i = 0; i < n; i++) {
        printf("\nNhập thông tin sinh viên %d:\n", i+1);
        printf("Tên: ");
        scanf("%s", ds[i].ten);
        printf("Tuổi: ");
        scanf("%d", &ds[i].tuoi);
        printf("Điểm TB: ");
        scanf("%f", &ds[i].diemTB);
    }
    printf("\nDanh sách sinh viên:\n");
    for (int i = 0; i < n; i++) {
        printf("%s - %d - %.2f\n", ds[i].ten, ds[i].tuoi, ds[i].diemTB);
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
          <span className="text-blue-400">$</span> gcc array_struct.c -o array_struct<br/>
          <span className="text-blue-400">$</span> ./array_struct<br/>
          <span className="text-white">Nhập số sinh viên: 2</span><br/>
          <span className="text-white">\nNhập thông tin sinh viên 1:</span><br/>
          <span className="text-white">Tên: An</span><br/>
          <span className="text-white">Tuổi: 20</span><br/>
          <span className="text-white">Điểm TB: 8.5</span><br/>
          <span className="text-white">\nNhập thông tin sinh viên 2:</span><br/>
          <span className="text-white">Tên: Binh</span><br/>
          <span className="text-white">Tuổi: 21</span><br/>
          <span className="text-white">Điểm TB: 7.8</span><br/>
          <span className="text-white">\nDanh sách sinh viên:</span><br/>
          <span className="text-white">An - 20 - 8.50</span><br/>
          <span className="text-white">Binh - 21 - 7.80</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Struct lồng nhau là gì?</h2>
      <p className="mb-4">
        <b>Struct lồng nhau</b> là struct có thành phần là một struct khác. Điều này giúp mô tả các thực thể phức tạp hơn, ví dụ: sinh viên có ngày sinh, sách có thông tin tác giả.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`struct Date {
    int ngay, thang, nam;
};
struct SinhVien {
    char ten[50];
    int tuoi;
    struct Date ngaySinh;
};`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Mảng struct lồng nhau - ví dụ thực tế</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

struct Date {
    int ngay, thang, nam;
};
struct SinhVien {
    char ten[50];
    int tuoi;
    struct Date ngaySinh;
};

int main() {
    int n;
    printf("Nhập số sinh viên: ");
    scanf("%d", &n);
    struct SinhVien ds[100];
    for (int i = 0; i < n; i++) {
        printf("\\nNhập thông tin sinh viên %d:\\n", i+1);
        printf("Tên: ");
        scanf("%s", ds[i].ten);
        printf("Tuổi: ");
        scanf("%d", &ds[i].tuoi);
        printf("Ngày sinh (ngay thang nam): ");
        scanf("%d%d%d", &ds[i].ngaySinh.ngay, &ds[i].ngaySinh.thang, &ds[i].ngaySinh.nam);
    }
    printf("\\nDanh sách sinh viên:\\n");
    for (int i = 0; i < n; i++) {
        printf("%s - %d - %02d/%02d/%04d\\n", ds[i].ten, ds[i].tuoi, ds[i].ngaySinh.ngay, ds[i].ngaySinh.thang, ds[i].ngaySinh.nam);
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
          <span className="text-blue-400">$</span> gcc nested_struct.c -o nested_struct<br/>
          <span className="text-blue-400">$</span> ./nested_struct<br/>
          <span className="text-white">Nhập số sinh viên: 1</span><br/>
          <span className="text-white">Nhập thông tin sinh viên 1:</span><br/>
          <span className="text-white">Tên: An</span><br/>
          <span className="text-white">Tuổi: 20</span><br/>
          <span className="text-white">Ngày sinh (ngay thang nam): 1 1 2000</span><br/>
          <span className="text-white">Danh sách sinh viên:</span><br/>
          <span className="text-white">An - 20 - 01/01/2000</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Lỗi thường gặp & Lưu ý</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Quên <b>struct</b> khi khai báo biến (nếu không dùng typedef).</li>
          <li>Truy cập sai thành phần (nhầm . và -&gt;).</li>
          <li>Gán trực tiếp mảng char (phải dùng strcpy).</li>
          <li>Chưa khởi tạo giá trị cho struct.</li>
        </ul>
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <b>Lưu ý:</b>
        <ul className="list-disc pl-6 text-green-700 mt-2">
          <li>Luôn khởi tạo giá trị cho struct khi khai báo.</li>
          <li>Dùng typedef để code ngắn gọn, dễ đọc.</li>
          <li>Đặt tên thành phần rõ ràng, có ý nghĩa.</li>
          <li>Tránh struct quá lớn hoặc lồng nhau quá sâu.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Quản lý sinh viên</h3>
      <p className="mb-4">Viết chương trình nhập danh sách n sinh viên (tên, tuổi, điểm TB, ngày sinh), in ra danh sách và tìm sinh viên có điểm cao nhất.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng mảng struct lồng nhau</li>
          <li>Duyệt mảng, so sánh điểm TB</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Quản lý sách</h3>
      <p className="mb-4">Viết struct Sách gồm: tên sách, tác giả, năm xuất bản (dùng struct Date), nhập và in thông tin n quyển sách.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Khai báo struct Date, struct Sach</li>
          <li>Dùng mảng struct để lưu danh sách sách</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thực hành các bài tập trên và thử nghiệm với các kiểu struct lồng nhau khác nhau. Thử dùng typedef để code ngắn gọn hơn!
      </div>
    </div>
  );
};

export default ArrayNestedStructs;
