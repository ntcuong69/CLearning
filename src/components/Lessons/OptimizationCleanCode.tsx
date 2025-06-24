import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const OptimizationCleanCode = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Trong bài này, bạn sẽ học về <b>Tối ưu hóa (Optimization)</b> và <b>Clean Code</b> (code sạch) – hai yếu tố giúp chương trình chạy nhanh, tiết kiệm tài nguyên và dễ bảo trì, phát triển lâu dài.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tối ưu hóa là gì? Clean Code là gì?</h2>
      <p className="mb-4">
        <b>Tối ưu hóa</b> là quá trình cải thiện hiệu suất chương trình (tốc độ, bộ nhớ, tài nguyên). <b>Clean Code</b> là code dễ đọc, dễ hiểu, dễ bảo trì, ít lỗi.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Code tối ưu giúp chương trình chạy nhanh, tiết kiệm tài nguyên</li>
        <li>Code sạch giúp bạn (và đồng đội) dễ sửa, dễ mở rộng, ít bug</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Nguyên tắc Clean Code cơ bản</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Đặt tên rõ ràng:</b> Biến, hàm, file nên có tên dễ hiểu, đúng ý nghĩa</li>
        <li><b>Chia nhỏ hàm:</b> Mỗi hàm chỉ nên làm một việc</li>
        <li><b>Tránh lặp code:</b> Dùng hàm, vòng lặp thay vì copy-paste</li>
        <li><b>Comment hợp lý:</b> Giải thích đoạn code phức tạp, không lạm dụng</li>
        <li><b>Format code chuẩn:</b> Thụt lề, xuống dòng, khoảng trắng hợp lý</li>
      </ul>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Ví dụ: Code xấu vs code sạch</h3>
      <div className="mb-2 font-semibold">Code xấu:</div>
      <pre className="bg-gray-100 p-4 border-l-4 border-red-400 overflow-x-auto rounded mb-2">
        <SyntaxHighlighter language="c">{`int a,b,c;for(a=0;a<10;a++){b=a*2;c=b+1;printf("%d ",c);}`}</SyntaxHighlighter>
      </pre>
      <div className="mb-2 font-semibold">Code sạch:</div>
      <pre className="bg-gray-100 p-4 border-l-4 border-green-400 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`for (int i = 0; i < 10; i++) {
    int doubled = i * 2;
    int result = doubled + 1;
    printf("%d ", result);
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Mẹo tối ưu hóa cơ bản</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Chọn thuật toán phù hợp (tìm kiếm, sắp xếp...)</li>
        <li>Hạn chế lặp không cần thiết, dùng biến tạm hợp lý</li>
        <li>Tránh khai báo biến trong vòng lặp nếu không cần</li>
        <li>Dùng toán tử ++i thay vì i++ nếu không cần giá trị cũ</li>
        <li>Tránh gọi hàm lồng nhau nhiều lần trong vòng lặp</li>
      </ul>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Ví dụ: Tối ưu hóa vòng lặp</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Chưa tối ưu
for (int i = 0; i < n; i++) {
    for (int j = 0; j < strlen(s); j++) {
        // ...
    }
}
// Tối ưu hơn
int len = strlen(s);
for (int i = 0; i < n; i++) {
    for (int j = 0; j < len; j++) {
        // ...
    }
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Lỗi thường gặp & Lưu ý</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Đặt tên biến/hàm khó hiểu, viết tắt quá mức</li>
          <li>Code lặp lại nhiều lần, không dùng hàm</li>
          <li>Không comment hoặc comment dư thừa</li>
          <li>Không tối ưu vòng lặp, thuật toán</li>
        </ul>
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <b>Lưu ý:</b>
        <ul className="list-disc pl-6 text-green-700 mt-2">
          <li>Luôn đọc lại code của mình, tự hỏi: "Người khác có hiểu không?"</li>
          <li>Ưu tiên code dễ hiểu hơn code ngắn nhưng khó đọc</li>
          <li>Thường xuyên refactor, dọn dẹp code cũ</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Viết lại code sạch</h3>
      <p className="mb-4">Cho đoạn code sau, hãy viết lại cho dễ đọc, dễ hiểu hơn:</p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <SyntaxHighlighter language="c">{`int x,y;for(x=0;x<5;x++){for(y=0;y<5;y++){printf("%d ",x*y);}}`}</SyntaxHighlighter>
      </pre>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Tối ưu hóa thuật toán</h3>
      <p className="mb-4">Viết chương trình tính tổng các số chẵn từ 1 đến n theo cách tối ưu nhất.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng biến tạm, tránh kiểm tra chẵn/lẻ trong vòng lặp nếu có thể</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy đọc lại code cũ của bạn, thử refactor cho sạch và tối ưu hơn!
      </div>
    </div>
  );
};

export default OptimizationCleanCode;
