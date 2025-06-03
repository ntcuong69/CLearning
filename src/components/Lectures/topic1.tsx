import React from "react";

const BaiGiang1 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Bài 1: Giới thiệu ngôn ngữ lập trình C</h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Tổng quan về ngôn ngữ C</h2>
      <p>
        Ngôn ngữ lập trình C được phát triển bởi Dennis Ritchie vào những năm 1970 tại phòng thí nghiệm Bell Labs.
        Đây là một ngôn ngữ bậc trung, vừa có khả năng truy cập thấp tới phần cứng, vừa hỗ trợ các cấu trúc lập trình cấp cao.
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 my-4">
        <strong>Lưu ý:</strong> C là nền tảng của nhiều ngôn ngữ khác như C++, C#, Java, Python.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Đặc điểm nổi bật</h2>
      <ul className="list-disc pl-6">
        <li>Hiệu suất cao, gần với phần cứng.</li>
        <li>Ngôn ngữ thủ tục, điều khiển bằng hàm.</li>
        <li>Hệ thống thư viện chuẩn phong phú.</li>
        <li>Được sử dụng rộng rãi trong lập trình hệ thống, nhúng và nền tảng.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Ứng dụng thực tế</h2>
      <ul className="list-disc pl-6">
        <li>Hệ điều hành (Unix, Linux,...)</li>
        <li>Phần mềm điều khiển thiết bị phần cứng</li>
        <li>Trình biên dịch và trình thông dịch</li>
        <li>Hệ thống nhúng (robot, vi điều khiển,...)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Cài đặt môi trường lập trình C</h2>
      <ol className="list-decimal pl-6">
        <li><strong>Windows:</strong> Tải và cài đặt Code::Blocks, hoặc MinGW + VSCode</li>
        <li><strong>Linux:</strong> Sử dụng gcc đã được cài sẵn hoặc cài bằng apt/yum</li>
        <li><strong>Online:</strong> Dùng các trình biên dịch online như replit.com, ideone.com</li>
      </ol>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Chương trình C đầu tiên</h2>
      <p className="mb-2">
        Dưới đây là ví dụ đơn giản về chương trình C in ra dòng chữ "Hello, World!":
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto">
        <code>
          {`#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">Giải thích:</h3>
      <ul className="list-disc pl-6">
        <li><code>#include &lt;stdio.h&gt;</code>: Thư viện cho các hàm nhập xuất như printf.</li>
        <li><code>int main()</code>: Hàm chính bắt đầu chương trình.</li>
        <li><code>printf()</code>: In chuỗi ra màn hình.</li>
        <li><code>return 0;</code>: Kết thúc chương trình với mã thành công.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Tổng kết</h2>
      <p>Trong bài này, bạn đã nắm được:</p>
      <ul className="list-disc pl-6">
        <li>Lịch sử và đặc điểm ngôn ngữ C</li>
        <li>Ứng dụng của C trong thực tế</li>
        <li>Cách thiết lập môi trường lập trình</li>
        <li>Viết chương trình C đầu tiên</li>
      </ul>

      <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 my-4">
        Hãy thử chạy chương trình <strong>Hello World</strong> trên máy của bạn trước khi sang bài tiếp theo!
      </div>
    </div>
  );
};

export default BaiGiang1;
