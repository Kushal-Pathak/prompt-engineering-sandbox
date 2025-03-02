"use client"
import { useState, useRef } from "react";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import PromptArea from "./components/PromptArea";
import Footer from "./components/Footer";

// Define the Message type for conversation messages.
type Message = {
  sender: "user" | "ai";
  text: string;
  isError?: boolean;
};

// Home is the main functional component that manages the overall state and layout.
export default function Home() {
  // State for the prompt input.
  const [prompt, setPrompt] = useState("");
  // State for the conversation messages.
  const [messages, setMessages] = useState<Message[]>([]);
  // Loading flag to disable input during API calls and typing animation.
  const [loading, setLoading] = useState(false);
  // State for the currently selected AI model.
  const [selectedModel, setSelectedModel] = useState("Creative");
  // State for displaying an error if the prompt is empty.
  const [promptError, setPromptError] = useState("");

  // Ref to store the index of the AI "loading" message within the messages array.
  const loadingMsgIndexRef = useRef<number | null>(null);

  // Update the selected model when the user changes the dropdown.
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  // Handle submission of the prompt.
  const handleRun = async () => {
    const submittedPrompt = prompt;
    // Clear the text area immediately.
    setPrompt("");

    // If the prompt is empty, display an error message temporarily.
    if (submittedPrompt.trim() === "") {
      setPromptError("Please enter a prompt before submitting.");
      setTimeout(() => {
        setPromptError("");
      }, 3000);
      return;
    }

    // Create the user's message and an initial AI placeholder message.
    const userMsg: Message = { sender: "user", text: submittedPrompt };
    const loadingMsg: Message = { sender: "ai", text: "Loading..." };

    // Add both messages to the conversation and record the index of the AI placeholder.
    setMessages((prev: Message[]) => {
      const newMessages: Message[] = [...prev, userMsg, loadingMsg];
      loadingMsgIndexRef.current = newMessages.length - 1;
      return newMessages;
    });
    // Set loading state to disable further submissions.
    setLoading(true);

    try {
      // Send a POST request to the API route with the prompt and selected model.
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: submittedPrompt, model: selectedModel }),
      });
      let fullText = "";
      let isError = false;
      if (res.ok) {
        const data = await res.json();
        // Check if the API returned a valid response.
        if (!data.response || data.response.trim() === "") {
          fullText =
            "Oops, it seems the AI did not return any response. Please try a different prompt.";
          isError = true;
        } else {
          fullText = data.response;
        }
      } else {
        const errorData = await res.json();
        fullText = errorData.error
          ? `${errorData.error}`
          : "Oops, something went wrong. Please try again later.";
        isError = true;
      }
      // Simulate typing the AI's response into the conversation.
      simulateTyping(fullText, isError);
    } catch (_error) {
      // Handle network or unexpected errors.
      const fullText =
        "Network error: Unable to connect to the AI service. Please check your connection and try again.";
      simulateTyping(fullText, true);
    }
  };

  // simulateTyping creates a typewriter effect for the AI's response.
  const simulateTyping = (fullText: string, isError: boolean) => {
    if (loadingMsgIndexRef.current === null) return;
    let currentText = "";
    let index = 0;
    // Use setInterval to gradually append characters to the response.
    const interval = setInterval(() => {
      currentText += fullText[index];
      setMessages((prev: Message[]) => {
        const newMessages = [...prev];
        // Update the AI message placeholder with the current text.
        newMessages[loadingMsgIndexRef.current!] = {
          sender: "ai",
          text: currentText,
          isError,
        };
        return newMessages;
      });
      index++;
      // When the entire response has been typed, clear the interval and reset loading.
      if (index >= fullText.length) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 10); // Adjust the typing speed by changing the interval duration.
  };

  return (
    <div className="flex h-screen justify-center bg-gray-700 p-4">
      {/* Main container with responsive width constraints */}
      <div className="flex flex-col w-full max-w-3xl bg-gray-800 text-white rounded-lg shadow-lg">
        {/* Header: Contains the AI model dropdown */}
        <Header selectedModel={selectedModel} onModelChange={handleModelChange} />

        <div className="border"></div>

        {/* ChatArea: Displays the conversation messages */}
        <ChatArea messages={messages} />

        {/* Display an error message for an empty prompt if present */}
        {promptError && (
          <div className="text-red-500 px-4 py-2">{promptError}</div>
        )}

        {/* PromptArea: Input area for user to type and submit a prompt */}
        <PromptArea
          prompt={prompt}
          setPrompt={setPrompt}
          onRun={handleRun}
          loading={loading}
        />

        {/* Footer: Displays additional information or branding */}
        <Footer />
      </div>
    </div>
  );
}
