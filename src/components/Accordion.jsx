import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-900">
          <button
            className="w-full flex justify-between items-center p-4 focus:outline-none"
            onClick={() => handleClick(index)}
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <span className="ml-6">{activeIndex === index ? "▲" : "▼"}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4">
              <p className="text-white">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// PropTypes untuk items
Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
