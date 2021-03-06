import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Card = ({ title, description, stack, sourceUrl, demo }) => {
  const stackItems = stack.map((s) => <li key={s}>{s}</li>);
  return (
    <div className="text-gray-200 container my-6 rounded-lg shadow-md border border-blue-700 bg-blue-900 p-3">
      <h1 className="text-orange-600 text-lg mb-3">{title}</h1>
      <h1 className="py-2 underline">Description:</h1>
      <div className="py-2">{documentToReactComponents(description)}</div>
      <h1 className="pb-2 underline">Build with:</h1>
      <ul className="list-disc pl-4">{stackItems}</ul>
      <a
        className="inline-block cursor-pointer rounded-lg border-gray-700 bg-orange-600 text-gray-300 border-2 m-2 py-2 px-4"
        target="_blank"
        rel="noopener noreferrer"
        href={demo}
        alt="Link to demo"
      >
        Demo
      </a>
      <a
        className="inline-block cursor-pointer rounded-lg border-gray-700 bg-orange-600 text-gray-300 border-2 m-2 py-2 px-4"
        target="_blank"
        rel="noopener noreferrer"
        href={sourceUrl}
        alt="Link to source"
      >
        Source
      </a>
    </div>
  );
};

export default Card;
