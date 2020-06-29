import React from "react";

const Card = ({ title, description, stack, source, demo }) => {
  const stackItems = stack.map((s) => <div>{s}</div>);
  return (
    <div className="text-gray-200 container my-6 rounded-lg shadow-md border border-blue-700 bg-blue-900 p-3">
      <h1 className="text-orange-600 text-lg mb-5">{title}</h1>
      <p>{description}</p>
      {stackItems}
      <a href={source} alt="Link to source">
        Source
      </a>
      <a href={demo} alt="Link to demo">
        Demo
      </a>
    </div>
  );
};

export default Card;
