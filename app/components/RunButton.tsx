import React from "react";

interface RunButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const RunButton: React.FC<RunButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-white font-semibold ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {disabled ? "Running..." : "Run"}
    </button>
  );
};

export default RunButton;
