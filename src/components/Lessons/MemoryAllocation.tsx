import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const MemoryAllocation = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này giúp bạn hiểu về <b>cấp phát bộ nhớ (Memory Allocation)</b> trong C, một chủ đề quan trọng để quản lý dữ liệu động, tối ưu hiệu suất và tránh lỗi chương trình. Bạn sẽ học về sự khác biệt giữa <b>stack</b> và <b>heap</b>, cách sử dụng <b>malloc</b>, <b>calloc</b>, <b>realloc</b>, <b>free</b>, cùng các ví dụ thực tế, lỗi thường gặp và bài tập thực hành.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tổng quan về bộ nhớ trong C</h2>
      <p className="mb-4">
        Khi một chương trình C chạy, bộ nhớ được chia thành nhiều vùng khác nhau:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Code/Text Segment:</b> Chứa mã lệnh chương trình.</li>
        <li><b>Data Segment:</b> Chứa biến toàn cục, hằng số.</li>
        <li><b>Stack:</b> Dùng cho biến cục bộ, tham số hàm, quản lý tự động (vào/thoát hàm).</li>
        <li><b>Heap:</b> Dùng cho dữ liệu động, quản lý thủ công bởi lập trình viên.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Stack</b> phù hợp cho biến tạm thời, kích thước nhỏ, thời gian sống ngắn.<br/>
        <b>Heap</b> phù hợp cho dữ liệu lớn, cấu trúc động (mảng, danh sách liên kết), hoặc cần tồn tại lâu dài.
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Tại sao cần cấp phát động?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Khi không biết trước kích thước dữ liệu (ví dụ: nhập từ file, người dùng nhập n tuỳ ý).</li>
        <li>Khi cần tạo/cấp phát các cấu trúc dữ liệu động (mảng động, danh sách liên kết, cây...)</li>
        <li>Giúp tiết kiệm bộ nhớ, chỉ cấp phát khi thực sự cần thiết.</li>
      </ul>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Tại sao phải giải phóng bộ nhớ?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Bộ nhớ trên heap KHÔNG tự động thu hồi. Nếu không giải phóng sẽ gây <b>memory leak</b> (rò rỉ bộ nhớ).</li>
        <li>Chương trình dùng lâu, cấp phát nhiều lần mà không free sẽ hết bộ nhớ, gây crash hoặc chậm hệ thống.</li>
        <li>Giải phóng đúng lúc giúp chương trình ổn định, tiết kiệm tài nguyên.</li>
      </ul>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <b>Cảnh báo:</b> Luôn <b>free</b> vùng nhớ động sau khi dùng xong! Nếu không, chương trình sẽ bị rò rỉ bộ nhớ.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Thư viện cần thiết cho quản lý bộ nhớ</h2>
      <p className="mb-4">
        Các hàm quản lý bộ nhớ động như <b>malloc</b>, <b>calloc</b>, <b>realloc</b>, <b>free</b> đều được khai báo trong thư viện <b>stdlib.h</b>. Bạn cần <b>#include &lt;stdlib.h&gt;</b> ở đầu file để sử dụng các hàm này.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdlib.h>`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Nếu quên include <b>stdlib.h</b>, chương trình có thể báo lỗi hoặc hành vi không xác định khi dùng các hàm cấp phát bộ nhớ.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Sự khác biệt giữa Stack và Heap</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Đặc điểm</th>
              <th className="border px-4 py-2">Stack</th>
              <th className="border px-4 py-2">Heap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Cấp phát</td>
              <td className="border px-4 py-2">Tự động</td>
              <td className="border px-4 py-2">Thủ công (malloc/calloc...)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Thu hồi</td>
              <td className="border px-4 py-2">Tự động khi thoát hàm</td>
              <td className="border px-4 py-2">Lập trình viên phải gọi <b>free</b></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tốc độ</td>
              <td className="border px-4 py-2">Rất nhanh</td>
              <td className="border px-4 py-2">Chậm hơn</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Kích thước</td>
              <td className="border px-4 py-2">Giới hạn (thường nhỏ)</td>
              <td className="border px-4 py-2">Lớn, linh hoạt</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Lỗi thường gặp</td>
              <td className="border px-4 py-2">Stack overflow</td>
              <td className="border px-4 py-2">Memory leak, dangling pointer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Cấp phát động với malloc, calloc, realloc, free</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. malloc</h3>
      <p className="mb-4">Cấp phát một vùng nhớ liên tục, trả về con trỏ void* (cần ép kiểu). Giá trị vùng nhớ chưa được khởi tạo.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int *arr = (int*)malloc(5 * sizeof(int));
if (arr == NULL) {
    printf("Lỗi cấp phát bộ nhớ!\\n");
}`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Luôn kiểm tra NULL sau khi cấp phát!
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. calloc</h3>
      <p className="mb-4">Cấp phát vùng nhớ cho nhiều phần tử, tự động khởi tạo về 0.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`float *scores = (float*)calloc(10, sizeof(float));
if (scores == NULL) {
    printf("Lỗi cấp phát bộ nhớ!\\n");
}`}</SyntaxHighlighter>
      </pre>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>So sánh:</b> <b>malloc</b> không khởi tạo giá trị, <b>calloc</b> khởi tạo về 0.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">3. realloc</h3>
      <p className="mb-4">Thay đổi kích thước vùng nhớ đã cấp phát (mở rộng/thu nhỏ mảng động).</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`int *arr = (int*)malloc(5 * sizeof(int));
// ... sử dụng arr ...
int *newArr = (int*)realloc(arr, 10 * sizeof(int));
if (newArr == NULL) {
    printf("Lỗi cấp phát lại bộ nhớ!\\n");
} else {
    arr = newArr;
}`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Sau khi realloc, luôn gán lại con trỏ gốc để tránh mất vùng nhớ cũ!
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">4. free</h3>
      <p className="mb-4">Giải phóng vùng nhớ đã cấp phát trên heap, tránh rò rỉ bộ nhớ.</p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`free(arr);
arr = NULL; // Tránh con trỏ treo (dangling pointer)`}</SyntaxHighlighter>
      </pre>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <b>Lưu ý:</b> Sau khi free, nên gán con trỏ về NULL để tránh truy cập vùng nhớ đã giải phóng.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Ví dụ minh họa thực tế</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cấp phát mảng động và nhập xuất dữ liệu</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("Nhập số phần tử: ");
    scanf("%d", &n);
    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Lỗi cấp phát bộ nhớ!\\n");
        return 1;
    }
    for (int i = 0; i < n; i++) {
        printf("arr[%d] = ", i);
        scanf("%d", &arr[i]);
    }
    printf("Mảng vừa nhập: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    free(arr);
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
          <span className="text-blue-400">$</span> gcc malloc_input.c -o malloc_input<br/>
          <span className="text-blue-400">$</span> ./malloc_input<br/>
          <span className="text-white">Nhập số phần tử: 4</span><br/>
          <span className="text-white">arr[0] = 10</span><br/>
          <span className="text-white">arr[1] = 20</span><br/>
          <span className="text-white">arr[2] = 30</span><br/>
          <span className="text-white">arr[3] = 40</span><br/>
          <span className="text-white">Mảng vừa nhập: 10 20 30 40</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. So sánh malloc/calloc qua ví dụ</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *a = (int*)malloc(3 * sizeof(int));
    int *b = (int*)calloc(3, sizeof(int));
    printf("Sau malloc: %d %d %d\\n", a[0], a[1], a[2]);
    printf("Sau calloc: %d %d %d\\n", b[0], b[1], b[2]);
    free(a); free(b);
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
          <span className="text-blue-400">$</span> gcc malloc_vs_calloc.c -o malloc_vs_calloc<br/>
          <span className="text-blue-400">$</span> ./malloc_vs_calloc<br/>
          <span className="text-white">Sau malloc: 32767 0 0</span><br/>
          <span className="text-white">Sau calloc: 0 0 0</span><br/>
          <span className="text-gray-400">// Giá trị malloc có thể là rác, tuỳ hệ thống</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lỗi thường gặp & cảnh báo</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <ul className="list-disc pl-6 text-red-700">
          <li><b>Quên free:</b> Dẫn đến rò rỉ bộ nhớ (memory leak).</li>
          <li><b>Truy cập vùng nhớ đã free:</b> Gây lỗi nghiêm trọng (dangling pointer).</li>
          <li><b>Không kiểm tra NULL:</b> Dễ gây crash khi cấp phát thất bại.</li>
          <li><b>Dùng sai kích thước:</b> Cấp phát thiếu hoặc thừa bộ nhớ.</li>
          <li><b>Gán nhầm con trỏ sau realloc:</b> Mất vùng nhớ cũ, gây memory leak.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Best Practices</h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <ul className="list-disc pl-6 text-green-700">
          <li>Luôn kiểm tra NULL sau khi cấp phát động.</li>
          <li>Giải phóng bộ nhớ đúng lúc, tránh memory leak.</li>
          <li>Gán con trỏ về NULL sau khi free.</li>
          <li>Chỉ cấp phát khi thực sự cần thiết.</li>
          <li>Test kỹ với các trường hợp biên (n = 0, n rất lớn...)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VII. Bài tập thực hành</h2>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Tổng mảng động</h3>
      <p className="mb-4">Viết chương trình nhập n số nguyên vào mảng động, tính tổng các phần tử.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng malloc để cấp phát mảng</li>
          <li>Nhập giá trị, tính tổng</li>
          <li>Đừng quên free!</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Quản lý danh sách điểm động</h3>
      <p className="mb-4">Viết chương trình nhập n điểm (float), tìm điểm cao nhất/thấp nhất, giải phóng bộ nhớ đúng cách.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Dùng calloc để khởi tạo mảng điểm</li>
          <li>Duyệt mảng tìm max/min</li>
          <li>Giải phóng bộ nhớ sau khi dùng</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 3: Thay đổi kích thước mảng động</h3>
      <p className="mb-4">Viết chương trình nhập n số, sau đó cho phép người dùng tăng/giảm kích thước mảng bằng realloc.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Nhập n, cấp phát mảng bằng malloc</li>
          <li>Cho phép nhập lại n mới, dùng realloc để thay đổi kích thước</li>
          <li>Kiểm tra NULL sau realloc</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <b>Thử thách:</b> Hãy thực hành các bài tập trên và thử nghiệm với các kích thước mảng khác nhau. Đừng quên kiểm tra memory leak bằng các công cụ như <code>valgrind</code> nếu có!
      </div>
    </div>
  );
};

export default MemoryAllocation;
