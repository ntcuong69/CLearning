import React from "react";

const BaiGiang6 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 6: Câu lệnh vòng lặp trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Giới thiệu</h2>
      <p>
        Vòng lặp cho phép thực hiện một khối lệnh lặp đi lặp lại nhiều lần khi điều kiện còn đúng.
        Trong C có ba loại vòng lặp chính: <code>for</code>, <code>while</code>, và <code>do...while</code>.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Vòng lặp for</h2>
      <p>Cú pháp:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
for (khởi_tạo; điều_kiện; cập_nhật) {
  // khối lệnh lặp
}
        `}</code>
      </pre>
      <p>Ví dụ:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
for (int i = 1; i <= 5; i++) {
  printf("%d ", i);
}
// Output: 1 2 3 4 5
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Vòng lặp while</h2>
      <p>Cú pháp:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
while (điều_kiện) {
  // khối lệnh lặp
}
        `}</code>
      </pre>
      <p>Ví dụ:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int i = 1;
while (i <= 5) {
  printf("%d ", i);
  i++;
}
// Output: 1 2 3 4 5
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Vòng lặp do...while</h2>
      <p>Khác với <code>while</code>, vòng lặp <code>do...while</code> sẽ chạy ít nhất một lần, sau đó mới kiểm tra điều kiện.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int i = 1;
do {
  printf("%d ", i);
  i++;
} while (i <= 5);
// Output: 1 2 3 4 5
        `}</code>
      </pre>

      <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 my-4">
        Ghi nhớ: Sử dụng <code>for</code> khi biết trước số lần lặp, dùng <code>while</code> hoặc <code>do...while</code> khi số lần lặp chưa xác định rõ.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Câu lệnh break và continue</h2>
      <ul className="list-disc pl-6">
        <li><code>break</code>: Dừng vòng lặp ngay lập tức.</li>
        <li><code>continue</code>: Bỏ qua phần còn lại và tiếp tục lần lặp tiếp theo.</li>
      </ul>

      <p>Ví dụ sử dụng <code>break</code>:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
for (int i = 1; i <= 10; i++) {
  if (i == 5) break;
  printf("%d ", i);
}
// Output: 1 2 3 4
        `}</code>
      </pre>

      <p>Ví dụ sử dụng <code>continue</code>:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
for (int i = 1; i <= 5; i++) {
  if (i == 3) continue;
  printf("%d ", i);
}
// Output: 1 2 4 5
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Tổng kết</h2>
      <ul className="list-disc pl-6">
        <li>Vòng lặp là công cụ không thể thiếu trong lập trình.</li>
        <li><code>for</code>, <code>while</code>, và <code>do...while</code> được dùng trong các hoàn cảnh khác nhau.</li>
        <li><code>break</code> và <code>continue</code> giúp điều khiển luồng vòng lặp linh hoạt hơn.</li>
      </ul>

      <p className="mt-4">Tiếp theo, bạn sẽ học về <strong>mảng một chiều trong C</strong>.</p>
    </div>
  );
};

export default BaiGiang6;
