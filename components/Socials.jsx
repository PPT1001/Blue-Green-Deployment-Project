"use client";

import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/pragash-sasitharan/",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "https://www.github.com/ppt1001/",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/pragash.sasitharan.3",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://www.instagram.com/pragash_.s/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} target="_blank" key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
