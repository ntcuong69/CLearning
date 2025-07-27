'use client';

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import AIDemo from '@/components/ExercisePage/AIDemo';

export default function MonacoTestPage() {
  const [code, setCode] = useState<string>(`#include <stdio.h>

int main() {
    printf("Hello, world!\\n");
    return 0;
}`);
  const [output, setOutput] = useState<string>('');
  const [executionTime, setExecutionTime] = useState<number | null>(null); // Thêm state để lưu thời gian thực thi
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setExecutionTime(null); // Reset thời gian thực thi trước khi chạy
    try {
      const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
        language: 'c',
        version: '10.2.0',
        files: [
          {
            name: 'main.c',
            content: code,
          },
        ],
      });

      const { run } = response.data;
      setOutput(run.output);

      // Kiểm tra và xử lý giá trị run.time
      if (run.time && typeof run.time === 'number') {
        setExecutionTime(run.time * 1000); // Chuyển từ giây sang ms
      } else {
        setExecutionTime(0); // Nếu không có thời gian, đặt giá trị mặc định là 0
      }
    } catch (error: any) {
      setOutput('Lỗi khi chạy code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Monaco Editor + Piston API</h1>
      <Editor
        height="300px"
        defaultLanguage="c"
        value={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
      />
      <button
        onClick={handleRun}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Running...' : 'Run Code'}
      </button>
      <div className="mt-4 p-2 bg-gray-100 rounded">
        <h2 className="font-semibold">Output:</h2>
        <pre className="whitespace-pre-wrap">{output}</pre>
        {executionTime !== null && (
          <p className="mt-2 text-sm text-gray-600">
            Execution Time: {executionTime.toFixed(20)} ms
          </p>
        )}
      </div>
      <AIDemo />
    </div>
  );
}
