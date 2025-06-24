import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const TwoDimensionalArrays = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu rõ về <b>mảng 2 chiều</b> trong C: cách khai báo, khởi tạo, truy cập, nhập xuất dữ liệu, ứng dụng thực tế, các lỗi thường gặp và bài tập thực hành. Đây là kiến thức quan trọng để xử lý dữ liệu dạng bảng, ma trận trong lập trình.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Định nghĩa và ý nghĩa</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Mảng 2 chiều</b> là tập hợp các phần tử cùng kiểu dữ liệu, được tổ chức thành dạng bảng gồm nhiều hàng và cột.</li>
        <li>Mỗi phần tử được xác định bởi 2 chỉ số: chỉ số hàng và chỉ số cột.</li>
        <li>Mảng 2 chiều thường dùng để lưu trữ dữ liệu dạng bảng, ma trận, điểm số nhiều môn, ảnh số, ...</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> Bảng điểm của nhiều học sinh (hàng: học sinh, cột: môn học), ma trận toán học, lưới trò chơi, ...
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Khai báo và khởi tạo mảng 2 chiều</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp khai báo</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`kiểu_dữ_liệu tên_mảng[số_hàng][số_cột];`}</SyntaxHighlighter>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li><b>kiểu_dữ_liệu</b>: Kiểu dữ liệu của các phần tử (int, float, char, ...)</li>
        <li><b>tên_mảng</b>: Tên mảng do bạn đặt</li>
        <li><b>số_hàng</b>: Số lượng hàng (phải là hằng số nguyên dương)</li>
        <li><b>số_cột</b>: Số lượng cột (phải là hằng số nguyên dương)</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b>
        <SyntaxHighlighter language="c">{`int a[3][4]; // Mảng 3 hàng, 4 cột (12 số nguyên)
float matrix[2][3]; // Mảng 2 hàng, 3 cột (6 số thực)
char board[5][5]; // Mảng 5x5 ký tự`}</SyntaxHighlighter>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Khởi tạo mảng 2 chiều</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int a[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

float b[2][2] = {
    {1.1, 2.2},
    {3.3, 4.4}
};`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. Nhập và xuất mảng 2 chiều từ bàn phím</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int m, n, i, j, a[10][10];
    printf("Nhập số hàng: ");
    scanf("%d", &m);
    printf("Nhập số cột: ");
    scanf("%d", &n);
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            printf("a[%d][%d] = ", i, j);
            scanf("%d", &a[i][j]);
        }
    }
    printf("\\nMa trận vừa nhập:\\n");
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            printf("%d ", a[i][j]);
        }
        printf("\\n");
    }
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
          <span className="text-blue-400">$</span> gcc input2d.c -o input2d<br/>
          <span className="text-blue-400">$</span> ./input2d<br/>
          <span className="text-white">Nhập số hàng: 2</span><br/>
          <span className="text-white">Nhập số cột: 3</span><br/>
          <span className="text-white">a[0][0] = 1</span><br/>
          <span className="text-white">a[0][1] = 2</span><br/>
          <span className="text-white">a[0][2] = 3</span><br/>
          <span className="text-white">a[1][0] = 4</span><br/>
          <span className="text-white">a[1][1] = 5</span><br/>
          <span className="text-white">a[1][2] = 6</span><br/>
          <span className="text-white">Ma trận vừa nhập:</span><br/>
          <span className="text-white">1 2 3 </span><br/>
          <span className="text-white">4 5 6 </span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. Duyệt, tính toán trên mảng 2 chiều</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int m, n, a[10][10];
    printf("Nhập số hàng: ");
    scanf("%d", &m);
    printf("Nhập số cột: ");
    scanf("%d", &n);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            printf("a[%d][%d] = ", i, j);
            scanf("%d", &a[i][j]);
        }
    }
    int sum = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            sum += a[i][j];
        }
    }
    printf("Tổng các phần tử: %d\\n", sum);
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
          <span className="text-blue-400">$</span> gcc sum2d.c -o sum2d<br/>
          <span className="text-blue-400">$</span> ./sum2d<br/>
          <span className="text-white">Nhập số hàng: 2</span><br/>
          <span className="text-white">Nhập số cột: 3</span><br/>
          <span className="text-white">a[0][0] = 1</span><br/>
          <span className="text-white">a[0][1] = 2</span><br/>
          <span className="text-white">a[0][2] = 3</span><br/>
          <span className="text-white">a[1][0] = 4</span><br/>
          <span className="text-white">a[1][1] = 5</span><br/>
          <span className="text-white">a[1][2] = 6</span><br/>
          <span className="text-white">Tổng các phần tử: 21</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">5. Tìm phần tử lớn nhất trên mảng 2 chiều</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int m, n, a[10][10];
    printf("Nhập số hàng: ");
    scanf("%d", &m);
    printf("Nhập số cột: ");
    scanf("%d", &n);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            printf("a[%d][%d] = ", i, j);
            scanf("%d", &a[i][j]);
        }
    }
    int max = a[0][0];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i][j] > max) max = a[i][j];
        }
    }
    printf("Phần tử lớn nhất: %d\\n", max);
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
          <span className="text-blue-400">$</span> gcc max2d.c -o max2d<br/>
          <span className="text-blue-400">$</span> ./max2d<br/>
          <span className="text-white">Nhập số hàng: 2</span><br/>
          <span className="text-white">Nhập số cột: 3</span><br/>
          <span className="text-white">a[0][0] = 1</span><br/>
          <span className="text-white">a[0][1] = 2</span><br/>
          <span className="text-white">a[0][2] = 3</span><br/>
          <span className="text-white">a[1][0] = 4</span><br/>
          <span className="text-white">a[1][1] = 5</span><br/>
          <span className="text-white">a[1][2] = 6</span><br/>
          <span className="text-white">Phần tử lớn nhất: 6</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Lỗi thường gặp</h2>
      <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li><b>Vượt quá chỉ số mảng:</b> Truy cập <code>a[m][n]</code> hoặc <code>a[-1][0]</code> sẽ gây lỗi hoặc kết quả không xác định.</li>
          <li><b>Khai báo mảng quá lớn:</b> Dễ gây tràn bộ nhớ stack.</li>
          <li><b>Chưa khởi tạo giá trị:</b> Nếu không gán giá trị, phần tử có thể chứa giá trị rác.</li>
          <li><b>Nhập sai kiểu dữ liệu:</b> Dùng <code>%d</code> cho <code>float</code> hoặc ngược lại.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Mẹo thực hành</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Luôn kiểm tra chỉ số mảng nằm trong [0, m-1] và [0, n-1]</li>
          <li>Dùng vòng lặp lồng nhau để thao tác với mảng 2 chiều</li>
          <li>Khởi tạo mảng với giá trị mặc định nếu cần</li>
          <li>Thực hành với nhiều dạng bài toán: nhập/xuất, tính tổng, tìm max/min, in đường chéo, ...</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Nhập ma trận m x n, in ra ma trận chuyển vị</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int m, n, a[10][10];
    printf("Nhập số hàng: ");
    scanf("%d", &m);
    printf("Nhập số cột: ");
    scanf("%d", &n);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Ma trận chuyển vị:\\n");
    for (int j = 0; j < n; j++) {
        for (int i = 0; i < m; i++) {
            printf("%d ", a[i][j]);
        }
        printf("\\n");
    }
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
          <span className="text-blue-400">$</span> gcc transpose.c -o transpose<br/>
          <span className="text-blue-400">$</span> ./transpose<br/>
          <span className="text-white">(Giả sử m=2, n=3, a = [[1,2,3],[4,5,6]])</span><br/>
          <span className="text-white">Ma trận chuyển vị:</span><br/>
          <span className="text-white">1 4 </span><br/>
          <span className="text-white">2 5 </span><br/>
          <span className="text-white">3 6 </span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Tính tổng từng hàng của ma trận</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int m, n, a[10][10];
    printf("Nhập số hàng: ");
    scanf("%d", &m);
    printf("Nhập số cột: ");
    scanf("%d", &n);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }
    for (int i = 0; i < m; i++) {
        int sum = 0;
        for (int j = 0; j < n; j++) {
            sum += a[i][j];
        }
        printf("Tổng hàng %d: %d\\n", i+1, sum);
    }
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
          <span className="text-blue-400">$</span> gcc row_sum.c -o row_sum<br/>
          <span className="text-blue-400">$</span> ./row_sum<br/>
          <span className="text-white">(Giả sử m=2, n=3, a = [[1,2,3],[4,5,6]])</span><br/>
          <span className="text-white">Tổng hàng 1: 6</span><br/>
          <span className="text-white">Tổng hàng 2: 15</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Tìm phần tử lớn nhất trên đường chéo chính của ma trận vuông</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int n, a[10][10];
    printf("Nhập kích thước ma trận vuông: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }
    int max = a[0][0];
    for (int i = 0; i < n; i++) {
        if (a[i][i] > max) max = a[i][i];
    }
    printf("Max trên đường chéo chính: %d\\n", max);
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
          <span className="text-blue-400">$</span> gcc diagmax.c -o diagmax<br/>
          <span className="text-blue-400">$</span> ./diagmax<br/>
          <span className="text-white">(Giả sử n=3, a = [[1,2,3],[4,5,6],[7,8,9]])</span><br/>
          <span className="text-white">Max trên đường chéo chính: 9</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Tổng kết & Ghi nhớ</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6">
          <li>Mảng 2 chiều là cấu trúc dữ liệu quan trọng, giúp xử lý dữ liệu dạng bảng, ma trận hiệu quả.</li>
          <li>Luôn kiểm tra chỉ số mảng, tránh truy cập ngoài phạm vi.</li>
          <li>Thực hành nhiều với các bài toán mảng 2 chiều để thành thạo kỹ năng.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <b>Ghi nhớ:</b> Hãy luyện tập nhiều với mảng 2 chiều để làm chủ kỹ năng xử lý dữ liệu bảng, ma trận trong C!
      </div>
    </div>
  );
};

export default TwoDimensionalArrays;
