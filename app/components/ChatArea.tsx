import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // User Avatar
import SmartToyIcon from "@mui/icons-material/SmartToy"; // AI Avatar

export default function ChatArea() {
  return (
    <main className="flex-1 flex flex-col p-4 overflow-y-auto scroller space-y-4">
      {/* User's Message */}
      <div className="flex items-start space-x-3 justify-end">
        <p className="p-2 bg-gray-700 rounded-lg max-w-[85%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ipsum
          tempore fugiat odit atque error. Recusandae deserunt sed unde, optio
          impedit nesciunt minus placeat veritatis labore reiciendis
          reprehenderit facilis sit.
        </p>
        <span className="cursor-pointer" title="You">
          <AccountCircleIcon className="text-blue-400 w-8 h-8" />
        </span>
      </div>

      {/* AI's Response */}
      <div className="flex items-start space-x-3">
        <span className="cursor-pointer" title="AI">
          <SmartToyIcon className="text-green-400 w-8 h-8" />
        </span>
        <p className="p-2 bg-gray-700 rounded-lg max-w-[85%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ipsum
          tempore fugiat odit atque error. Recusandae deserunt sed unde, optio
          impedit nesciunt minus placeat veritatis labore reiciendis
          reprehenderit facilis sit.
        </p>
      </div>
    </main>
  );
}
