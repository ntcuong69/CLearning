import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const BasicDataTypes = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về các kiểu dữ liệu cơ bản trong C, cách chọn kiểu dữ liệu phù hợp và tối ưu hóa bộ nhớ cho chương trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tại sao cần kiểu dữ liệu?</h2>
      <p className="mb-4">
        Kiểu dữ liệu xác định loại giá trị mà biến có thể lưu trữ, kích thước bộ nhớ cần thiết và các phép toán có thể thực hiện. Việc chọn đúng kiểu
        dữ liệu giúp chương trình chạy hiệu quả và tiết kiệm bộ nhớ.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> Nếu bạn chỉ cần lưu tuổi (0-150), dùng <code>int</code> thay vì <code>long</code> sẽ tiết kiệm bộ nhớ hơn.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các kiểu dữ liệu cơ bản</h2>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Kiểu số nguyên (Integer Types)</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Kiểu dữ liệu</th>
              <th className="border border-gray-300 px-4 py-2">Kích thước (bytes)</th>
              <th className="border border-gray-300 px-4 py-2">Phạm vi giá trị</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ sử dụng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code>char</code>
              </td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">-128 đến 127</td>
              <td className="border border-gray-300 px-4 py-2">Ký tự, số nhỏ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code>int</code>
              </td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">-2,147,483,648 đến 2,147,483,647</td>
              <td className="border border-gray-300 px-4 py-2">Tuổi, điểm số</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code>long</code>
              </td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">-9,223,372,036,854,775,808 đến 9,223,372,036,854,775,807</td>
              <td className="border border-gray-300 px-4 py-2">Số lớn, timestamp</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Kiểu số thực (Floating Point Types)</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Kiểu dữ liệu</th>
              <th className="border border-gray-300 px-4 py-2">Kích thước (bytes)</th>
              <th className="border border-gray-300 px-4 py-2">Độ chính xác</th>
              <th className="border border-gray-300 px-4 py-2">Ví dụ sử dụng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code>float</code>
              </td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">6-7 chữ số thập phân</td>
              <td className="border border-gray-300 px-4 py-2">Điểm trung bình, chiều cao</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code>double</code>
              </td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">15-16 chữ số thập phân</td>
              <td className="border border-gray-300 px-4 py-2">Tính toán khoa học, tài chính</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Kiểu ký tự (Character Type)</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <code>char</code>: Lưu trữ một ký tự đơn (A, B, 1, @, ...)
        </li>
        <li>Kích thước: 1 byte</li>
        <li>Phạm vi: -128 đến 127 hoặc 0 đến 255 (unsigned)</li>
        <li>
          Ví dụ: <code>char grade = 'A';</code>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ví dụ minh họa</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    // Khai báo các kiểu dữ liệu khác nhau
    char grade = 'A';           // Ký tự
    int age = 25;              // Số nguyên
    float height = 1.75;       // Số thực đơn
    double salary = 50000.50;  // Số thực kép
    
    // In ra màn hình
    printf("Grade: %c\\n", grade);
    printf("Age: %d\\n", age);
    printf("Height: %.2f\\n", height);
    printf("Salary: %.2f\\n", salary);
    
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
          <span className="text-blue-400">$</span> gcc data_types.c -o data_types
          <br />
          <span className="text-blue-400">$</span> ./data_types
          <br />
          <span className="text-white">Grade: A</span>
          <br />
          <span className="text-white">Age: 25</span>
          <br />
          <span className="text-white">Height: 1.75</span>
          <br />
          <span className="text-white">Salary: 50000.50</span>
          <br />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Cách chọn kiểu dữ liệu phù hợp</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <b>
            Dùng <code>char</code>:
          </b>{" "}
          Khi cần lưu ký tự hoặc số nhỏ (-128 đến 127)
        </li>
        <li>
          <b>
            Dùng <code>int</code>:
          </b>{" "}
          Cho hầu hết các số nguyên thông thường
        </li>
        <li>
          <b>
            Dùng <code>long</code>:
          </b>{" "}
          Khi cần số nguyên rất lớn
        </li>
        <li>
          <b>
            Dùng <code>float</code>:
          </b>{" "}
          Cho số thực đơn giản, tiết kiệm bộ nhớ
        </li>
        <li>
          <b>
            Dùng <code>double</code>:
          </b>{" "}
          Cho tính toán chính xác cao
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>
            <b>Tràn số:</b> Gán giá trị quá lớn cho kiểu dữ liệu nhỏ
          </li>
          <li>
            <b>Mất độ chính xác:</b> Dùng <code>float</code> cho tính toán cần độ chính xác cao
          </li>
          <li>
            <b>So sánh số thực:</b> Không nên dùng <code>==</code> để so sánh số thực
          </li>
          <li>
            <b>Format specifier sai:</b> Dùng <code>%d</code> cho <code>float</code> hoặc ngược lại
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn xem xét phạm vi giá trị cần lưu trữ trước khi chọn kiểu dữ liệu</li>
          <li>
            Dùng <code>sizeof()</code> để kiểm tra kích thước kiểu dữ liệu
          </li>
          <li>
            Với số thực, ưu tiên <code>double</code> nếu không cần tiết kiệm bộ nhớ
          </li>
          <li>Thực hành với các ví dụ đơn giản trước khi làm bài tập phức tạp</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Việc chọn đúng kiểu dữ liệu không chỉ giúp chương trình chạy đúng mà còn tối ưu hiệu suất và tiết kiệm bộ nhớ. Hãy thực hành
        nhiều để làm quen với từng kiểu dữ liệu!
      </div>
    </div>
  );
};

export default BasicDataTypes;
