import { ChangeEvent, KeyboardEvent } from "react";
import SendIcon from "@mui/icons-material/Send";

interface PromptAreaProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onRun: () => void;
  loading: boolean;
}

export default function PromptArea({
  prompt,
  setPrompt,
  onRun,
  loading,
}: PromptAreaProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!loading && prompt.trim() !== "") {
        onRun();
      }
    }
  };

  return (
    <section className="px-4">
      <div className="bg-gray-900 rounded-md">
        {/* <label
          htmlFor="prompt"
          className="block px-2 py-1 text-sm text-gray-300"
        >
          Prompt:
        </label> */}
        <textarea
          id="prompt"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setPrompt(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="px-2 py-1 h-18 w-full border-none focus:outline-none resize-none overflow-y-auto scroller"
        ></textarea>
        <div className="px-4 py-2">
          <div className="flex justify-end">
            <button
              onClick={onRun}
              disabled={loading || prompt.trim() === ""}
              className="cursor-pointer disabled:opacity-50"
              title="Run prompt"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
