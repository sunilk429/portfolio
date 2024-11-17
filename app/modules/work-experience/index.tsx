import React from "react";
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";

const workExperience = [
  {
    company: "Company One",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: [
      "Led the development of a next-generation web application using Next.js and TypeScript",
      "Implemented responsive designs and animations using Tailwind CSS",
      "Improved application performance by 40% through code optimization",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://company-one.com",
  },
  {
    company: "Company Two",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    location: "Remote",
    description: [
      "Developed and maintained multiple client-facing applications",
      "Collaborated with UX team to implement design systems",
      "Mentored junior developers and led code reviews",
    ],
    skills: ["React", "JavaScript", "CSS", "Git"],
    link: "https://company-two.com",
  },
  {
    company: "Company Three",
    position: "Web Developer",
    duration: "2018 - 2020",
    location: "New York, NY",
    description: [
      "Built responsive websites for various clients",
      "Implemented SEO best practices and performance optimizations",
      "Worked directly with clients to gather requirements",
    ],
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    link: "https://company-three.com",
  },
];

const WorkExperience = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <Briefcase className="h-6 w-6" />
        Work Experience
      </h2>

      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-link transition-colors">
                    {job.position}
                  </h3>
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-link transition-colors"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {job.company}
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{job.duration}</span>
                <span className="text-sm">• {job.location}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-4 text-gray-600 dark:text-gray-300">
              {job.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
