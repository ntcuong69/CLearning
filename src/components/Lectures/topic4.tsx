import React from "react";

const BaiGiang4 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 4: Toán tử và biểu thức trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Biểu thức trong C</h2>
      <p>
        Biểu thức là tập hợp các toán hạng và toán tử kết hợp với nhau để tạo ra giá trị mới. Ví dụ:
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>int x = a + b * c;</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các loại toán tử</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">1. Toán tử số học</h3>
      <table className="table-auto w-full text-left border border-gray-300 my-4">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-4 py-2">Toán tử</th>
            <th className="border px-4 py-2">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">+</td><td className="border px-4 py-2">Cộng</td></tr>
          <tr><td className="border px-4 py-2">-</td><td className="border px-4 py-2">Trừ</td></tr>
          <tr><td className="border px-4 py-2">*</td><td className="border px-4 py-2">Nhân</td></tr>
          <tr><td className="border px-4 py-2">/</td><td className="border px-4 py-2">Chia</td></tr>
          <tr><td className="border px-4 py-2">%</td><td className="border px-4 py-2">Chia lấy dư</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Toán tử quan hệ</h3>
      <ul className="list-disc pl-6">
        <li><code>==</code>: bằng</li>
        <li><code>!=</code>: khác</li>
        <li><code>&gt;</code>: lớn hơn</li>
        <li><code>&lt;</code>: nhỏ hơn</li>
        <li><code>&gt;=</code>: lớn hơn hoặc bằng</li>
        <li><code>&lt;=</code>: nhỏ hơn hoặc bằng</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Toán tử logic</h3>
      <ul className="list-disc pl-6">
        <li><code>&&</code>: AND (và)</li>
        <li><code>||</code>: OR (hoặc)</li>
        <li><code>!</code>: NOT (phủ định)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">4. Toán tử gán</h3>
      <ul className="list-disc pl-6">
        <li><code>=</code>: gán</li>
        <li><code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>: gán kết hợp</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">5. Toán tử tăng/giảm</h3>
      <ul className="list-disc pl-6">
        <li><code>++</code>: tăng 1 đơn vị</li>
        <li><code>--</code>: giảm 1 đơn vị</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Thứ tự ưu tiên toán tử</h2>
      <p>Ví dụ:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>int x = 2 + 3 * 4; // Kết quả là 14 vì * ưu tiên hơn +</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Biểu thức phức tạp</h2>
      <p>Có thể dùng dấu ngoặc để thay đổi thứ tự thực hiện:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>int x = (2 + 3) * 4; // Kết quả là 20</code>
      </pre>

      <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 my-4">
        Ghi nhớ: Nên dùng dấu ngoặc để biểu thức rõ ràng, tránh lỗi khó phát hiện.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Tổng kết</h2>
      <ul className="list-disc pl-6">
        <li>Toán tử là công cụ để xử lý dữ liệu và điều kiện.</li>
        <li>Có nhiều nhóm toán tử: số học, quan hệ, logic, gán, tăng/giảm.</li>
        <li>Thứ tự ưu tiên quan trọng trong biểu thức.</li>
        <li>Dùng ngoặc để kiểm soát độ ưu tiên rõ ràng.</li>
      </ul>

      <p className="mt-4">Trong bài tiếp theo, bạn sẽ học về <strong>câu lệnh điều kiện trong C</strong>.</p>
    </div>
  );
};

export default BaiGiang4;
