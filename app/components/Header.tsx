// Define the props interface for the Header component.
// - `selectedModel`: The currently selected AI model.
// - `onModelChange`: Event handler to update the selected model when the dropdown changes.
interface HeaderProps {
  selectedModel: string;
  onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Header is a functional React component that renders a dropdown for selecting the AI model.
export default function Header({ selectedModel, onModelChange }: HeaderProps) {
  return (
    <header className="flex justify-center p-3">
      {/* Dropdown for selecting the AI model */}
      <select
        value={selectedModel}
        onChange={onModelChange}
        className="border-2 border-gray-500 rounded-md px-2 py-1 cursor-pointer bg-gray-800"
      >
        <option value="Creative">Creative</option>
        <option value="Precise">Precise</option>
        <option value="Concise">Concise</option>
      </select>
    </header>
  );
}
