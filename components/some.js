import React from "react";

const SoMeLinks = [
  {
    url: "https://www.twitter.com/johnnicodes",
    title: "Link to my twitter account",
    some: "Twitter",
  },
  {
    url: "https://www.github.com/donjo9",
    title: "Link to my Github account",
    some: "Github",
  },
  {
    url: "https://www.linkedin.com/in/johnnim/",
    title: "Link to my Linked In account",
    some: "LinkedIn",
  },
];

const SoMeItem = ({ title, some, url }) => {
  return (
    <li className="mx-1">
      <a
        rel="noopener noreferrer"
        href={url}
        className="underline hover:text-orange-600 focus:text-orange-600"
        title={title}
      >
        {some}
      </a>
    </li>
  );
};

const SoMo = () => {
  return (
    <ul className="col-span-2 flex flex-row sm:justify-end text-gray-400 font-mono">
      {SoMeLinks.map((s) => (
        <SoMeItem key={s.url} {...s}></SoMeItem>
      ))}
    </ul>
  );
};

export default SoMo;
