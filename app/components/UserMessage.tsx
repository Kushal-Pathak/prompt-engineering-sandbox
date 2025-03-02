import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Define the props interface for the UserMessage component.
// - `text`: The content of the user's message.
interface UserMessageProps {
  text: string;
}

// UserMessage is a functional React component that renders a user's message.
// It displays the user's message text along with their avatar.
export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex items-start space-x-3 justify-end">
      {/* Message text container */}
      <p className="p-2 bg-gray-700 rounded-lg max-w-[85%] whitespace-pre-wrap">
        {text}
      </p>
      {/* User avatar */}
      <span className="cursor-pointer" title="You">
        <AccountCircleIcon className="text-blue-400 w-8 h-8" />
      </span>
    </div>
  );
}
