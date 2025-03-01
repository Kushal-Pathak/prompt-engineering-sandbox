export default function Home() {
  return (
    <div className="flex h-screen justify-center bg-gray-700 ">
      <div className="flex flex-col xsm:w-full sm:w-[80%] md:w-[60%] lg:w-[55%] bg-gray-800 text-white">
        <header className="flex justify-center p-3">
          <select
            name=""
            id=""
            className="border-2 border-gray-500 rounded-md px-2 py-1 cursor-pointer bg-gray-800"
          >
            <option value="">Creative</option>
            <option value="">Precise</option>
            <option value="">Concise</option>
          </select>
        </header>
        <div className="border"></div>

        <main className="flex-1 flex flex-col p-4">
          <p className="p-2 mb-5 bg-gray-700 rounded">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ipsum
            tempore fugiat odit atque error. Recusandae deserunt sed unde, optio
            impedit nesciunt minus placeat veritatis labore reiciendis
            reprehenderit facilis sit.
          </p>
          <p className="p-2 mb-5 bg-gray-700 rounded">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ipsum
            tempore fugiat odit atque error. Recusandae deserunt sed unde, optio
            impedit nesciunt minus placeat veritatis labore reiciendis
            reprehenderit facilis sit.
          </p>
        </main>
        <section className="px-4">
          <div className="bg-gray-900 rounded-md ">
            <textarea
              name=""
              id=""
              className="px-2 py-1 h-20 w-full resize-none overflow-y-auto"
            ></textarea>
            <div className="px-4">
              <div className="flex justify-end pb-1">
                <button className="bg-blue-700 px-2">Run</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm m-4">
          Prompt Engineering Sandbox By Kushal Pathak
        </footer>
      </div>
    </div>
  );
}
