import SmartToyIcon from "@mui/icons-material/SmartToy";

// Define the props interface for the AIMessage component.
// - `text`: The content of the AI message.
// - `isError`: An optional flag indicating whether the message represents an error.
interface AIMessageProps {
  text: string;
  isError?: boolean;
}

// AIMessage is a functional React component that renders an AI-generated message.
// It displays an AI avatar (using SmartToyIcon) and the message text.
// If the message is flagged as an error (isError is true), it applies specific error styles.
export default function AIMessage({ text, isError }: AIMessageProps) {
  return (
    <div className="flex items-start space-x-3">
      {/* AI Avatar */}
      <span className="cursor-pointer" title="AI">
        <SmartToyIcon className="text-green-400 w-8 h-8" />
      </span>
      {/* Message text container with conditional styling for errors */}
      <p
        className={`p-2 bg-gray-700 rounded-lg max-w-[85%] whitespace-pre-wrap ${
          // If this message is an error, apply red text and a red-tinted background.
          isError ? "text-red-600 bg-red-200" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
}
