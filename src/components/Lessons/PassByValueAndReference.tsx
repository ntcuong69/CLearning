import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const PassByValueAndReference = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu sâu về hai cách truyền tham số trong C: truyền theo giá trị (Pass by Value) và truyền theo tham chiếu (Pass by Reference). Đây là khái niệm quan trọng để hiểu cách dữ liệu được xử lý trong hàm.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tại sao cần hiểu về cách truyền tham số?</h2>
      <p className="mb-4">
        Khi gọi hàm, chúng ta cần truyền dữ liệu vào hàm để xử lý. Có hai cách chính để truyền dữ liệu, mỗi cách có ảnh hưởng khác nhau đến biến gốc:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        <li><strong>Truyền theo giá trị:</strong> Tạo bản sao của dữ liệu, thay đổi trong hàm không ảnh hưởng biến gốc</li>
        <li><strong>Truyền theo tham chiếu:</strong> Truyền địa chỉ của biến, thay đổi trong hàm ảnh hưởng trực tiếp biến gốc</li>
        <li><strong>Hiệu suất:</strong> Ảnh hưởng đến tốc độ thực thi chương trình</li>
        <li><strong>Bảo mật dữ liệu:</strong> Kiểm soát việc thay đổi dữ liệu gốc</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> Khi bạn muốn hàm tính tổng hai số mà không làm thay đổi số gốc → dùng Pass by Value. Khi muốn hàm sắp xếp mảng và thay đổi mảng gốc → dùng Pass by Reference.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Truyền theo giá trị (Pass by Value)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khái niệm</h3>
      <p className="mb-4">
        Khi truyền tham số theo giá trị, compiler sẽ tạo ra một bản sao của giá trị biến và truyền bản sao này vào hàm. Do đó, mọi thay đổi trong hàm chỉ ảnh hưởng đến bản sao, không ảnh hưởng đến biến gốc.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Đặc điểm:</strong> An toàn, không làm thay đổi dữ liệu gốc, nhưng tốn bộ nhớ cho việc tạo bản sao.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ minh họa</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void modifyValue(int x) {
    printf("Trong hàm - Trước khi thay đổi: x = %d\\n", x);
    x = x * 2;  // Thay đổi bản sao
    printf("Trong hàm - Sau khi thay đổi: x = %d\\n", x);
}

int main() {
    int number = 10;
    
    printf("Trước khi gọi hàm: number = %d\\n", number);
    printf("Địa chỉ của number: %p\\n", (void*)&number);
    
    modifyValue(number);  // Truyền giá trị
    
    printf("Sau khi gọi hàm: number = %d\\n", number);
    printf("Địa chỉ của number: %p\\n", (void*)&number);
    
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
          <span className="text-blue-400">$</span> gcc pass_by_value.c -o pass_by_value<br/>
          <span className="text-blue-400">$</span> ./pass_by_value<br/>
          <span className="text-white">Trước khi gọi hàm: number = 10</span><br/>
          <span className="text-white">Địa chỉ của number: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Trong hàm - Trước khi thay đổi: x = 10</span><br/>
          <span className="text-white">Trong hàm - Sau khi thay đổi: x = 20</span><br/>
          <span className="text-white">Sau khi gọi hàm: number = 10</span><br/>
          <span className="text-white">Địa chỉ của number: 0x7fff5fbff8c8</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Giải thích chi tiết</h3>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h4 className="font-semibold mb-2">Quá trình xảy ra:</h4>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Biến <code>number</code> có giá trị 10, địa chỉ 0x7fff5fbff8c8</li>
          <li>Khi gọi <code>modifyValue(number)</code>, compiler tạo bản sao của giá trị 10</li>
          <li>Bản sao được lưu trong tham số <code>x</code> của hàm (có địa chỉ khác)</li>
          <li>Hàm thay đổi <code>x = 20</code> (chỉ thay đổi bản sao)</li>
          <li>Biến <code>number</code> gốc vẫn giữ nguyên giá trị 10</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Truyền theo tham chiếu (Pass by Reference)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Khái niệm</h3>
      <p className="mb-4">
        Trong C, không có khái niệm "pass by reference" thực sự như các ngôn ngữ khác. Thay vào đó, chúng ta sử dụng con trỏ để truyền địa chỉ của biến, cho phép hàm thay đổi trực tiếp giá trị tại địa chỉ đó.
      </p>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              <strong>Lưu ý:</strong> C thực sự chỉ có "pass by value", nhưng chúng ta mô phỏng "pass by reference" bằng cách truyền địa chỉ (con trỏ).
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Ví dụ minh họa</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void modifyValueByReference(int *x) {
    printf("Trong hàm - Trước khi thay đổi: *x = %d\\n", *x);
    printf("Trong hàm - Địa chỉ x trỏ đến: %p\\n", (void*)x);
    *x = *x * 2;  // Thay đổi giá trị tại địa chỉ
    printf("Trong hàm - Sau khi thay đổi: *x = %d\\n", *x);
}

int main() {
    int number = 10;
    
    printf("Trước khi gọi hàm: number = %d\\n", number);
    printf("Địa chỉ của number: %p\\n", (void*)&number);
    
    modifyValueByReference(&number);  // Truyền địa chỉ
    
    printf("Sau khi gọi hàm: number = %d\\n", number);
    printf("Địa chỉ của number: %p\\n", (void*)&number);
    
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
          <span className="text-blue-400">$</span> gcc pass_by_reference.c -o pass_by_reference<br/>
          <span className="text-blue-400">$</span> ./pass_by_reference<br/>
          <span className="text-white">Trước khi gọi hàm: number = 10</span><br/>
          <span className="text-white">Địa chỉ của number: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Trong hàm - Trước khi thay đổi: *x = 10</span><br/>
          <span className="text-white">Trong hàm - Địa chỉ x trỏ đến: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Trong hàm - Sau khi thay đổi: *x = 20</span><br/>
          <span className="text-white">Sau khi gọi hàm: number = 20</span><br/>
          <span className="text-white">Địa chỉ của number: 0x7fff5fbff8c8</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Giải thích chi tiết</h3>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h4 className="font-semibold mb-2">Quá trình xảy ra:</h4>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Biến <code>number</code> có giá trị 10, địa chỉ 0x7fff5fbff8c8</li>
          <li>Khi gọi <code>modifyValueByReference(&number)</code>, truyền địa chỉ của number</li>
          <li>Con trỏ <code>x</code> trong hàm trỏ đến địa chỉ 0x7fff5fbff8c8</li>
          <li>Hàm thay đổi <code>*x = 20</code> (thay đổi trực tiếp tại địa chỉ)</li>
          <li>Biến <code>number</code> gốc bị thay đổi thành 20</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. So sánh hai cách truyền tham số</h2>
      
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Tiêu chí</th>
              <th className="border border-gray-300 px-4 py-2">Pass by Value</th>
              <th className="border border-gray-300 px-4 py-2">Pass by Reference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Cách truyền</strong></td>
              <td className="border border-gray-300 px-4 py-2">Truyền giá trị (bản sao)</td>
              <td className="border border-gray-300 px-4 py-2">Truyền địa chỉ (con trỏ)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Thay đổi biến gốc</strong></td>
              <td className="border border-gray-300 px-4 py-2">Không</td>
              <td className="border border-gray-300 px-4 py-2">Có</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Bộ nhớ</strong></td>
              <td className="border border-gray-300 px-4 py-2">Tốn bộ nhớ (tạo bản sao)</td>
              <td className="border border-gray-300 px-4 py-2">Tiết kiệm bộ nhớ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Hiệu suất</strong></td>
              <td className="border border-gray-300 px-4 py-2">Chậm hơn với dữ liệu lớn</td>
              <td className="border border-gray-300 px-4 py-2">Nhanh hơn với dữ liệu lớn</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Bảo mật</strong></td>
              <td className="border border-gray-300 px-4 py-2">An toàn</td>
              <td className="border border-gray-300 px-4 py-2">Có thể gây lỗi</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><strong>Khi nào dùng</strong></td>
              <td className="border border-gray-300 px-4 py-2">Dữ liệu nhỏ, không muốn thay đổi gốc</td>
              <td className="border border-gray-300 px-4 py-2">Dữ liệu lớn, muốn thay đổi gốc</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Ví dụ thực tế với mảng</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Truyền mảng theo giá trị (không khả thi)</h3>
      <p className="mb-4">
        Trong C, mảng không thể truyền theo giá trị thực sự vì sẽ rất tốn bộ nhớ. Khi truyền mảng, thực chất là truyền địa chỉ của phần tử đầu tiên.
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Truyền mảng theo tham chiếu</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void printArray(int arr[], int size) {
    printf("Mảng trong hàm: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

void modifyArray(int arr[], int size) {
    printf("Trước khi thay đổi mảng: ");
    printArray(arr, size);
    
    // Thay đổi mảng
    for (int i = 0; i < size; i++) {
        arr[i] = arr[i] * 2;
    }
    
    printf("Sau khi thay đổi mảng: ");
    printArray(arr, size);
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = 5;
    
    printf("Mảng gốc: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    modifyArray(numbers, size);
    
    printf("Mảng sau khi gọi hàm: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
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
          <span className="text-blue-400">$</span> gcc array_example.c -o array_example<br/>
          <span className="text-blue-400">$</span> ./array_example<br/>
          <span className="text-white">Mảng gốc: 1 2 3 4 5</span><br/>
          <span className="text-white">Trước khi thay đổi mảng: 1 2 3 4 5</span><br/>
          <span className="text-white">Sau khi thay đổi mảng: 2 4 6 8 10</span><br/>
          <span className="text-white">Mảng sau khi gọi hàm: 2 4 6 8 10</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Ví dụ với cấu trúc (Struct)</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Truyền struct theo giá trị</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

typedef struct {
    char name[50];
    int age;
    float score;
} Student;

void printStudent(Student s) {
    printf("Tên: %s, Tuổi: %d, Điểm: %.2f\\n", s.name, s.age, s.score);
}

void modifyStudent(Student s) {
    printf("Trước khi thay đổi: ");
    printStudent(s);
    
    s.age = 25;  // Thay đổi bản sao
    s.score = 9.5;
    
    printf("Sau khi thay đổi: ");
    printStudent(s);
}

int main() {
    Student student1 = {"Nguyễn Văn A", 20, 8.5};
    
    printf("Trước khi gọi hàm: ");
    printStudent(student1);
    
    modifyStudent(student1);
    
    printf("Sau khi gọi hàm: ");
    printStudent(student1);
    
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
          <span className="text-blue-400">$</span> gcc struct_value.c -o struct_value<br/>
          <span className="text-blue-400">$</span> ./struct_value<br/>
          <span className="text-white">Trước khi gọi hàm: Tên: Nguyễn Văn A, Tuổi: 20, Điểm: 8.50</span><br/>
          <span className="text-white">Trước khi thay đổi: Tên: Nguyễn Văn A, Tuổi: 20, Điểm: 8.50</span><br/>
          <span className="text-white">Sau khi thay đổi: Tên: Nguyễn Văn A, Tuổi: 25, Điểm: 9.50</span><br/>
          <span className="text-white">Sau khi gọi hàm: Tên: Nguyễn Văn A, Tuổi: 20, Điểm: 8.50</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Truyền struct theo tham chiếu</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

typedef struct {
    char name[50];
    int age;
    float score;
} Student;

void printStudent(Student *s) {
    printf("Tên: %s, Tuổi: %d, Điểm: %.2f\\n", s->name, s->age, s->score);
}

void modifyStudent(Student *s) {
    printf("Trước khi thay đổi: ");
    printStudent(s);
    
    s->age = 25;  // Thay đổi trực tiếp
    s->score = 9.5;
    
    printf("Sau khi thay đổi: ");
    printStudent(s);
}

int main() {
    Student student1 = {"Nguyễn Văn A", 20, 8.5};
    
    printf("Trước khi gọi hàm: ");
    printStudent(&student1);
    
    modifyStudent(&student1);
    
    printf("Sau khi gọi hàm: ");
    printStudent(&student1);
    
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
          <span className="text-blue-400">$</span> gcc struct_reference.c -o struct_reference<br/>
          <span className="text-blue-400">$</span> ./struct_reference<br/>
          <span className="text-white">Trước khi gọi hàm: Tên: Nguyễn Văn A, Tuổi: 20, Điểm: 8.50</span><br/>
          <span className="text-white">Trước khi thay đổi: Tên: Nguyễn Văn A, Tuổi: 20, Điểm: 8.50</span><br/>
          <span className="text-white">Sau khi thay đổi: Tên: Nguyễn Văn A, Tuổi: 25, Điểm: 9.50</span><br/>
          <span className="text-white">Sau khi gọi hàm: Tên: Nguyễn Văn A, Tuổi: 25, Điểm: 9.50</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Khi nào sử dụng mỗi cách?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <h3 className="font-semibold text-green-800 mb-2">Sử dụng Pass by Value khi:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Dữ liệu nhỏ (int, float, char)</li>
            <li>• Không muốn thay đổi biến gốc</li>
            <li>• Cần bảo vệ dữ liệu gốc</li>
            <li>• Hàm chỉ đọc dữ liệu</li>
            <li>• Muốn code an toàn</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Sử dụng Pass by Reference khi:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Dữ liệu lớn (mảng, struct)</li>
            <li>• Muốn thay đổi biến gốc</li>
            <li>• Cần hiệu suất cao</li>
            <li>• Hàm cần trả về nhiều giá trị</li>
            <li>• Làm việc với con trỏ</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VIII. Lưu ý quan trọng</h2>
      
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Các lỗi thường gặp</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Quên dấu & khi truyền địa chỉ</li>
                <li>Quên dấu * khi truy cập giá trị con trỏ</li>
                <li>Truyền con trỏ null mà không kiểm tra</li>
                <li>Thay đổi con trỏ thay vì giá trị nó trỏ đến</li>
                <li>Không hiểu rõ khi nào dùng mỗi cách</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Lưu ý</h3>
            <div className="mt-2 text-sm text-green-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Luôn kiểm tra con trỏ null trước khi sử dụng</li>
                <li>Sử dụng const với con trỏ khi không cần thay đổi</li>
                <li>Chọn cách truyền phù hợp với mục đích</li>
                <li>Comment rõ ràng khi hàm thay đổi tham số</li>
                <li>Test kỹ với các trường hợp biên</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IX. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Viết hàm swap</h3>
      <p className="mb-4">Viết hàm <code>swap(int *a, int *b)</code> để hoán đổi giá trị của hai biến.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng con trỏ để truy cập giá trị</li>
          <li>Cần biến tạm để lưu giá trị</li>
          <li>Test với các giá trị khác nhau</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Viết hàm tìm min, max</h3>
      <p className="mb-4">Viết hàm <code>findMinMax(int arr[], int size, int *min, int *max)</code> tìm giá trị nhỏ nhất và lớn nhất trong mảng.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng con trỏ để trả về nhiều giá trị</li>
          <li>Khởi tạo min, max với phần tử đầu tiên</li>
          <li>So sánh với từng phần tử trong mảng</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Viết hàm sắp xếp mảng</h3>
      <p className="mb-4">Viết hàm <code>sortArray(int arr[], int size)</code> sắp xếp mảng theo thứ tự tăng dần.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng thuật toán bubble sort hoặc selection sort</li>
          <li>Mảng sẽ được thay đổi trực tiếp</li>
          <li>In mảng trước và sau khi sắp xếp</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Thử thách:</strong> Hãy thực hành các bài tập trên và thử nghiệm với các kiểu dữ liệu khác nhau để hiểu rõ hơn về cách hoạt động của pass by value và pass by reference trong C.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassByValueAndReference;
