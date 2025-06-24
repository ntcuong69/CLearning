import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const DebugErrorHandling = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Trong bài này, bạn sẽ học về <b>Debugging</b> (gỡ lỗi) và <b>Error Handling</b> (xử lý lỗi) trong C – hai kỹ năng cực kỳ quan trọng giúp bạn phát hiện, sửa lỗi và viết chương trình an toàn, tin cậy hơn.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Debugging là gì? Tại sao cần debug?</h2>
      <p className="mb-4">
        <b>Debugging</b> là quá trình tìm và sửa lỗi trong chương trình. Không có chương trình nào tránh khỏi lỗi, kể cả lập trình viên giỏi! Debug giúp bạn:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Phát hiện lỗi sớm, tiết kiệm thời gian</li>
        <li>Hiểu rõ luồng chạy của chương trình</li>
        <li>Viết code an toàn, dễ bảo trì</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các loại lỗi thường gặp</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Lỗi cú pháp (Syntax Error):</b> Sai chính tả, thiếu dấu ;, {'{...}'}</li>
        <li><b>Lỗi logic (Logic Error):</b> Chương trình chạy nhưng ra kết quả sai</li>
        <li><b>Lỗi khi chạy (Runtime Error):</b> Lỗi khi chương trình đang chạy (chia cho 0, tràn mảng...)</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Mẹo:</b> Đọc kỹ thông báo lỗi của trình biên dịch, chú ý dòng báo lỗi và tên biến/hàm liên quan.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Kỹ thuật debug cơ bản</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>In giá trị biến (printf):</b> Thêm printf để kiểm tra giá trị biến tại các bước quan trọng</li>
        <li><b>Dùng debugger (gdb, lldb, IDE):</b> Đặt breakpoint, xem giá trị biến, từng bước chạy chương trình</li>
        <li><b>Đọc kỹ warning và error của trình biên dịch</b></li>
      </ul>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Ví dụ: Debug bằng printf</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int a = 5, b = 0;
    printf("a = %d, b = %d\\n", a, b);
    int c = a / b; // Lỗi chia cho 0
    printf("c = %d\\n", c);
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
          <span className="text-blue-400">$</span> gcc debug1.c -o debug1<br/>
          <span className="text-blue-400">$</span> ./debug1<br/>
          <span className="text-white">a = 5, b = 0</span><br/>
          <span className="text-white">Floating point exception (core dumped)</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Xử lý lỗi (Error Handling) trong C</h2>
      <p className="mb-4">
        Xử lý lỗi giúp chương trình không bị dừng đột ngột, báo lỗi rõ ràng cho người dùng. Một số cách xử lý lỗi phổ biến:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Kiểm tra điều kiện trước khi thực hiện (if, else)</li>
        <li>Trả về mã lỗi (return code) từ hàm</li>
        <li>Dùng <b>perror</b>, <b>strerror</b> để in thông báo lỗi hệ thống</li>
      </ul>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Ví dụ: Xử lý lỗi khi mở file</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *fp = fopen("khong_ton_tai.txt", "r");
    if (fp == NULL) {
        perror("Lỗi mở file");
        printf("Mã lỗi: %d\\n", errno);
        printf("Mô tả: %s\\n", strerror(errno));
        return 1;
    }
    fclose(fp);
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
          <span className="text-blue-400">$</span> gcc file_error.c -o file_error<br/>
          <span className="text-blue-400">$</span> ./file_error<br/>
          <span className="text-white">Lỗi mở file: No such file or directory</span><br/>
          <span className="text-white">Mã lỗi: 2</span><br/>
          <span className="text-white">Mô tả: No such file or directory</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp & Lưu ý</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Không kiểm tra giá trị trả về của hàm (ví dụ: fopen, malloc...)</li>
          <li>Không xử lý lỗi chia cho 0, tràn mảng</li>
          <li>Không đọc kỹ warning/error của trình biên dịch</li>
        </ul>
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <b>Lưu ý:</b>
        <ul className="list-disc pl-6 text-green-700 mt-2">
          <li>Luôn kiểm tra điều kiện trước khi thực hiện thao tác nguy hiểm</li>
          <li>In thông báo lỗi rõ ràng cho người dùng</li>
          <li>Thường xuyên sử dụng printf để kiểm tra giá trị biến</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Debug lỗi logic</h3>
      <p className="mb-4">Cho đoạn code sau, hãy tìm và sửa lỗi để chương trình in ra tổng đúng:</p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <SyntaxHighlighter language="c">{`int sum = 0;
for (int i = 1; i <= 10; i++);
    sum += i;
printf("Tổng = %d\\n", sum);`}</SyntaxHighlighter>
      </pre>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Xử lý lỗi khi nhập số</h3>
      <p className="mb-4">Viết chương trình nhập một số nguyên, kiểm tra chia cho 0 trước khi thực hiện phép chia.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng if để kiểm tra mẫu số khác 0</li>
          <li>In thông báo lỗi nếu chia cho 0</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thử cố tình tạo lỗi và dùng printf/debugger để tìm nguyên nhân, sửa lỗi!
      </div>
    </div>
  );
};

export default DebugErrorHandling;
