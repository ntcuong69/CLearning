import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const StructAndTypedef = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về <b>struct</b> và <b>typedef</b> trong C, hai công cụ mạnh mẽ để xây dựng kiểu dữ liệu phức tạp, quản lý dữ liệu có cấu trúc và viết code rõ ràng, dễ bảo trì hơn.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Struct là gì?</h2>
      <p className="mb-4">
        <b>Struct</b> (cấu trúc) là một kiểu dữ liệu do người dùng định nghĩa, cho phép nhóm nhiều biến (có thể khác kiểu) thành một đơn vị logic. Struct rất hữu ích khi bạn muốn mô tả một thực thể phức tạp (ví dụ: Sinh viên, Sách, Điểm, v.v.).
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> Một sinh viên có thể có tên (chuỗi), tuổi (int), điểm trung bình (float). Struct cho phép gom các thông tin này lại thành một "gói" duy nhất.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cú pháp khai báo struct</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`struct TênStruct {
    kiểu_dữ_liệu1 tên_biến1;
    kiểu_dữ_liệu2 tên_biến2;
    ...
};`}</SyntaxHighlighter>
      </pre>
      <p className="mb-4">Sau khi khai báo, bạn có thể tạo biến struct như sau:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`struct TênStruct biến1, biến2;`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Ví dụ: Struct SinhVien</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

struct SinhVien {
    char ten[50];
    int tuoi;
    float diemTB;
};

int main() {
    struct SinhVien sv1 = {"An", 20, 8.5};
    printf("Ten: %s\\n", sv1.ten);
    printf("Tuoi: %d\\n", sv1.tuoi);
    printf("Diem TB: %.2f\\n", sv1.diemTB);
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
          <span className="text-blue-400">$</span> gcc struct1.c -o struct1<br/>
          <span className="text-blue-400">$</span> ./struct1<br/>
          <span className="text-white">Ten: An</span><br/>
          <span className="text-white">Tuoi: 20</span><br/>
          <span className="text-white">Diem TB: 8.50</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Truy cập thành phần struct</h2>
      <p className="mb-4">Dùng toán tử <b>.</b> để truy cập thành phần của biến struct.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`sv1.tuoi = 21;
printf("Tuoi moi: %d\\n", sv1.tuoi);`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Nếu có con trỏ tới struct, dùng toán tử <b>-&gt;</b> để truy cập thành phần (ví dụ: <code>svPtr-&gt;diemTB</code>).
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Typedef cho struct</h2>
      <p className="mb-4">
        <b>typedef</b> giúp đặt tên mới ngắn gọn cho kiểu struct, giúp code dễ đọc và gọn hơn, đặc biệt khi dùng nhiều lần.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`typedef struct {
    char ten[50];
    int tuoi;
    float diemTB;
} SinhVien;

SinhVien sv2 = {"Binh", 21, 7.8};
printf("%s - %d - %.2f\\n", sv2.ten, sv2.tuoi, sv2.diemTB);`}</SyntaxHighlighter>
      </pre>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>So sánh:</b> <b>struct SinhVien sv;</b> và <b>SinhVien sv;</b> (nếu dùng typedef) là tương đương nhau.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Con trỏ với struct</h2>
      <p className="mb-4">
        Con trỏ với struct cho phép bạn thao tác linh hoạt với các biến struct, đặc biệt khi làm việc với cấp phát động hoặc truyền struct vào hàm. Khi có con trỏ trỏ tới struct, bạn dùng toán tử <b>-&gt;</b> để truy cập thành phần.
      </p>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khai báo và sử dụng con trỏ struct</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`struct SinhVien {
    char ten[50];
    int tuoi;
    float diemTB;
};

int main() {
    struct SinhVien sv = {"An", 20, 8.5};
    struct SinhVien *ptr = &sv;
    printf("Tên: %s\\n", ptr->ten);
    printf("Tuổi: %d\\n", ptr->tuoi);
    printf("Điểm TB: %.2f\\n", ptr->diemTB);
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
          <span className="text-blue-400">$</span> gcc pointer_struct.c -o pointer_struct<br/>
          <span className="text-blue-400">$</span> ./pointer_struct<br/>
          <span className="text-white">Tên: An</span><br/>
          <span className="text-white">Tuổi: 20</span><br/>
          <span className="text-white">Điểm TB: 8.50</span><br/>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Cấp phát động mảng struct với malloc</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <stdlib.h>

struct SinhVien {
    char ten[50];
    int tuoi;
    float diemTB;
};

int main() {
    int n;
    printf("Nhập số sinh viên: ");
    scanf("%d", &n);
    struct SinhVien *ds = (struct SinhVien*)malloc(n * sizeof(struct SinhVien));
    for (int i = 0; i < n; i++) {
        printf("\\nNhập thông tin sinh viên %d:\\n", i+1);
        printf("Tên: ");
        scanf("%s", ds[i].ten);
        printf("Tuổi: ");
        scanf("%d", &ds[i].tuoi);
        printf("Điểm TB: ");
        scanf("%f", &ds[i].diemTB);
    }
    printf("\\nDanh sách sinh viên:\\n");
    for (int i = 0; i < n; i++) {
        printf("%s - %d - %.2f\\n", ds[i].ten, ds[i].tuoi, ds[i].diemTB);
    }
    free(ds);
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Khi dùng con trỏ struct, <b>ptr-&gt;thanh_vien</b> tương đương <b>(*ptr).thanh_vien</b>. Đừng nhầm lẫn giữa <b>-&gt;</b> và <b>.</b>.
      </div>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Quên cấp phát bộ nhớ động cho mảng struct khi dùng con trỏ.</li>
          <li>Truy cập sai thành phần (dùng . thay vì -&gt; với con trỏ).</li>
          <li>Không giải phóng bộ nhớ sau khi dùng malloc.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. So sánh struct và array</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Đặc điểm</th>
              <th className="border px-4 py-2">Struct</th>
              <th className="border px-4 py-2">Array</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Kiểu dữ liệu thành phần</td>
              <td className="border px-4 py-2">Khác nhau</td>
              <td className="border px-4 py-2">Giống nhau</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Truy cập thành phần</td>
              <td className="border px-4 py-2">TênStruct.thành_viên</td>
              <td className="border px-4 py-2">TênMảng[index]</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Kích thước</td>
              <td className="border px-4 py-2">Tùy ý (tổng các thành phần)</td>
              <td className="border px-4 py-2">Cố định (số phần tử * kích thước phần tử)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ứng dụng</td>
              <td className="border px-4 py-2">Mô tả thực thể phức tạp</td>
              <td className="border px-4 py-2">Lưu danh sách cùng loại</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Lỗi thường gặp & Lưu ý</h2>
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

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VIII. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Quản lý sinh viên</h3>
      <p className="mb-4">Viết chương trình nhập danh sách n sinh viên (tên, tuổi, điểm TB), in ra danh sách và tìm sinh viên có điểm cao nhất.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng mảng struct hoặc cấp phát động struct</li>
          <li>Duyệt mảng, so sánh điểm TB</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Struct lồng nhau</h3>
      <p className="mb-4">Viết struct Sách gồm: tên sách, tác giả, năm xuất bản (dùng struct Date), nhập và in thông tin n quyển sách.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Khai báo struct Date, struct Sach</li>
          <li>Dùng mảng struct để lưu danh sách sách</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thực hành các bài tập trên và thử nghiệm với các kiểu struct khác nhau. Thử dùng typedef để code ngắn gọn hơn!
      </div>
    </div>
  );
};

export default StructAndTypedef;
