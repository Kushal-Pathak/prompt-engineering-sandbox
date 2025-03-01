import React from "react";

interface ModelDropdownProps {
  model: string;
  setModel: (value: string) => void;
}

const ModelDropdown: React.FC<ModelDropdownProps> = ({ model, setModel }) => {
  return (
    <select
      value={model}
      onChange={(e) => setModel(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
    >
      <option value="Creative">Creative</option>
      <option value="Precise">Precise</option>
      <option value="Concise">Concise</option>
    </select>
  );
};

export default ModelDropdown;
