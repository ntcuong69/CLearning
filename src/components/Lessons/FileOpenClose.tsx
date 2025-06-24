import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const FileOpenClose = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Trong bài này, bạn sẽ học cách <b>mở</b> và <b>đóng file</b> trong C – một kỹ năng cực kỳ quan trọng để lưu trữ và xử lý dữ liệu lâu dài, vượt ra ngoài phạm vi bộ nhớ tạm thời của chương trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. File là gì? Tại sao cần dùng file?</h2>
      <p className="mb-4">
        <b>File</b> là nơi lưu trữ dữ liệu trên ổ đĩa (ví dụ: .txt, .csv, .dat). Khi chương trình kết thúc, dữ liệu trong biến sẽ mất, nhưng dữ liệu trong file thì vẫn còn. Vì vậy, file giúp bạn:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Lưu trữ dữ liệu lâu dài</li>
        <li>Chia sẻ dữ liệu giữa các chương trình</li>
        <li>Xử lý dữ liệu lớn mà bộ nhớ RAM không đủ chứa</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các bước làm việc với file trong C</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li><b>Mở file</b> (fopen)</li>
        <li><b>Đọc/ghi dữ liệu</b> (fscanf, fprintf, fread, fwrite...)</li>
        <li><b>Đóng file</b> (fclose)</li>
      </ol>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Mở file với <code>fopen</code></h2>
      <p className="mb-4">
        Hàm <b>fopen</b> dùng để mở file. Nếu file mở thành công, nó trả về một con trỏ kiểu <code>FILE*</code>. Nếu thất bại, trả về <code>NULL</code>.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`FILE *fp = fopen("tenfile.txt", "mode");`}</SyntaxHighlighter>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li><b>"r"</b>: Mở file để đọc (file phải tồn tại)</li>
        <li><b>"w"</b>: Mở file để ghi (tạo mới nếu chưa có, xóa hết dữ liệu cũ)</li>
        <li><b>"a"</b>: Mở file để ghi nối tiếp (thêm vào cuối file)</li>
        <li><b>"r+", "w+", "a+"</b>: Đọc và ghi</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Ví dụ: Mở file để ghi</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        printf("Không mở được file!\\n");
        return 1;
    }
    fprintf(fp, "Xin chào file!\\n");
    fclose(fp);
    printf("Đã ghi dữ liệu vào file output.txt\\n");
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
          <span className="text-blue-400">$</span> gcc file_write.c -o file_write<br/>
          <span className="text-blue-400">$</span> ./file_write<br/>
          <span className="text-white">Đã ghi dữ liệu vào file output.txt</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Đóng file với <code>fclose</code></h2>
      <p className="mb-4">
        Sau khi làm việc xong với file, bạn <b>phải đóng file</b> bằng hàm <b>fclose</b> để giải phóng tài nguyên và đảm bảo dữ liệu được ghi đầy đủ.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`fclose(fp);`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Luôn kiểm tra <code>fp != NULL</code> trước khi thao tác với file. Đừng quên đóng file sau khi dùng xong!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp & Lưu ý</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Quên kiểm tra <code>fp == NULL</code> sau khi mở file</li>
          <li>Quên đóng file (fclose)</li>
          <li>Mở file sai mode (ví dụ: dùng "r" cho file chưa tồn tại)</li>
        </ul>
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <b>Lưu ý:</b>
        <ul className="list-disc pl-6 text-green-700 mt-2">
          <li>Đặt tên file rõ ràng, dễ nhớ</li>
          <li>Đóng file ngay sau khi thao tác xong</li>
          <li>Kiểm tra lỗi khi thao tác với file</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Ghi file</h3>
      <p className="mb-4">Viết chương trình nhập vào một chuỗi, ghi chuỗi đó vào file <code>data.txt</code>.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng <code>fopen</code> với mode "w"</li>
          <li>Dùng <code>fprintf</code> để ghi chuỗi</li>
          <li>Đừng quên đóng file</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Đọc file</h3>
      <p className="mb-4">Viết chương trình mở file <code>data.txt</code> và in nội dung ra màn hình.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng <code>fopen</code> với mode "r"</li>
          <li>Dùng <code>fgets</code> hoặc <code>fscanf</code> để đọc</li>
          <li>Đừng quên đóng file</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thử mở file không tồn tại, hoặc mở file với các mode khác nhau để quan sát kết quả!
      </div>
    </div>
  );
};

export default FileOpenClose;
