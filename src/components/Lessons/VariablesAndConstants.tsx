import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const VariablesAndConstants = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu cách khai báo và sử dụng biến, hằng số trong C, cũng như các quy tắc đặt tên và phạm vi hoạt động của chúng.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và khái niệm cơ bản</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Biến là gì?</h3>
      <p className="mb-4">
        <strong>Biến (Variable)</strong> là một vùng nhớ được đặt tên để lưu trữ dữ liệu. Giá trị của biến có thể thay đổi trong quá trình thực thi chương trình. Biến giống như một "hộp" có tên, bạn có thể đặt dữ liệu vào và lấy ra khi cần.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> <code>int age = 25;</code> - Tạo một "hộp" tên "age" kiểu số nguyên, chứa giá trị 25.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Hằng số là gì?</h3>
      <p className="mb-4">
        <strong>Hằng số (Constant)</strong> là một giá trị không thay đổi trong suốt quá trình thực thi chương trình. Hằng số được sử dụng để lưu trữ các giá trị cố định như số PI, các giới hạn, tên trường học, v.v.
      </p>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4 text-green-900">
        <b>Ví dụ:</b> <code>#define PI 3.14159</code> - Định nghĩa hằng số PI với giá trị không đổi.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Tại sao cần biến và hằng số?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Lưu trữ dữ liệu:</strong> Biến giúp lưu trữ thông tin tạm thời trong chương trình</li>
        <li><strong>Tái sử dụng:</strong> Có thể sử dụng lại giá trị đã lưu trữ nhiều lần</li>
        <li><strong>Thay đổi giá trị:</strong> Biến cho phép cập nhật giá trị khi cần thiết</li>
        <li><strong>Đọc hiểu code:</strong> Tên biến có ý nghĩa giúp code dễ hiểu hơn</li>
        <li><strong>Bảo vệ giá trị:</strong> Hằng số đảm bảo giá trị không bị thay đổi do lỗi</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Cách khai báo biến</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp khai báo</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Cú pháp: kiểu_dữ_liệu tên_biến;
int age;                    // Khai báo biến age kiểu int
float height;              // Khai báo biến height kiểu float
char grade;                // Khai báo biến grade kiểu char

// Khai báo và khởi tạo cùng lúc
int age = 25;              // Khai báo và gán giá trị 25
float height = 1.75;       // Khai báo và gán giá trị 1.75
char grade = 'A';          // Khai báo và gán ký tự 'A'

// Khai báo nhiều biến cùng kiểu
int x, y, z;               // Khai báo 3 biến int
int a = 1, b = 2, c = 3;   // Khai báo và khởi tạo 3 biến`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Các loại khai báo biến</h3>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <h4 className="font-semibold mb-2">a) Khai báo không khởi tạo:</h4>
        <p><code>int age;</code> - Biến sẽ chứa giá trị rác (garbage value)</p>
        
        <h4 className="font-semibold mb-2 mt-4">b) Khai báo và khởi tạo:</h4>
        <p><code>int age = 25;</code> - Biến được gán giá trị ngay khi khai báo</p>
        
        <h4 className="font-semibold mb-2 mt-4">c) Khai báo nhiều biến:</h4>
        <p><code>int a, b, c;</code> - Khai báo nhiều biến cùng kiểu</p>
        
        <h4 className="font-semibold mb-2 mt-4">d) Khai báo với từ khóa:</h4>
        <p><code>static int count;</code> - Biến static, <code>const int max = 100;</code> - Biến hằng</p>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Quy tắc đặt tên biến</h3>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold mb-2">Quy tắc bắt buộc:</h4>
        <ul className="list-disc pl-6">
          <li>Bắt đầu bằng chữ cái hoặc dấu gạch dưới (_)</li>
          <li>Chỉ chứa chữ cái, số và dấu gạch dưới</li>
          <li>Không được trùng với từ khóa của C</li>
          <li>Phân biệt chữ hoa và chữ thường</li>
          <li>Độ dài tên biến tối đa 31 ký tự (theo chuẩn C89)</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <h4 className="font-semibold mb-2">Quy ước đặt tên (khuyến nghị):</h4>
        <ul className="list-disc pl-6">
          <li>Dùng tên có ý nghĩa, dễ hiểu</li>
          <li>Dùng camelCase: <code>studentName</code>, <code>totalScore</code></li>
          <li>Tránh tên quá ngắn: <code>a</code>, <code>x</code> (trừ khi là biến tạm)</li>
          <li>Tránh tên quá dài và phức tạp</li>
          <li>Dùng tiếng Anh cho tên biến</li>
          <li>Tránh dùng số ở đầu tên biến</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. Từ khóa trong C</h3>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <h4 className="font-semibold mb-2">Các từ khóa không được dùng làm tên biến:</h4>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div>auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while</div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ví dụ minh họa</h2>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    // Khai báo các biến
    int studentAge = 20;
    float studentHeight = 1.65;
    char studentGrade = 'B';
    double studentGPA = 3.75;
    
    // In thông tin sinh viên
    printf("Student Information:\\n");
    printf("Age: %d\\n", studentAge);
    printf("Height: %.2f meters\\n", studentHeight);
    printf("Grade: %c\\n", studentGrade);
    printf("GPA: %.2f\\n", studentGPA);
    
    // Thay đổi giá trị biến
    studentAge = 21;
    studentGPA = 3.85;
    
    printf("\\nAfter update:\\n");
    printf("Age: %d\\n", studentAge);
    printf("GPA: %.2f\\n", studentGPA);
    
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
          <span className="text-blue-400">$</span> gcc variables.c -o variables<br/>
          <span className="text-blue-400">$</span> ./variables<br/>
          <span className="text-white">Student Information:</span><br/>
          <span className="text-white">Age: 20</span><br/>
          <span className="text-white">Height: 1.65 meters</span><br/>
          <span className="text-white">Grade: B</span><br/>
          <span className="text-white">GPA: 3.75</span><br/>
          <br/>
          <span className="text-white">After update:</span><br/>
          <span className="text-white">Age: 21</span><br/>
          <span className="text-white">GPA: 3.85</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Hằng số (Constants)</h2>
      <p className="mb-4">
        Hằng số là giá trị không thay đổi trong suốt quá trình thực thi chương trình. Có 2 cách định nghĩa hằng số trong C:
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Dùng #define (Preprocessor Directive)</h3>
      <p className="mb-4">
        <code>#define</code> là chỉ thị tiền xử lý (preprocessor directive) được xử lý trước khi biên dịch. Nó thay thế tất cả các lần xuất hiện của tên hằng số bằng giá trị tương ứng.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

#define PI 3.14159
#define MAX_STUDENTS 100
#define SCHOOL_NAME "ABC University"
#define TRUE 1
#define FALSE 0

int main() {
    float radius = 5.0;
    float area = PI * radius * radius;
    
    printf("Area of circle: %.2f\\n", area);
    printf("Max students: %d\\n", MAX_STUDENTS);
    printf("School: %s\\n", SCHOOL_NAME);
    
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
          <span className="text-blue-400">$</span> gcc constants_define.c -o constants_define<br/>
          <span className="text-blue-400">$</span> ./constants_define<br/>
          <span className="text-white">Area of circle: 78.54</span><br/>
          <span className="text-white">Max students: 100</span><br/>
          <span className="text-white">School: ABC University</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Dùng const (Constant Qualifier)</h3>
      <p className="mb-4">
        <code>const</code> là từ khóa chỉ định rằng biến không thể thay đổi giá trị sau khi khởi tạo. Nó được xử lý trong quá trình biên dịch và có kiểu dữ liệu cụ thể.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    const float PI = 3.14159;
    const int MAX_ATTEMPTS = 3;
    const char PASS_GRADE = 'C';
    const double TAX_RATE = 0.1;
    
    // PI = 3.14;  // Lỗi! Không thể thay đổi giá trị hằng số
    
    printf("PI value: %.5f\\n", PI);
    printf("Max attempts: %d\\n", MAX_ATTEMPTS);
    printf("Pass grade: %c\\n", PASS_GRADE);
    printf("Tax rate: %.1f%%\\n", TAX_RATE * 100);
    
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
          <span className="text-blue-400">$</span> gcc constants_const.c -o constants_const<br/>
          <span className="text-blue-400">$</span> ./constants_const<br/>
          <span className="text-white">PI value: 3.14159</span><br/>
          <span className="text-white">Max attempts: 3</span><br/>
          <span className="text-white">Pass grade: C</span><br/>
          <span className="text-white">Tax rate: 10.0%</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. So sánh #define và const</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Tiêu chí</th>
              <th className="border border-gray-300 px-4 py-2">#define</th>
              <th className="border border-gray-300 px-4 py-2">const</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Thời điểm xử lý</td>
              <td className="border border-gray-300 px-4 py-2">Tiền xử lý (Preprocessor)</td>
              <td className="border border-gray-300 px-4 py-2">Biên dịch (Compiler)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Kiểu dữ liệu</td>
              <td className="border border-gray-300 px-4 py-2">Không có kiểu cụ thể</td>
              <td className="border border-gray-300 px-4 py-2">Có kiểu dữ liệu cụ thể</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Bộ nhớ</td>
              <td className="border border-gray-300 px-4 py-2">Không chiếm bộ nhớ</td>
              <td className="border border-gray-300 px-4 py-2">Chiếm bộ nhớ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Phạm vi</td>
              <td className="border border-gray-300 px-4 py-2">Toàn cục</td>
              <td className="border border-gray-300 px-4 py-2">Theo phạm vi khai báo</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Debug</td>
              <td className="border border-gray-300 px-4 py-2">Khó debug</td>
              <td className="border border-gray-300 px-4 py-2">Dễ debug</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Phạm vi biến (Variable Scope)</h2>
      <p className="mb-4">
        Phạm vi của biến xác định nơi biến có thể được sử dụng trong chương trình. Có 3 loại phạm vi chính:
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Biến cục bộ (Local Variables)</h3>
      <p className="mb-4">
        Biến cục bộ được khai báo bên trong một hàm hoặc khối lệnh. Chúng chỉ có thể được truy cập trong phạm vi đó.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int localVar = 10;  // Biến cục bộ của hàm main
    
    {
        int blockVar = 20;  // Biến cục bộ của khối lệnh
        printf("Block variable: %d\\n", blockVar);
        printf("Local variable: %d\\n", localVar);
    }
    
    // printf("Block variable: %d\\n", blockVar);  // Lỗi! blockVar không tồn tại ở đây
    printf("Local variable: %d\\n", localVar);
    
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
          <span className="text-blue-400">$</span> gcc local_scope.c -o local_scope<br/>
          <span className="text-blue-400">$</span> ./local_scope<br/>
          <span className="text-white">Block variable: 20</span><br/>
          <span className="text-white">Local variable: 10</span><br/>
          <span className="text-white">Local variable: 10</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Biến toàn cục (Global Variables)</h3>
      <p className="mb-4">
        Biến toàn cục được khai báo bên ngoài tất cả các hàm. Chúng có thể được truy cập từ bất kỳ đâu trong chương trình.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int globalVar = 100;  // Biến toàn cục

void function1() {
    printf("Global variable in function1: %d\\n", globalVar);
}

void function2() {
    printf("Global variable in function2: %d\\n", globalVar);
}

int main() {
    printf("Global variable in main: %d\\n", globalVar);
    function1();
    function2();
    
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
          <span className="text-blue-400">$</span> gcc global_scope.c -o global_scope<br/>
          <span className="text-blue-400">$</span> ./global_scope<br/>
          <span className="text-white">Global variable in main: 100</span><br/>
          <span className="text-white">Global variable in function1: 100</span><br/>
          <span className="text-white">Global variable in function2: 100</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Biến tham số (Parameter Variables)</h3>
      <p className="mb-4">
        Biến tham số được khai báo trong danh sách tham số của hàm. Chúng nhận giá trị từ các đối số được truyền vào hàm.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

void printInfo(int age, float height, char grade) {
    // age, height, grade là các biến tham số
    printf("Age: %d\\n", age);
    printf("Height: %.2f\\n", height);
    printf("Grade: %c\\n", grade);
}

int main() {
    int studentAge = 20;
    float studentHeight = 1.75;
    char studentGrade = 'A';
    
    printInfo(studentAge, studentHeight, studentGrade);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Thời gian sống của biến (Variable Lifetime)</h2>
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold mb-2">1. Automatic Variables (Tự động):</h4>
        <p>Được tạo khi vào phạm vi và hủy khi ra khỏi phạm vi. Mặc định cho biến cục bộ.</p>
        
        <h4 className="font-semibold mb-2 mt-4">2. Static Variables (Tĩnh):</h4>
        <p>Được tạo một lần và tồn tại trong suốt thời gian chạy chương trình.</p>
        
        <h4 className="font-semibold mb-2 mt-4">3. Global Variables (Toàn cục):</h4>
        <p>Tồn tại trong suốt thời gian chạy chương trình.</p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Chưa khởi tạo biến:</b> Sử dụng biến chưa được gán giá trị</li>
          <li><b>Trùng tên biến:</b> Khai báo 2 biến cùng tên trong cùng phạm vi</li>
          <li><b>Quên dấu chấm phẩy:</b> Thiếu <code>;</code> sau khai báo</li>
          <li><b>Đặt tên sai quy tắc:</b> Bắt đầu bằng số hoặc chứa ký tự đặc biệt</li>
          <li><b>Phạm vi biến:</b> Sử dụng biến ngoài phạm vi của nó</li>
          <li><b>Gán giá trị cho hằng số:</b> Cố gắng thay đổi giá trị của biến const</li>
          <li><b>Quên kiểu dữ liệu:</b> Khai báo biến mà không chỉ định kiểu</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VIII. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn khởi tạo biến ngay khi khai báo</li>
          <li>Dùng tên biến có ý nghĩa, dễ hiểu</li>
          <li>Ưu tiên biến cục bộ thay vì biến toàn cục</li>
          <li>Dùng hằng số cho các giá trị không thay đổi</li>
          <li>Kiểm tra phạm vi biến trước khi sử dụng</li>
          <li>Sử dụng <code>const</code> thay vì <code>#define</code> khi có thể</li>
          <li>Tránh dùng biến toàn cục trừ khi thực sự cần thiết</li>
          <li>Đặt tên hằng số bằng chữ hoa để dễ phân biệt</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IX. Bài tập thực hành</h2>
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold mb-2">Bài tập 1:</h4>
        <p>Viết chương trình tính diện tích và chu vi hình tròn với bán kính được nhập từ bàn phím.</p>
        
        <h4 className="font-semibold mb-2 mt-4">Bài tập 2:</h4>
        <p>Viết chương trình chuyển đổi nhiệt độ từ Celsius sang Fahrenheit.</p>
        
        <h4 className="font-semibold mb-2 mt-4">Bài tập 3:</h4>
        <p>Viết chương trình tính điểm trung bình của 3 môn học.</p>
        
        <h4 className="font-semibold mb-2 mt-4">Bài tập 4:</h4>
        <p>Viết chương trình tính lãi suất ngân hàng với các hằng số lãi suất khác nhau.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Biến và hằng số là nền tảng của lập trình. Hãy thực hành nhiều để làm quen với cách khai báo, sử dụng và quản lý chúng một cách hiệu quả!
      </div>
    </div>
  );
};

export default VariablesAndConstants;
