"use client"
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>();
  useEffect(() => {
    let newDate = new Date();
    setYear(newDate.getFullYear());
  }, []);
  return (
    <footer>
      <div className="flex justify-between items-center px-6 max-w-6xl h-20 md:mx-auto ">
        <div className="font-overpass600 text-xs md:text-base text-softblack">
          © {year}. Made with 🧡 by JanaIsCoding.
        </div>
        <div className="flex gap-6 md:px-10">
          <a href="https://www.linkedin.com/in/jana-istrate/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              width={24}
              height={24}
              title="LinkedIn"
              className="pulse-hover"
              alt="LinkedIn Logo"
            />
          </a>
          <a href="https://github.com/janaiscoding">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              width={24}
              height={24}
              title="GitHub"
              className="pulse-hover"
              alt="GitHub Logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;