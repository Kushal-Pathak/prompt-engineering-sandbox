import React from "react";

interface PromptInputProps {
  prompt: string;
  setPrompt: (value: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt }) => {
  return (
    <textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Type your prompt here..."
      className="flex-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      style={{ height: "100px" }}
    />
  );
};

export default PromptInput;
