import React from "react";
const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

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
