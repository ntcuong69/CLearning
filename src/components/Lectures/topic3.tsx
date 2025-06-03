import React from "react";

const BaiGiang3 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 3: Biến và kiểu dữ liệu trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Khái niệm biến</h2>
      <p>Biến là vùng nhớ được đặt tên dùng để lưu trữ dữ liệu. Mỗi biến có:</p>
      <ul className="list-disc pl-6">
        <li>
          <strong>Tên biến:</strong> dùng để truy cập dữ liệu.
        </li>
        <li>
          <strong>Kiểu dữ liệu:</strong> xác định loại dữ liệu lưu trữ.
        </li>
        <li>
          <strong>Giá trị:</strong> dữ liệu hiện tại của biến.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Quy tắc đặt tên biến</h2>
      <ul className="list-disc pl-6">
        <li>Chỉ dùng chữ cái, chữ số và dấu gạch dưới (_).</li>
        <li>Không bắt đầu bằng số.</li>
        <li>Không trùng với từ khóa của C.</li>
        <li>Phân biệt chữ hoa và thường.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Kiểu dữ liệu cơ bản</h2>
      <table className="table-auto w-full text-left border border-gray-300 my-4">
        <thead>
          <tr className="bg-blue-100">
            <th className="border px-4 py-2">Kiểu</th>
            <th className="border px-4 py-2">Mô tả</th>
            <th className="border px-4 py-2">Kích thước</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">int</td>
            <td className="border px-4 py-2">Số nguyên</td>
            <td className="border px-4 py-2">2 hoặc 4 byte</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">float</td>
            <td className="border px-4 py-2">Số thực dấu chấm động đơn</td>
            <td className="border px-4 py-2">4 byte</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">double</td>
            <td className="border px-4 py-2">Số thực dấu chấm động kép</td>
            <td className="border px-4 py-2">8 byte</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">char</td>
            <td className="border px-4 py-2">Ký tự đơn</td>
            <td className="border px-4 py-2">1 byte</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Khai báo và khởi tạo biến</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>
          {`int a = 5;
float b = 3.14;
char c = 'A';`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">Giải thích:</h3>
      <ul className="list-disc pl-6">
        <li>
          <code>int a = 5;</code>: biến nguyên a có giá trị 5.
        </li>
        <li>
          <code>float b = 3.14;</code>: biến thực b có giá trị 3.14.
        </li>
        <li>
          <code>char c = 'A';</code>: biến ký tự c lưu chữ 'A'.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Câu lệnh nhập xuất cơ bản</h2>
      <p>Trong C, ta dùng các hàm sau để nhập và xuất dữ liệu:</p>
      <ul className="list-disc pl-6">
        <li>
          <code>printf()</code>: in dữ liệu ra màn hình.
        </li>
        <li>
          <code>scanf()</code>: đọc dữ liệu từ bàn phím.
        </li>
      </ul>

      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>
          {`#include <stdio.h>

int main() {
    int x;
    printf("Nhap mot so nguyen: ");
    scanf("%d", &x);
    printf("Ban vua nhap: %d\\n", x);
    return 0;
}`}
        </code>
      </pre>
      <p>
        <strong>Giải thích:</strong>{" "}
      </p>
      <ul className="list-disc pl-6">
        <li>
          <code>printf("Nhap mot so nguyen: ");</code> hiển thị lời nhắc cho người dùng.
        </li>
        <li>
          <code>scanf("%d", &x);</code> đọc một số nguyên nhập từ bàn phím và lưu vào biến <code>x</code>. Dấu <code>&</code> lấy địa chỉ biến.
        </li>
        <li>
          <code>printf("Ban vua nhap: %d\n", x);</code> in ra giá trị vừa nhập.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Các kiểu định dạng dùng trong <code>printf()</code>
      </h3>
      <p>Dưới đây là các ký hiệu định dạng thường dùng để in các kiểu dữ liệu khác nhau trong C:</p>
      <table className="table-auto w-full text-left border border-gray-300 my-4">
        <thead>
          <tr className="bg-blue-100">
            <th className="border px-4 py-2">Ký hiệu</th>
            <th className="border px-4 py-2">Kiểu dữ liệu</th>
            <th className="border px-4 py-2">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">%d</td>
            <td className="border px-4 py-2">int</td>
            <td className="border px-4 py-2">In số nguyên (decimal)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">%f</td>
            <td className="border px-4 py-2">float, double</td>
            <td className="border px-4 py-2">In số thực dấu chấm động</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">%c</td>
            <td className="border px-4 py-2">char</td>
            <td className="border px-4 py-2">In ký tự đơn</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">%s</td>
            <td className="border px-4 py-2">char[] (chuỗi)</td>
            <td className="border px-4 py-2">In chuỗi ký tự</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">%ld</td>
            <td className="border px-4 py-2">long int</td>
            <td className="border px-4 py-2">In số nguyên kiểu long</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">%u</td>
            <td className="border px-4 py-2">unsigned int</td>
            <td className="border px-4 py-2">In số nguyên không dấu</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">%x, %X</td>
            <td className="border px-4 py-2">unsigned int</td>
            <td className="border px-4 py-2">In số nguyên theo hệ thập lục phân (hexadecimal)</td>
          </tr>
        </tbody>
      </table>

      <p>
        Lưu ý: Các ký hiệu này được dùng tương tự trong <code>scanf()</code> để nhập dữ liệu.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Biến cục bộ và toàn cục</h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Biến cục bộ:</strong> khai báo bên trong hàm, chỉ dùng trong hàm đó.
        </li>
        <li>
          <strong>Biến toàn cục:</strong> khai báo ngoài mọi hàm, dùng được trong toàn bộ chương trình.
        </li>
      </ul>

      <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 my-4">
        Lưu ý: Biến chưa khởi tạo có thể mang giá trị rác! Nên luôn khởi tạo trước khi sử dụng.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết</h2>
      <ul className="list-disc pl-6">
        <li>Biến là vùng nhớ lưu dữ liệu, cần khai báo kiểu và tên.</li>
        <li>
          Có nhiều kiểu dữ liệu như <code>int</code>, <code>float</code>, <code>char</code>...
        </li>
        <li>
          Dùng <code>printf()</code> để xuất dữ liệu, <code>scanf()</code> để nhập dữ liệu.
        </li>
        <li>Phân biệt biến cục bộ và biến toàn cục.</li>
        <li>Tuân thủ quy tắc đặt tên biến trong C.</li>
      </ul>

      <p className="mt-4">
        Trong bài tiếp theo, bạn sẽ học về <strong>toán tử và biểu thức trong C</strong>.
      </p>
    </div>
  );
};

export default BaiGiang3;
