import { ChangeEvent, KeyboardEvent } from "react";
import SendIcon from "@mui/icons-material/Send";

// Define the props interface for the PromptArea component.
// - `prompt`: The current text in the input area.
// - `setPrompt`: Function to update the prompt value.
// - `onRun`: Function to submit the prompt.
// - `loading`: Indicates if a prompt is currently being processed.
interface PromptAreaProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onRun: () => void;
  loading: boolean;
}

// PromptArea is a functional component that renders a textarea and a submit button.
// It handles user input and submits the prompt on button click or when pressing Enter (without Shift).
export default function PromptArea({
  prompt,
  setPrompt,
  onRun,
  loading,
}: PromptAreaProps) {
  // Handle key press events within the textarea.
  // If Enter is pressed without Shift, prevent the default newline and trigger prompt submission.
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
        {/*
          Optional label for the textarea is commented out.
          It can be enabled if a label is needed.
          <label htmlFor="prompt" className="block px-2 py-1 text-sm text-gray-300">
            Prompt:
          </label>
        */}
        {/* Textarea for user prompt input */}
        <textarea
          id="prompt"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          className="px-2 py-1 h-18 w-full border-none focus:outline-none resize-none overflow-y-auto scroller"
        ></textarea>
        <div className="px-4 py-2">
          <div className="flex justify-end">
            {/* Button to submit the prompt.
                It is disabled if loading is true or if the prompt is empty. */}
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
