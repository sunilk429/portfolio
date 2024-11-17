import React from 'react';

const SkillsGrid = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/javascript.svg" },
        { name: "TypeScript", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/typescript.svg" },
        { name: "React", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/react.svg" },
        { name: "Next.js", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/nextdotjs.svg" },
        { name: "Tailwind CSS", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/tailwindcss.svg" },
        { name: "HTML5", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/html5.svg" },
        { name: "CSS3", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/css3.svg" },
        { name: "Redux", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/redux.svg" }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/nodedotjs.svg" },
        { name: "Express", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/express.svg" },
        { name: "MongoDB", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/mongodb.svg" },
        { name: "PostgreSQL", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/postgresql.svg" },
        { name: "Redis", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/redis.svg" },
        { name: "GraphQL", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/graphql.svg" },
        { name: "Docker", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/docker.svg" },
        { name: "Git", icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.3.0/git.svg" }
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container flex flex-col items-center mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {skills.map((skillSet) => (
            <div key={skillSet.category}>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
                {skillSet.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 
                                  shadow-sm hover:shadow-md transition-all duration-300 
                                  flex items-center justify-center p-2.5
                                  group-hover:scale-110">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain
                                 dark:invert dark:opacity-90"
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-600 dark:text-gray-400 
                                   group-hover:text-gray-900 dark:group-hover:text-gray-200 
                                   transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
