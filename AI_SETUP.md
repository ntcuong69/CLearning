# Cấu hình AI Service cho tính năng giải thích lỗi

## Tổng quan
Tính năng AI giải thích lỗi đã được tích hợp vào component `ExerciseHelp`. AI sẽ phân tích code và lỗi của người dùng để đưa ra gợi ý sửa lỗi.

## Cấu hình AI Service

### 1. OpenAI (Khuyến nghị)
1. Đăng ký tài khoản tại [OpenAI](https://platform.openai.com/)
2. Tạo API key
3. Thêm vào file `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 2. Claude (Anthropic)
1. Đăng ký tài khoản tại [Anthropic](https://console.anthropic.com/)
2. Tạo API key
3. Cập nhật file `src/app/api/ai/explain-error/route.ts` để sử dụng Claude API

### 3. Google Gemini
1. Đăng ký Google AI Studio
2. Tạo API key
3. Cập nhật file `src/app/api/ai/explain-error/route.ts` để sử dụng Gemini API

## Cách hoạt động

### API Endpoint
- **URL**: `/api/ai/explain-error`
- **Method**: POST
- **Body**:
```json
{
  "code": "code của người dùng",
  "errorMessage": "thông báo lỗi",
  "testcaseInput": "input testcase (optional)",
  "expectedOutput": "output mong đợi (optional)",
  "actualOutput": "output thực tế (optional)"
}
```

### Response
```json
{
  "success": true,
  "explanation": {
    "errorAnalysis": "Phân tích lỗi",
    "suggestions": "Gợi ý sửa lỗi", 
    "explanation": "Giải thích chi tiết"
  }
}
```

## Tính năng

### 1. Phân tích lỗi tự động
- AI sẽ phân tích code và lỗi để tìm nguyên nhân
- Đưa ra gợi ý cụ thể để sửa lỗi
- Giải thích dễ hiểu cho người mới học

### 2. Giao diện thân thiện
- Hiển thị chi tiết lỗi từng testcase
- Nút "Nhận gợi ý từ AI" để kích hoạt phân tích
- Loading indicator khi AI đang xử lý
- Hiển thị kết quả phân tích với format đẹp

### 3. Fallback mechanism
- Nếu không có AI service, sẽ hiển thị gợi ý mẫu
- Xử lý lỗi kết nối gracefully
- Thông báo lỗi rõ ràng cho người dùng

## Tùy chỉnh

### Thay đổi prompt AI
Chỉnh sửa biến `prompt` trong file `src/app/api/ai/explain-error/route.ts`:

```typescript
const prompt = `Bạn là một giáo viên lập trình C giỏi. Hãy phân tích và giải thích lỗi sau đây cho học sinh:

Code của học sinh:
\`\`\`c
${code}
\`\`\`

Lỗi gặp phải: ${errorMessage}

// Thêm các yêu cầu khác...
`;
```

### Thêm AI service mới
1. Tạo function mới trong `callAIService()`
2. Thêm environment variable cho API key
3. Cập nhật logic để sử dụng service mới

## Troubleshooting

### Lỗi "Không thể kết nối với AI service"
- Kiểm tra API key có đúng không
- Kiểm tra kết nối internet
- Xem log trong console để debug

### AI không trả về kết quả
- Kiểm tra format prompt có đúng không
- Kiểm tra response format từ AI service
- Thử với code đơn giản hơn để test

### Performance issues
- Cân nhắc thêm caching cho AI responses
- Giới hạn số lần gọi AI trong một khoảng thời gian
- Sử dụng streaming response cho AI service hỗ trợ

## Bảo mật

- Không commit API keys vào git
- Sử dụng environment variables
- Validate input trước khi gửi cho AI
- Rate limiting để tránh abuse 