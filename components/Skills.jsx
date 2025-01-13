import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMicrosoftazure,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiDocker,
  SiJenkins,
  SiAnsible,
  SiTerraform,
  SiGitlab,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiFigma,
  SiTrello,
  SiAzuredevops,
  SiJfrog,
  SiKubernetes,
  SiGnubash,
} from "react-icons/si";
import {
  FaJava,
  FaReact,
  FaWordpress,
  FaAws,
  FaNode,
} from "react-icons/fa";

const skills = [
  {
    image: (
      <SiHtml5 size={60} color="" className="w-25 h-25 mb-4 text-primary" />
    ),
    title: "HTML",
  },
  {
    image: <SiCss3 size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "CSS",
  },
  {
    image: <SiJavascript size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "JavaScript",
  },
  {
    image: <FaJava size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Java",
  },
  {
    image: <FaReact size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "ReactJs",
  },
  {
    image: <SiTailwindcss size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "TailwindCSS",
  },
  {
    image: <SiNextdotjs size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Next.js"
  },
  {
    image: <FaWordpress size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "WordPress",
  },
  {
    image: <SiGit size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Git",
  },
  {
    image: <FaAws size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "AWS",
  },
  {
    image: (
      <SiMicrosoftazure size={60} className="w-25 h-25 mb-4 text-primary" />
    ),
    title: "Azure",
  },
  {
    image: <SiNestjs size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "NestJs",
  },
  {
    image: <FaNode size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "NodeJs",
  },
  {
    image: <SiExpress size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "ExpressJs",
  },
  {
    image: <SiMongodb size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "MongoDB",
  },
  {
    image: <SiDocker size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Docker",
  },
  {
    image: <SiJenkins size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Jenkins",
  },
  {
    image: <SiAnsible size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Ansible",
  },
  {
    image: <SiTerraform size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Terraform",
  },
  {
    image: <SiGitlab size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "GitLab",
  },
  {
    image: <SiAzuredevops size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Azure DevOps",
  },
  {
    image: <SiJfrog size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "JFrog",
  },
  {
    image: <SiKubernetes size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Kubernetes",
  },
  {
    image: <SiGnubash size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Bash",
  },
];

const extra = [
  {
    image: (
      <SiAdobephotoshop size={60} className="w-25 h-25 mb-4 text-primary" />
    ),
    title: "Adobe Photoshop",
  },
  {
    image: (
      <SiAdobeaftereffects size={60} className="w-25 h-25 mb-4 text-primary" />
    ),
    title: "Adobe After Effects",
  },
  {
    image: (
      <SiAdobepremierepro size={60} className="w-25 h-25 mb-4 text-primary" />
    ),
    title: "Adobe Premiere Pro",
  },
  {
    image: <SiFigma size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Figma",
  },
  {
    image: <SiTrello size={60} className="w-25 h-25 mb-4 text-primary" />,
    title: "Trello",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 animate-in">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="section-title mb-8 text-center xl:mb-16 mx-auto">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-10">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col mx-20 items-center">
                {/* <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-25 h-25 mb-4"
                /> */}
                {skill.image}
                <h3 className="h5 text-center">{skill.title}</h3>
              </div>
            ))}
          </div>
          <div className="w-20 h-1 bg-primary mt-12 mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-20">
            {extra.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.image}
                <h3 className="h5 text-center">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
