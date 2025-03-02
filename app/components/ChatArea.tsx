import { useEffect, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // User Avatar
import SmartToyIcon from "@mui/icons-material/SmartToy"; // AI Avatar

interface Message {
  sender: "user" | "ai";
  text: string;
  isError?: boolean;
}

interface ChatAreaProps {
  messages: Message[];
}

export default function ChatArea({ messages }: ChatAreaProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the dummy div at the end of the chat messages
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex-1 flex flex-col p-4 overflow-y-auto scroller space-y-4">
      {messages.length === 0 ? (
        <p className="text-center text-gray-400">
          No messages yet. Start a conversation!
        </p>
      ) : (
        messages.map((msg, index) =>
          msg.sender === "user" ? (
            <div
              key={index}
              className="flex items-start space-x-3 justify-end"
            >
              <p className="p-2 bg-gray-700 rounded-lg max-w-[85%] whitespace-pre-wrap">
                {msg.text}
              </p>
              <span className="cursor-pointer" title="You">
                <AccountCircleIcon className="text-blue-400 w-8 h-8" />
              </span>
            </div>
          ) : (
            <div key={index} className="flex items-start space-x-3">
              <span className="cursor-pointer" title="AI">
                <SmartToyIcon className="text-green-400 w-8 h-8" />
              </span>
              <p
                className={`p-2 bg-gray-700 rounded-lg max-w-[85%] whitespace-pre-wrap ${
                  msg.isError ? "text-red-600 bg-red-200" : ""
                }`}
              >
                {msg.text}
              </p>
            </div>
          )
        )
      )}
      {/* Dummy element to scroll into view */}
      <div ref={endRef} />
    </main>
  );
}
