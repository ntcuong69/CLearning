import React from "react";

const OverviewOfCProgramming = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này sẽ giúp bạn hiểu rõ về nguồn gốc, đặc điểm, vai trò và ứng dụng thực tế của ngôn ngữ lập trình C. Đây là nền tảng quan trọng cho mọi lập trình viên, đặc biệt là người mới bắt đầu.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Lịch sử phát triển</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>1972</b>: Dennis Ritchie phát triển C tại Bell Labs để viết hệ điều hành UNIX. Trước đó, các ngôn ngữ như B, BCPL còn nhiều hạn chế.</li>
        <li><b>1980s</b>: C trở thành ngôn ngữ phổ biến trong giảng dạy và phát triển phần mềm hệ thống. Nhiều trường đại học chọn C làm ngôn ngữ lập trình đầu tiên cho sinh viên.</li>
        <li><b>Hiện nay</b>: C vẫn là nền tảng của nhiều hệ điều hành, trình biên dịch, phần mềm nhúng. Nhiều ngôn ngữ hiện đại kế thừa cú pháp và tư duy của C.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Giải thích:</b> C ra đời để giải quyết các vấn đề thực tế về hiệu suất và khả năng kiểm soát phần cứng, điều mà các ngôn ngữ trước đó chưa làm tốt.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Đặc điểm nổi bật của C</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Ngôn ngữ thủ tục, cấu trúc rõ ràng:</b> Mỗi chương trình C đều có cấu trúc nhất định, giúp người mới dễ tiếp cận.</li>
        <li><b>Hiệu suất cao, gần với phần cứng:</b> C cho phép truy cập bộ nhớ, thao tác bit, tối ưu tốc độ thực thi.</li>
        <li><b>Quản lý bộ nhớ trực tiếp:</b> Bạn có thể cấp phát, giải phóng bộ nhớ bằng con trỏ, điều này rất quan trọng khi làm việc với hệ thống lớn.</li>
        <li><b>Thư viện chuẩn mạnh mẽ:</b> C cung cấp nhiều hàm sẵn có cho nhập/xuất, xử lý chuỗi, toán học, tập tin...</li>
        <li><b>Tính di động cao (portable):</b> Chương trình C có thể chạy trên nhiều hệ điều hành khác nhau chỉ với thay đổi nhỏ.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ thực tế:</b> Nhiều phần mềm nhúng (máy giặt, tủ lạnh, ô tô thông minh) đều dùng C vì nó kiểm soát tốt phần cứng và tiết kiệm tài nguyên.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Vai trò của C trong lập trình hiện đại</h2>
      <p className="mb-4">
        C được gọi là "ngôn ngữ mẹ" vì nhiều ngôn ngữ hiện đại như C++, Java, C#, Python đều kế thừa cú pháp và nguyên lý của C. Học C giúp bạn hiểu sâu về cách phần mềm hoạt động gần với phần cứng, quản lý bộ nhớ và tối ưu chương trình.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><b>C++</b> mở rộng từ C, thêm tính hướng đối tượng.</li>
        <li><b>Java, C#</b> kế thừa cú pháp, loại bỏ thao tác bộ nhớ trực tiếp để an toàn hơn.</li>
        <li><b>Python</b> đơn giản hóa cú pháp, nhưng nhiều khái niệm cơ bản vẫn dựa trên C.</li>
      </ul>
      <blockquote className="bg-yellow-50 border-l-4 border-yellow-300 p-4 my-4 text-yellow-900">
        <b>Mẹo:</b> Nếu bạn nắm vững C, việc học các ngôn ngữ khác sẽ dễ dàng hơn rất nhiều! Bạn sẽ hiểu rõ "bản chất" của lập trình thay vì chỉ học cú pháp.
      </blockquote>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Ứng dụng thực tế của C</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Hệ điều hành:</b> UNIX, Linux kernel, Windows driver đều viết bằng C.</li>
        <li><b>Lập trình nhúng:</b> Vi điều khiển, robot, thiết bị IoT.</li>
        <li><b>Trình biên dịch, cơ sở dữ liệu:</b> Nhiều trình biên dịch, MySQL, SQLite viết bằng C.</li>
        <li><b>Game, đồ họa, phần mềm hiệu suất cao:</b> Engine game, phần mềm xử lý tín hiệu, thuật toán tối ưu.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ:</b> Khi bạn dùng điện thoại, rất nhiều phần mềm hệ thống bên trong được viết bằng C để đảm bảo tốc độ và tiết kiệm pin.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Vì sao nên học C đầu tiên?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Hiểu rõ cách chương trình hoạt động:</b> C giúp bạn thấy rõ cách dữ liệu lưu trữ, xử lý, quản lý bộ nhớ.</li>
        <li><b>Trang bị tư duy giải quyết vấn đề logic, cấu trúc:</b> Lập trình C rèn luyện tư duy phân tích, chia nhỏ vấn đề.</li>
        <li><b>Dễ tiếp cận các ngôn ngữ khác:</b> Sau khi học C, bạn sẽ thấy Java, Python, C++ dễ hơn nhiều.</li>
        <li><b>Là môn học nền tảng tại nhiều trường đại học:</b> Hầu hết các trường đều chọn C để dạy lập trình căn bản.</li>
      </ul>
      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-4">
        <b>Lưu ý cho người mới:</b> Ban đầu học C có thể hơi khó vì phải tự quản lý bộ nhớ, cú pháp chặt chẽ. Nhưng chính điều này giúp bạn trưởng thành hơn trong tư duy lập trình.
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
        <b>Kết luận:</b> C là nơi khởi đầu lý tưởng để xây dựng nền móng vững chắc cho sự nghiệp lập trình của bạn. Hãy kiên trì thực hành và đừng ngại hỏi khi gặp khó khăn!
      </div>
    </div>
  );
};

export default OverviewOfCProgramming;

