import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className = "" }) => {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}>
      {title}
    </button>
  );
};

export default Button;
