import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CustomCodeBlock(props: { code: string }) {
  const { code } = props;

  return (
    <SyntaxHighlighter
      language="typescript"
      style={vscDarkPlus}
      showLineNumbers={true}
      customStyle={{
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "fit-content",
      }}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
}
