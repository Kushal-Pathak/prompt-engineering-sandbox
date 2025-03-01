import SendIcon from "@mui/icons-material/Send";
export default function PromptArea() {
  return (
    <section className="px-4">
      <div className="bg-gray-900 rounded-md">
        <textarea
          name=""
          id=""
          placeholder="Enter your prompt here..."
          className="px-2 py-1 h-18 w-full border-none focus:outline-none resize-none overflow-y-auto scroller"
        ></textarea>
        <div className="px-4 py-2">
          <div className="flex justify-end">
            <button className="cursor-pointer" title="Run prompt">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
