import React from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { getCSuggestions } from "@/lib/auto-complete";

interface CodeEditorProps {
  code: string;
  setCode: (value: string) => void;
}
let registered = false;
export default function CodeEditor({ code, setCode }: CodeEditorProps) {

  const handleMount: OnMount = (editor, monacoInstance) => {
    if (registered) return;
  registered = true;

  // Đăng ký ngôn ngữ nếu chưa có
  if (!monacoInstance.languages.getLanguages().some((lang) => lang.id === "c")) {
    monacoInstance.languages.register({ id: "c" });
  }

  monacoInstance.languages.registerCompletionItemProvider("c", {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      return { suggestions: getCSuggestions(range) };
    },
  });
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="c"
      value={code}
      onChange={(value) => setCode(value ?? "")}
      theme="vs-light"
      onMount={handleMount}
      options={{
        fontSize: 14,
        fontFamily: "'Fira Code', 'Fira Mono', monospace",
        minimap: { enabled: false },
        wordWrap: "on",
        scrollBeyondLastLine: false,
        lineNumbers: "on",
        tabSize: 2,
        automaticLayout: true,
        renderLineHighlight: "none",
        padding: {
          top: 16,
          bottom: 16,
        },
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
