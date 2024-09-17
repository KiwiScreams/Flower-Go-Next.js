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
      <ul>
        <li
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleToggle(0)}
        >
          <h3>Description</h3>
          {activeIndex === 0 && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis
              imperdiet sodales egestas. Neque suspendisse sed accumsan,
              molestie aliquet.
            </p>
          )}
        </li>
        <li
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleToggle(1)}
        >
          <h3>Ingredients</h3>
          {activeIndex === 1 && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis
              imperdiet sodales egestas. Neque suspendisse sed accumsan,
              molestie aliquet.
            </p>
          )}
        </li>
        <li
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleToggle(2)}
        >
          <h3>Testimonials</h3>
          {activeIndex === 2 && (
            <p>
              YLorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              quis imperdiet sodales egestas. Neque suspendisse sed accumsan,
              molestie aliquet.
            </p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Faq;
