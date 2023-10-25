import { default as MonacoEditor, useMonaco } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import { ClientOnly } from "remix-utils/client-only";

const Editor = () => {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  return (
    <MonacoEditor
      defaultLanguage="shell"
      defaultValue="// some comment"
      theme="vs-dark"
      options={{ minimap: { enabled: false } }}
    />
  );
};

export default function CodeView({ style}) {
  const ref = useRef();

  return (
    <div className="h-80 w-96">
      <ClientOnly
        fallback={<span className="loading loading-spinner loading-lg" />}
      >
        {() => <Editor />}
      </ClientOnly>
    </div>
  );
}
