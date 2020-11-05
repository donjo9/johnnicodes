import React from "react";

const SoMeItem = ({ title, description, url }) => {
  return (
    <li className="mx-1">
      <a
        rel="noopener noreferrer"
        href={url}
        className="underline hover:text-orange-600 focus:text-orange-600"
        title={description}
      >
        {title}
      </a>
    </li>
  );
};

const SoMe = ({ some }) => {
  return (
    <ul className="col-span-2 flex flex-row sm:justify-end text-gray-400 font-mono">
      {some.map((s) => (
        <SoMeItem key={s.fields.url} {...s.fields}></SoMeItem>
      ))}
    </ul>
  );
};

export default SoMe;
