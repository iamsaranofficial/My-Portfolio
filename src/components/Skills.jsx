import { Icon } from "@iconify/react";

const techSkills = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },

  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Express.js",
    icon: "simple-icons:express",
  },
  {
    name: "NestJS",
    icon: "logos:nestjs",
  },
  {
    name: "Socket.io",
    icon: "logos:socket-io",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb",
  },
  {
    name: "Sass/SCSS",
    icon: "logos:sass",
  },
  {
    name: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Figma",
    icon: "logos:figma",
  },
  {
    name: "Cypress",
    icon: "logos:cypress",
  },
  {
    name: "Storybook",
    icon: "logos:storybook-icon",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      <div className="skills-grid">
        {techSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-wrapper">
              <Icon icon={skill.icon} className="skill-icon" />
            </div>
            <span className="skill-label">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
