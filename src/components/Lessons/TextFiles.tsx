import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const TextFiles = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Trong bài này, bạn sẽ học cách <b>đọc</b> và <b>ghi file văn bản (text file)</b> trong C – một kỹ năng nền tảng để lưu trữ, xử lý và trao đổi dữ liệu dạng chữ giữa các chương trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. File văn bản là gì?</h2>
      <p className="mb-4">
        <b>File văn bản</b> là file lưu trữ dữ liệu dưới dạng ký tự (chữ, số, ký hiệu), có thể mở bằng các trình soạn thảo như Notepad, VSCode... Ví dụ: <code>.txt</code>, <code>.csv</code>.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Khác biệt:</b> File văn bản lưu ký tự ASCII, còn file nhị phân lưu dữ liệu dạng byte (xem thêm ở bài sau).
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các hàm đọc/ghi file văn bản cơ bản</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>fprintf</b>, <b>fscanf</b>: Ghi/đọc dữ liệu định dạng (giống printf/scanf nhưng với file)</li>
        <li><b>fputs</b>, <b>fgets</b>: Ghi/đọc một dòng (chuỗi)</li>
        <li><b>fputc</b>, <b>fgetc</b>: Ghi/đọc một ký tự</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ghi file văn bản với fprintf, fputs</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "w");
    if (fp == NULL) {
        printf("Không mở được file!\\n");
        return 1;
    }
    fprintf(fp, "Xin chào, đây là dòng 1!\\n");
    fputs("Đây là dòng 2\\n", fp);
    fclose(fp);
    printf("Đã ghi dữ liệu vào file data.txt\\n");
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
          <span className="text-blue-400">$</span> gcc text_write.c -o text_write<br/>
          <span className="text-blue-400">$</span> ./text_write<br/>
          <span className="text-white">Đã ghi dữ liệu vào file data.txt</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Đọc file văn bản với fscanf, fgets</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "r");
    if (fp == NULL) {
        printf("Không mở được file!\\n");
        return 1;
    }
    char line[100];
    printf("Nội dung file:\\n");
    while (fgets(line, sizeof(line), fp) != NULL) {
        printf("%s", line);
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
          <span className="text-blue-400">$</span> gcc text_read.c -o text_read<br/>
          <span className="text-blue-400">$</span> ./text_read<br/>
          <span className="text-white">Nội dung file:</span><br/>
          <span className="text-white">Xin chào, đây là dòng 1!</span><br/>
          <span className="text-white">Đây là dòng 2</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Đọc/ghi từng ký tự với fgetc, fputc</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "r");
    if (fp == NULL) {
        printf("Không mở được file!\\n");
        return 1;
    }
    char c;
    printf("Nội dung file (từng ký tự):\\n");
    while ((c = fgetc(fp)) != EOF) {
        putchar(c);
    }
    fclose(fp);
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Lỗi thường gặp & Lưu ý</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Quên kiểm tra <code>fp == NULL</code> trước khi đọc/ghi</li>
          <li>Quên đóng file</li>
          <li>Đọc/ghi sai mode (dùng "r" để ghi, "w" để đọc...)</li>
        </ul>
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <b>Lưu ý:</b>
        <ul className="list-disc pl-6 text-green-700 mt-2">
          <li>Luôn kiểm tra file mở thành công trước khi thao tác</li>
          <li>Đóng file ngay sau khi dùng xong</li>
          <li>Dùng fgets để đọc từng dòng, tránh tràn bộ nhớ</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Ghi nhiều dòng vào file</h3>
      <p className="mb-4">Viết chương trình nhập n dòng từ bàn phím, ghi vào file <code>notes.txt</code> (mỗi dòng một lần).</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng <code>fgets</code> để nhập từng dòng</li>
          <li>Dùng <code>fputs</code> để ghi từng dòng vào file</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Đếm số dòng trong file</h3>
      <p className="mb-4">Viết chương trình đếm số dòng trong file <code>notes.txt</code>.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng <code>fgets</code> để đọc từng dòng</li>
          <li>Tăng biến đếm mỗi khi đọc được một dòng</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thử đọc file lớn, hoặc thử ghi file với nhiều encoding khác nhau để quan sát kết quả!
      </div>
    </div>
  );
};

export default TextFiles;
