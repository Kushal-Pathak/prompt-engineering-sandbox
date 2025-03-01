import React from "react";
import ModelDropdown from "./ModelDropdown";

interface DropdownHeaderProps {
  model: string;
  setModel: (value: string) => void;
}

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ model, setModel }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <h1 className="text-xl font-bold">AI Model</h1>
      <div className="w-full sm:w-1/2">
        <ModelDropdown model={model} setModel={setModel} />
      </div>
    </div>
  );
};

export default DropdownHeader;
