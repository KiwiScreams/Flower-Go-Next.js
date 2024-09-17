import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <h3>Q: What is this FAQ about?</h3>
          <p>A: This FAQ is about answering common questions.</p>
        </li>
        <li>
          <h3>Q: How do I use this FAQ?</h3>
          <p>A: Simply read through the questions and answers.</p>
        </li>
        <li>
          <h3>Q: Can I ask more questions?</h3>
          <p>A: Yes, feel free to ask us anything!</p>
        </li>
      </ul>
    </div>
  );
};

export default Faq;
