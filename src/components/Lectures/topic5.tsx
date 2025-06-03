import React from "react";

const BaiGiang5 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 5: Câu lệnh điều kiện trong C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Giới thiệu</h2>
      <p>
        Câu lệnh điều kiện được dùng để điều khiển luồng chương trình dựa trên kết quả đúng/sai của một điều kiện.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Câu lệnh if</h2>
      <p>Cú pháp cơ bản:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
if (điều_kiện) {
  // khối lệnh nếu điều kiện đúng
}
        `}</code>
      </pre>
      <p>Ví dụ:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int a = 10;
if (a > 5) {
  printf("a lớn hơn 5");
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Câu lệnh if...else</h2>
      <p>Cú pháp:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
if (điều_kiện) {
  // nếu điều kiện đúng
} else {
  // nếu điều kiện sai
}
        `}</code>
      </pre>
      <p>Ví dụ:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int a = 3;
if (a % 2 == 0) {
  printf("a là số chẵn");
} else {
  printf("a là số lẻ");
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Câu lệnh if...else lồng nhau</h2>
      <p>Chúng ta có thể lồng nhiều if...else để kiểm tra nhiều điều kiện:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int score = 85;
if (score >= 90) {
  printf("Xuất sắc");
} else if (score >= 75) {
  printf("Khá");
} else if (score >= 50) {
  printf("Trung bình");
} else {
  printf("Yếu");
}
        `}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Câu lệnh switch</h2>
      <p>Dùng khi có nhiều trường hợp so sánh giá trị:</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>{`
int option = 2;
switch (option) {
  case 1:
    printf("Chọn 1");
    break;
  case 2:
    printf("Chọn 2");
    break;
  default:
    printf("Không hợp lệ");
    break;
}
        `}</code>
      </pre>

      <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 my-4">
        Ghi nhớ: Luôn dùng <code>break;</code> để tránh chương trình "rơi qua" các case tiếp theo.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Tổng kết</h2>
      <ul className="list-disc pl-6">
        <li>Sử dụng <code>if</code> và <code>if...else</code> để kiểm tra điều kiện logic.</li>
        <li>Lồng <code>if</code> để xử lý nhiều điều kiện phức tạp.</li>
        <li>Dùng <code>switch</code> khi có nhiều lựa chọn cụ thể cho cùng một biến.</li>
      </ul>

      <p className="mt-4">Trong bài tiếp theo, bạn sẽ học về <strong>câu lệnh lặp trong C</strong>.</p>
    </div>
  );
};

export default BaiGiang5;
