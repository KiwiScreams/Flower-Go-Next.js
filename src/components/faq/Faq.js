"use client";
import "./Faq.css";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleToggle(0)}
        >
          <h3>Q: What is this FAQ about?</h3>
          {activeIndex === 0 && (
            <p>A: This FAQ is about answering common questions.</p>
          )}
        </li>
        <li
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleToggle(1)}
        >
          <h3>Q: How do I use this FAQ?</h3>
          {activeIndex === 1 && (
            <p>A: Simply read through the questions and answers.</p>
          )}
        </li>
        <li
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleToggle(2)}
        >
          <h3>Q: Can I ask more questions?</h3>
          {activeIndex === 2 && <p>A: Yes, feel free to ask us anything!</p>}
        </li>
      </ul>
    </div>
  );
};

export default Faq;
