export default function Header() {
  return (
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
  );
}
