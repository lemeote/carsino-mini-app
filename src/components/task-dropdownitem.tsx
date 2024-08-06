import { useState } from "react";

interface Props {
  title: String;
  content: String;
}

const Dropdown: React.FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full inline-block text-left">
      <div className="w-full flex justify-between">
        <span className="w-[80%]">{title}</span>
        <button
          type="button"
          className="w-5 h-5 bg-white text-black text-sm rounded-full font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="">{isOpen ? "-" : "+"}</span>
        </button>
      </div>
      {isOpen && <span className="text-xs text-[#ffffff60]">{content}</span>}
    </div>
  );
};

export default Dropdown;
