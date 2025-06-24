import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const BinaryFiles = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Trong bài này, bạn sẽ học về <b>file nhị phân (binary file)</b> trong C – một chủ đề quan trọng để lưu trữ dữ liệu dạng số, struct, mảng... một cách hiệu quả và tiết kiệm bộ nhớ hơn so với file văn bản.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. File nhị phân là gì?</h2>
      <p className="mb-4">
        <b>File nhị phân</b> lưu trữ dữ liệu dưới dạng byte (0/1), không phải ký tự ASCII như file văn bản. Dữ liệu ghi ra file nhị phân sẽ giống hệt như trong bộ nhớ RAM, giúp lưu trữ số, struct, mảng... nhanh và chính xác.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Khác biệt:</b> File nhị phân không thể mở và đọc trực tiếp bằng Notepad, VSCode... mà phải dùng chương trình đọc/ghi nhị phân.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Các hàm thao tác file nhị phân</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>fwrite</b>: Ghi dữ liệu từ bộ nhớ ra file nhị phân</li>
        <li><b>fread</b>: Đọc dữ liệu từ file nhị phân vào bộ nhớ</li>
        <li><b>fseek</b>, <b>ftell</b>: Di chuyển và lấy vị trí con trỏ file</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ghi file nhị phân với fwrite</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    FILE *fp = fopen("data.bin", "wb");
    if (fp == NULL) {
        printf("Không mở được file!\n");
        return 1;
    }
    fwrite(arr, sizeof(int), 5, fp);
    fclose(fp);
    printf("Đã ghi mảng vào file data.bin\n");
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
          <span className="text-blue-400">$</span> gcc bin_write.c -o bin_write<br/>
          <span className="text-blue-400">$</span> ./bin_write<br/>
          <span className="text-white">Đã ghi mảng vào file data.bin</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Đọc file nhị phân với fread</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int arr[5];
    FILE *fp = fopen("data.bin", "rb");
    if (fp == NULL) {
        printf("Không mở được file!\n");
        return 1;
    }
    fread(arr, sizeof(int), 5, fp);
    fclose(fp);
    printf("Mảng đọc từ file:\n");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
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
          <span className="text-blue-400">$</span> gcc bin_read.c -o bin_read<br/>
          <span className="text-blue-400">$</span> ./bin_read<br/>
          <span className="text-white">Mảng đọc từ file:</span><br/>
          <span className="text-white">1 2 3 4 5 </span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Ghi và đọc struct với file nhị phân</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <string.h>

struct Student {
    char name[20];
    int age;
};

int main() {
    struct Student s1 = {"An", 20};
    FILE *fp = fopen("student.bin", "wb");
    fwrite(&s1, sizeof(struct Student), 1, fp);
    fclose(fp);

    struct Student s2;
    fp = fopen("student.bin", "rb");
    fread(&s2, sizeof(struct Student), 1, fp);
    fclose(fp);
    printf("Tên: %s, Tuổi: %d\n", s2.name, s2.age);
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
          <span className="text-blue-400">$</span> gcc struct_bin.c -o struct_bin<br/>
          <span className="text-blue-400">$</span> ./struct_bin<br/>
          <span className="text-white">Tên: An, Tuổi: 20</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Lỗi thường gặp & Lưu ý</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Lỗi thường gặp:</b>
        <ul className="list-disc pl-6 text-red-700">
          <li>Quên kiểm tra <code>fp == NULL</code> trước khi đọc/ghi</li>
          <li>Ghi/đọc sai số lượng phần tử hoặc kích thước</li>
          <li>Đọc file nhị phân bằng chương trình đọc file văn bản</li>
        </ul>
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <b>Lưu ý:</b>
        <ul className="list-disc pl-6 text-green-700 mt-2">
          <li>Luôn kiểm tra file mở thành công trước khi thao tác</li>
          <li>Đóng file ngay sau khi dùng xong</li>
          <li>Dùng đúng mode "rb", "wb" cho file nhị phân</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Ghi và đọc mảng số nguyên</h3>
      <p className="mb-4">Viết chương trình nhập n số nguyên, ghi vào file nhị phân <code>numbers.bin</code>, sau đó đọc lại và in ra màn hình.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng <code>fwrite</code> để ghi mảng</li>
          <li>Dùng <code>fread</code> để đọc mảng</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Ghi và đọc struct</h3>
      <p className="mb-4">Viết chương trình nhập thông tin n sinh viên (tên, tuổi), ghi vào file nhị phân <code>students.bin</code>, sau đó đọc lại và in ra màn hình.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Khai báo struct Student</li>
          <li>Dùng <code>fwrite</code> và <code>fread</code> với mảng struct</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thử ghi/đọc file nhị phân với struct lồng nhau hoặc dữ liệu lớn để quan sát hiệu quả!
      </div>
    </div>
  );
};

export default BinaryFiles;
