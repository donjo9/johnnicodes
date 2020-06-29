import React from "react";

const Card = ({ title, description, stack, source, demo }) => {
  const stackItems = stack.map((s) => <div>{s}</div>);
  return (
    <div className="text-gray-800 max-w-md m-6 rounded-lg shadow-lg border border-blue-600 bg-blue-700 p-3">
      <h1 className="text-orange-400 text-lg mb-5 underline">{title}</h1>
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
