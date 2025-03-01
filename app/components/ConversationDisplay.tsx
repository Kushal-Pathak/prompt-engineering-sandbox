import React from "react";

interface Conversation {
  prompt: string;
  response: string;
}

interface ConversationDisplayProps {
  conversation: Conversation[];
}

const ConversationDisplay: React.FC<ConversationDisplayProps> = ({ conversation }) => {
  if (conversation.length === 0) {
    return <p className="text-gray-500">Your conversation will appear here...</p>;
  }

  return (
    <div className="space-y-4">
      {conversation.map((entry, index) => (
        <div key={index} className="bg-white rounded-md p-3 shadow-sm">
          <p className="mb-1">
            <span className="font-semibold text-gray-700">You:</span>{" "}
            <span className="text-gray-800">{entry.prompt}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-700">AI:</span>{" "}
            <span className="text-gray-800">{entry.response}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ConversationDisplay;
