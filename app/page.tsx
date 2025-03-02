"use client"
import { useState, useRef } from "react";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import PromptArea from "./components/PromptArea";
import Footer from "./components/Footer";

type Message = {
  sender: "user" | "ai";
  text: string;
  isError?: boolean;
};

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Creative");
  const [promptError, setPromptError] = useState(""); // For empty prompt feedback

  // Ref to store the index of the AI "loading" message in the messages array
  const loadingMsgIndexRef = useRef<number | null>(null);

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  const handleRun = async () => {
    const submittedPrompt = prompt;
    // Clear the text area immediately
    setPrompt("");

    if (submittedPrompt.trim() === "") {
      setPromptError("Please enter a prompt before submitting.");
      setTimeout(() => {
        setPromptError("");
      }, 3000);
      return;
    }

    // Create the user's message and the AI placeholder message with explicit typing
    const userMsg: Message = { sender: "user", text: submittedPrompt };
    const loadingMsg: Message = { sender: "ai", text: "Loading..." };

    setMessages((prev: Message[]) => {
      const newMessages: Message[] = [...prev, userMsg, loadingMsg];
      // Store the index of the AI's loading placeholder
      loadingMsgIndexRef.current = newMessages.length - 1;
      return newMessages;
    });
    setLoading(true);

    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: submittedPrompt, model: selectedModel }),
      });
      let fullText = "";
      let isError = false;
      if (res.ok) {
        const data = await res.json();
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
      simulateTyping(fullText, isError);
    } catch (error) {
      const fullText =
        "Network error: Unable to connect to the AI service. Please check your connection and try again.";
      simulateTyping(fullText, true);
    }
  };

  // Function to simulate the typing effect
  const simulateTyping = (fullText: string, isError: boolean) => {
    if (loadingMsgIndexRef.current === null) return;
    let currentText = "";
    let index = 0;
    const interval = setInterval(() => {
      currentText += fullText[index];
      setMessages((prev: Message[]) => {
        const newMessages = [...prev];
        // Update the loading placeholder with current text
        newMessages[loadingMsgIndexRef.current!] = {
          sender: "ai",
          text: currentText,
          isError,
        };
        return newMessages;
      });
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 10); // Adjust the interval (ms) for typing speed as needed
  };

  return (
    <div className="flex h-screen justify-center bg-gray-700">
      <div className="flex flex-col xsm:w-full sm:w-[80%] md:w-[60%] lg:w-[55%] bg-gray-800 text-white">
        {/* Header */}
        <Header selectedModel={selectedModel} onModelChange={handleModelChange} />

        <div className="border"></div>

        {/* Chat Messages */}
        <ChatArea messages={messages} />

        {/* Error message for empty prompt submission */}
        {promptError && (
          <div className="text-red-500 px-4 py-2">{promptError}</div>
        )}

        {/* Input Section */}
        <PromptArea
          prompt={prompt}
          setPrompt={setPrompt}
          onRun={handleRun}
          loading={loading}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
