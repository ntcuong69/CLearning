import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { code, errorMessage } = await req.json();

    if (!code || !errorMessage) {
      return NextResponse.json({ error: "Code and error message are required" }, { status: 400 });
    }

    // Tạo prompt cho AI để giải thích lỗi
    const prompt = `Đọc kỹ và phân tích lỗi trong đoạn code C sau:

Code:
\`\`\`c
${code}
\`\`\`

Lỗi: ${errorMessage}

Trả về JSON:
{
  "result": "Phân tích nguyên nhân và gợi ý sửa lỗi ngắn gọn, dễ hiểu"
}`;

    // Gọi OpenRouter API
    const aiResponse = await callOpenRouter(prompt);

    return NextResponse.json({ 
      success: true, 
      explanation: aiResponse 
    });

  } catch (error) {
    console.error("Error explaining error with AI:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function callOpenRouter(prompt: string) {
  try {
    // Kiểm tra API key
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OpenRouter API key not configured");
    }

    // Model mặc định - có thể thay đổi trong .env
    const model = process.env.OPENROUTER_MODEL || "openai/gpt-3.5-turbo";
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        'X-Title': 'Code Challenge AI Helper'
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: 'Bạn là giáo viên C. Phân tích lỗi chính xác và ngắn gọn. Chỉ trả về JSON với trường "result". Trả lời bằng tiếng Việt.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.1,
        max_tokens: 1600,
        stream: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      const content = data.choices[0].message.content.trim();
      
      // Thử parse JSON response
      try {
        const parsedContent = JSON.parse(content);
        return parsedContent;
      } catch (parseError) {
        console.log("Could not parse JSON response, trying to extract JSON from text:", content);
        
        // Thử extract JSON từ text nếu có
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try {
            const extractedJson = JSON.parse(jsonMatch[0]);
            return extractedJson;
          } catch (e2) {
            console.log("Could not parse extracted JSON");
          }
        }
        
        // Nếu không parse được JSON, trả về text thường
        return {
          result: content
        };
      }
    } else {
      throw new Error("Invalid response format from OpenRouter");
    }

  } catch (error) {
    console.error("OpenRouter error:", error);
    
    // Fallback: Trả về giải thích mẫu nếu OpenRouter không hoạt động
    return {
      result: "Dựa trên thông tin lỗi, có thể code của bạn gặp vấn đề về cú pháp hoặc logic. Hãy kiểm tra lại cú pháp, biến, và logic của chương trình. Lỗi này thường xảy ra do sai cú pháp, khai báo biến không đúng, hoặc logic chương trình có vấn đề. Vui lòng kiểm tra lại code và thử lại."
    };
  }
} 