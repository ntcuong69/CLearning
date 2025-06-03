import React from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  setCode: (value: string) => void;
}

export default function CodeEditor({ code, setCode }: CodeEditorProps) {
  return (
    <Editor
      height="80%"
      defaultLanguage="c"
      value={code}
      onChange={(value) => setCode(value ?? "")}
      theme="vs-dark"
      options={{
        fontSize: 14,
        fontFamily: "'Fira Code', 'Fira Mono', monospace",
        minimap: { enabled: false },
        wordWrap: "on",
        scrollBeyondLastLine: false,
        lineNumbers: "on",
        tabSize: 2,
        automaticLayout: true,
        renderLineHighlight: "all",
        overviewRulerBorder: false,
        padding: {
          top: 16,
          bottom: 16,
        },
        cursorSmoothCaretAnimation: "on",
        cursorBlinking: "phase",
        formatOnType: true,
        formatOnPaste: true,
        scrollbar: {
          verticalScrollbarSize: 4,
          horizontalScrollbarSize: 4,
        },
      }}
    />
  );
}