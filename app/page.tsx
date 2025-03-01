export default function Home() {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      {/* 1) HEADER */}
      <header className="bg-gray-700 p-4 flex justify-center items-center">
        <select
          name="model"
          id="model"
          className="px-3 py-1 bg-gray-800 border-2 border-gray-900 rounded-md cursor-pointer"
        >
          <option value="creative">Creative</option>
          <option value="precise">Precise</option>
          <option value="concise">Concise</option>
        </select>
      </header>

      {/* 2) MAIN (Conversation Area) */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-blue-600 px-3 py-2 rounded-xl sm:w-[90%] md:w-[60%] lg:w-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              beatae dolor ipsum, deserunt dignissimos asperiores, repudiandae
              praesentium consequuntur omnis error debitis impedit nesciunt
              dolorum similique aliquid? Recusandae culpa maxime laborum.
            </div>
          </div>

          {/* AI response */}
          <div className="flex justify-start">
            <div className="bg-gray-700 px-3 py-2 rounded-xl sm:w-[90%] md:w-[60%] lg:w-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              beatae dolor ipsum, deserunt dignissimos asperiores, repudiandae
              praesentium consequuntur omnis error debitis impedit nesciunt
              dolorum similique aliquid? Recusandae culpa maxime laborum.
            </div>
          </div>
        </div>
      </main>

      {/* 3) PROMPT INPUT AREA */}
      <div className="bg-gray-900 p-4">
        <div className="max-w-2xl mx-auto">
          <textarea
            name="prompt"
            className="w-full h-16 p-2 border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your prompt here..."
          />
          <div className="flex justify-end mt-2">
            <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
              Run
            </button>
          </div>
        </div>
      </div>

      {/* 4) FOOTER */}
      <footer className="bg-purple-600 text-center p-3">
        Prompt Engineering Sandbox By Kushal Pathak
      </footer>
    </div>
  );
}
