import React from "react";

const Input = ({
  type,
  placeholder,
  name,
  value,
  onchange,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="px-2 py-1 bg-transparent placeholder:text-gray-700 rounded-md border border-gray-400"
      value={value}
      onChange={onchange}
    />
  );
};

export default Input;
