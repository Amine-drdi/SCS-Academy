import React, { useState } from "react";
import { faq } from "../../../assets/data/faq";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        type="button"
        aria-label="Toggle FAQ item"
        className="flex justify-between items-center w-full p-4 text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            width="24"
            height="24"
            className="text-gray-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6,9 12,15 18,9" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 px-6 text-gray-600 text-base">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">FAQ</h2>
      <div className="space-y-4">
        {faq.map((item) => (
          <Item title={item.question} key={item.question}>
            {item.answer}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Faq;
