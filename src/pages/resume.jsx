import React from "react";
import { FiDownload, FiLinkedin } from "react-icons/fi";
import profile from "../data/profile.json";

export default function ResumeSection() {
  return (
    <div id="resume">
      <h3 className="text-2xl font-semibold text-foreground">Resume</h3>
      <p className="mt-2 text-muted-foreground">
        Download my latest resume or connect with me.
      </p>

      <div className="mt-6 card-glass tilt-hover flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="font-semibold text-foreground text-xl">
            {profile.fullName}
          </div>
          <div className="text-sm text-muted-foreground">
            Full Stack Developer — Java, Spring Boot & React.js
          </div>

          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold text-sm sm:text-base text-white"
            >
              <FiDownload /> Download Resume
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-background/50 text-foreground font-semibold text-sm sm:text-base"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="w-48 mt-4 md:mt-0">
          <div className="text-xs text-muted-foreground">Key Tech</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              "Java",
              "Spring Boot",
              "React.js",
              "MySQL",
              "PostgreSQL",
              "Firebase",
              "Tailwind CSS",
              "Cloudinary",
              "Vercel",
              "Render",
            ].map((tech) => (
              <div key={tech} className="text-sm font-medium text-foreground">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
