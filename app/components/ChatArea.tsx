import { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";

// Define the Message type with required properties.
interface Message {
  sender: "user" | "ai";
  text: string;
  isError?: boolean;
}

// Define the props interface for the ChatArea component.
interface ChatAreaProps {
  messages: Message[];
}

// ChatArea renders the conversation messages and auto-scrolls to the latest message.
export default function ChatArea({ messages }: ChatAreaProps) {
  // Create a ref for the dummy element used for scrolling.
  const endRef = useRef<HTMLDivElement>(null);

  // useEffect triggers scrolling to the dummy element whenever the messages array updates.
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex-1 flex flex-col p-4 overflow-y-auto scroller space-y-4">
      {messages.length === 0 ? (
        // Display a placeholder when there are no messages.
        <p className="text-center text-gray-400">
          No messages yet. Start a conversation!
        </p>
      ) : (
        // Map through the messages array and render either a UserMessage or AIMessage component.
        messages.map((msg, index) =>
          msg.sender === "user" ? (
            <UserMessage key={index} text={msg.text} />
          ) : (
            <AIMessage key={index} text={msg.text} isError={msg.isError} />
          )
        )
      )}
      {/* Dummy element to scroll into view for auto-scrolling */}
      <div ref={endRef} />
    </main>
  );
}
