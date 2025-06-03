import React from "react";

const BaiGiang7 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 7: Hàm trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Giới thiệu</h2>
      <p>
        Hàm là một khối lệnh được đặt tên, dùng để thực hiện một nhiệm vụ cụ thể.
        Hàm giúp tổ chức code rõ ràng, tái sử dụng và dễ bảo trì.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cấu trúc hàm trong C</h2>
      <p>Cấu trúc chung của hàm:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
kiểu_dữ_liệu_tương_trả tên_hàm(danh_sách_tham_số) {
  // thân hàm
}
        `}</code>
      </pre>
      <p>
        Ví dụ hàm không trả về giá trị (kiểu <code>void</code>):
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
void inThongBao() {
  printf("Hello từ hàm!\\n");
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Khai báo và định nghĩa hàm</h2>
      <p>
        - <strong>Khai báo hàm (function prototype)</strong> cho phép compiler biết về hàm trước khi sử dụng.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
void inThongBao();
        `}</code>
      </pre>
      <p>
        - <strong>Định nghĩa hàm</strong> là phần cài đặt thân hàm.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Tham số và đối số</h2>
      <p>
        Hàm có thể nhận tham số đầu vào để làm việc với dữ liệu bên ngoài.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int tinhTong(int a, int b) {
  return a + b;
}

int main() {
  int x = 5, y = 7;
  int tong = tinhTong(x, y);
  printf("Tổng: %d\\n", tong);
  return 0;
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Hàm trả về giá trị</h2>
      <p>
        Hàm có thể trả về giá trị với kiểu dữ liệu xác định (như <code>int</code>, <code>float</code>, ...).
        Giá trị trả về dùng từ khóa <code>return</code>.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Hàm không trả về giá trị (void)</h2>
      <p>
        Nếu hàm không cần trả về kết quả, khai báo kiểu trả về là <code>void</code>.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Hàm đệ quy</h2>
      <p>
        Hàm có thể gọi lại chính nó, gọi là <strong>đệ quy</strong>. Dùng để giải quyết các bài toán có tính chất phân rã.
      </p>
      <p>Ví dụ tính giai thừa:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int giaiThua(int n) {
  if (n == 0) return 1;
  return n * giaiThua(n - 1);
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VIII. Phạm vi biến (Scope)</h2>
      <p>
        Biến khai báo trong hàm là biến cục bộ, chỉ có hiệu lực trong hàm đó.
      </p>
      <p>
        Biến toàn cục được khai báo ngoài hàm và có thể truy cập trong toàn bộ file.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IX. Tổng kết</h2>
      <ul className="list-disc pl-6">
        <li>Hàm giúp tổ chức chương trình modular, dễ đọc và tái sử dụng.</li>
        <li>Khai báo và định nghĩa hàm rõ ràng.</li>
        <li>Hàm có thể nhận tham số và trả về giá trị.</li>
        <li>Hiểu về đệ quy giúp xử lý các bài toán phức tạp.</li>
      </ul>

      <p className="mt-4">
        Bài tiếp theo sẽ là <strong>Mảng một chiều trong C</strong>.
      </p>
    </div>
  );
};

export default BaiGiang7;
