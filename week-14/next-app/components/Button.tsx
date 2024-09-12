import React from "react";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  const handler = () => {
    console.log("signin button clicked");
  };
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
