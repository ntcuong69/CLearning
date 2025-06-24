import React from "react";
export const CompileAndRun = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này hướng dẫn bạn từng bước cách biên dịch và chạy chương trình C trên nhiều nền tảng khác nhau, đồng thời giúp bạn nhận biết và khắc phục các lỗi thường gặp.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Quy trình biên dịch chương trình C</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li><b>Preprocessing (Tiền xử lý):</b> Xử lý các chỉ thị <code>#include</code>, <code>#define</code>... (thay thế, chèn mã nguồn từ thư viện).</li>
        <li><b>Compilation (Biên dịch):</b> Chuyển mã nguồn thành mã máy (file .o hoặc .obj).</li>
        <li><b>Linking (Liên kết):</b> Kết hợp các file mã máy và thư viện để tạo file thực thi.</li>
        <li><b>Output (Kết quả):</b> Sinh ra file thực thi (.exe trên Windows, không đuôi trên Linux).</li>
      </ol>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ minh họa:</b> Khi bạn nhấn "Run" trong IDE hoặc gõ lệnh biên dịch, chương trình sẽ trải qua đủ 4 bước trên trước khi chạy được.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Công cụ phổ biến để biên dịch</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Windows:</b> Code::Blocks, Dev-C++, Visual Studio, MinGW (cài đặt dễ, giao diện thân thiện)</li>
        <li><b>Linux/macOS:</b> gcc, clang (dùng lệnh terminal, phổ biến cho lập trình hệ thống)</li>
        <li><b>Online:</b> ideone.com, replit.com, onlinegdb.com (không cần cài đặt, phù hợp cho thử nghiệm nhanh)</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Lưu ý:</b> Nếu bạn mới bắt đầu, nên dùng IDE như Code::Blocks hoặc các trang online để tránh lỗi cấu hình môi trường.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Hướng dẫn biên dịch bằng gcc (trên Linux/macOS/Windows dùng MinGW)</h2>
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc hello.c -o hello<br/>
          <span className="text-blue-400">$</span> ./hello<br/>
        </div>
      </div>
      <ul className="list-disc pl-6 mb-4">
        <li><code>gcc hello.c -o hello</code>: Biên dịch file <code>hello.c</code> thành file thực thi <code>hello</code>.</li>
        <li><code>./hello</code>: Chạy chương trình vừa biên dịch.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Giải thích thêm:</b> Nếu có lỗi cú pháp, gcc sẽ báo lỗi và không tạo ra file thực thi. Hãy đọc kỹ thông báo lỗi để sửa.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Một số lỗi phổ biến khi biên dịch</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Thiếu dấu <code>;</code> ở cuối câu lệnh (lỗi thường gặp nhất).</li>
          <li>Viết sai tên hàm (<code>prinf</code> thay vì <code>printf</code>).</li>
          <li>Không khai báo biến trước khi dùng.</li>
          <li>Thiếu thư viện như <code>#include &lt;stdio.h&gt;</code>.</li>
          <li>Chạy sai lệnh (ví dụ: quên <code>./</code> trước tên file trên Linux).</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">V. Mẹo thực hành và khắc phục lỗi</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn đọc kỹ thông báo lỗi, tìm dòng báo lỗi trong code để sửa.</li>
          <li>Thực hành nhiều lần với các ví dụ đơn giản trước khi thử chương trình phức tạp.</li>
          <li>Nếu dùng IDE, hãy tận dụng chức năng "Build & Run" để tự động hóa quá trình.</li>
          <li>Nếu gặp lỗi không rõ, hãy tìm kiếm trên Google hoặc hỏi cộng đồng.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Lập trình là quá trình thử - sai - sửa. Đừng nản lòng khi gặp lỗi, vì đó là cách bạn tiến bộ nhanh nhất!
      </div>
    </div>
  );
}