import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { code, errorMessage, testcaseInput, expectedOutput, actualOutput } = await req.json();

    if (!code || !errorMessage) {
      return NextResponse.json({ error: "Code and error message are required" }, { status: 400 });
    }

    // Tạo prompt cho AI để giải thích lỗi
    const prompt = `Bạn là một giáo viên lập trình C giỏi. Hãy phân tích và giải thích lỗi sau đây cho học sinh:

Code của học sinh:
\`\`\`c
${code}
\`\`\`

Lỗi gặp phải: ${errorMessage}

${testcaseInput ? `Input testcase: ${testcaseInput}` : ''}
${expectedOutput ? `Output mong đợi: ${expectedOutput}` : ''}
${actualOutput ? `Output thực tế: ${actualOutput}` : ''}

Hãy:
1. Giải thích nguyên nhân gây ra lỗi này
2. Đưa ra gợi ý cách sửa lỗi
3. Giải thích ngắn gọn và dễ hiểu cho người mới học
4. Trả lời bằng tiếng Việt

Trả về JSON với format:
{
  "errorAnalysis": "Phân tích lỗi",
  "suggestions": "Gợi ý sửa lỗi",
  "explanation": "Giải thích chi tiết"
}`;

    // Gọi API AI (có thể sử dụng OpenAI, Claude, hoặc các AI service khác)
    // Ở đây tôi sẽ sử dụng một AI service mẫu, bạn có thể thay thế bằng service thực tế
    const aiResponse = await callAIService(prompt);

    return NextResponse.json({ 
      success: true, 
      explanation: aiResponse 
    });

  } catch (error) {
    console.error("Error explaining error with AI:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function callAIService(prompt: string) {
  try {
    // Thử OpenAI trước
    if (process.env.OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'Bạn là một giáo viên lập trình C giỏi, chuyên giúp học sinh hiểu và sửa lỗi code. Hãy trả lời bằng tiếng Việt và đưa ra gợi ý cụ thể.'
              },
              {
                role: 'user',
                content: prompt
              }
            ],
            temperature: 0.7,
            max_tokens: 1000
          })
        });

        if (!response.ok) {
          throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        if (data.choices && data.choices[0]) {
          const content = data.choices[0].message.content;
          // Thử parse JSON response
          try {
            return JSON.parse(content);
          } catch {
            // Nếu không parse được JSON, trả về text thường
            return {
              explanation: content
            };
          }
        }
      } catch (openaiError) {
        console.error("OpenAI error:", openaiError);
        // Tiếp tục thử service khác
      }
    }

    // Thử Claude (Anthropic) nếu có
    if (process.env.ANTHROPIC_API_KEY) {
      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 1000,
            messages: [
              {
                role: 'user',
                content: prompt
              }
            ]
          })
        });

        if (!response.ok) {
          throw new Error(`Claude API error: ${response.status}`);
        }

        const data = await response.json();
        if (data.content && data.content[0]) {
          const content = data.content[0].text;
          try {
            return JSON.parse(content);
          } catch {
            return {
              explanation: content
            };
          }
        }
      } catch (claudeError) {
        console.error("Claude error:", claudeError);
      }
    }

    // Thử Google Gemini nếu có
    if (process.env.GOOGLE_AI_API_KEY) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_AI_API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1000
            }
          })
        });

        if (!response.ok) {
          throw new Error(`Gemini API error: ${response.status}`);
        }

        const data = await response.json();
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
          const content = data.candidates[0].content.parts[0].text;
          try {
            return JSON.parse(content);
          } catch {
            return {
              explanation: content
            };
          }
        }
      } catch (geminiError) {
        console.error("Gemini error:", geminiError);
      }
    }

    // Fallback: Trả về giải thích mẫu nếu không có AI service nào hoạt động
    return {
      errorAnalysis: "Dựa trên thông tin lỗi, có thể code của bạn gặp vấn đề về cú pháp hoặc logic.",
      suggestions: "Hãy kiểm tra lại cú pháp, biến, và logic của chương trình.",
      explanation: "Lỗi này thường xảy ra do sai cú pháp, khai báo biến không đúng, hoặc logic chương trình có vấn đề."
    };

  } catch (error) {
    console.error("AI service error:", error);
    return {
      errorAnalysis: "Không thể phân tích lỗi do lỗi kết nối AI service.",
      suggestions: "Hãy kiểm tra lại code và thử lại.",
      explanation: "Vui lòng thử lại sau hoặc liên hệ hỗ trợ."
    };
  }
} 