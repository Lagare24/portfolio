import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and my skills.",
};

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello! I'm a passionate developer with experience in building web
        applications using modern technologies.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript / TypeScript</li>
        <li>React / Redux</li>
        <li>Node.js / Express</li>
        <li>HTML / CSS</li>
      </ul>
      <h2>Experience</h2>
      <p>
        I have worked on various projects ranging from small websites to
        large-scale applications. My focus is on creating efficient and scalable
        solutions.
      </p>
    </div>
  );
};

export default AboutPage;
