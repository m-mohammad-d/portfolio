// src/components/MySkill.js
import "./MySkill.css";
import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFramer, SiTailwindcss, SiGraphql } from "react-icons/si";
import { GiCube } from "react-icons/gi";

interface Skill {
  name: string;
  Icon: any;
  startDate: string;
  proficiency: number;
}

function MySkill() {
  const { t } = useTranslation();

  const skills: Skill[] = [
    {
      name: "HTML",
      Icon: FaHtml5,
      startDate: "2023-10",
      proficiency: 100
    },
    {
      name: "CSS",
      Icon: FaCss3Alt,
      startDate: "2023-10",
      proficiency: 100
    },
    {
      name: "JavaScript",
      Icon: FaJs,
      startDate: "2024-01",
      proficiency: 90
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      startDate: "2024-03",
      proficiency: 75
    },
    {
      name: "React",
      Icon: FaReact,
      startDate: "2024-05",
      proficiency: 70
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      startDate: "2024-06",
      proficiency: 50
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      startDate: "2024-06",
      proficiency: 50
    },
    {
      name: "Framer Motion",
      Icon: SiFramer,
      startDate: "2024-07",
      proficiency: 50
    },
    {
      name: "GraphQL",
      Icon: SiGraphql,
      startDate: "2024-07",
      proficiency: 30
    },
    {
      name: "Git",
      Icon: FaGitAlt,
      startDate: "2024-01",
      proficiency: 30
    },
    {
      name: "Three.js",
      Icon: GiCube,
      startDate: "2024-08",
      proficiency: 30
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short' 
    }).format(date);
  };

  return (
    <div className="my-skill">
      <h2 className="my-skill__title">{t("skills.title")}</h2>
      <h3 className="my-skill__subtitle">{t("skills.timeline.title")}</h3>
      
      <div className="my-skill__timeline">
        <div className="my-skill__timeline-line" />
        
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className={`my-skill__timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="my-skill__timeline-content">
              <div className="my-skill__timeline-icon">
                <skill.Icon />
              </div>
              <h3 className="my-skill__timeline-name">{skill.name}</h3>
              <span className="my-skill__timeline-date">
                {formatDate(skill.startDate)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="my-skill__proficiency">
        <h3 className="my-skill__proficiency-title">{t("skills.proficiency.title")}</h3>
        <div className="my-skill__proficiency-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="my-skill__proficiency-item">
              <div className="my-skill__proficiency-header">
                <skill.Icon className="my-skill__proficiency-icon" />
                <span className="my-skill__proficiency-name">{skill.name}</span>
                <span className="my-skill__proficiency-value">{skill.proficiency}%</span>
              </div>
              <div className="my-skill__proficiency-bar-container">
                <div 
                  className="my-skill__proficiency-bar"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySkill;
