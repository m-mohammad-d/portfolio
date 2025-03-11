import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFramer, SiTailwindcss, SiGraphql } from "react-icons/si";
import { GiCube } from "react-icons/gi";
import "./SkillTimeline.css";

interface Skill {
  name: string;
  Icon: any;
  startDate: string;
  proficiency: number;
}

function SkillTimeline() {
  const { t } = useTranslation();

  const skills: Skill[] = [
    {
      name: "HTML",
      Icon: FaHtml5,
      startDate: "2021-01",
      proficiency: 95
    },
    {
      name: "CSS",
      Icon: FaCss3Alt,
      startDate: "2021-02",
      proficiency: 90
    },
    {
      name: "JavaScript",
      Icon: FaJs,
      startDate: "2021-04",
      proficiency: 85
    },
    {
      name: "React",
      Icon: FaReact,
      startDate: "2021-08",
      proficiency: 88
    },
    {
      name: "Git",
      Icon: FaGitAlt,
      startDate: "2021-09",
      proficiency: 85
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      startDate: "2022-01",
      proficiency: 80
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      startDate: "2022-03",
      proficiency: 90
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      startDate: "2022-06",
      proficiency: 82
    },
    {
      name: "GraphQL",
      Icon: SiGraphql,
      startDate: "2022-09",
      proficiency: 75
    },
    {
      name: "Framer Motion",
      Icon: SiFramer,
      startDate: "2023-01",
      proficiency: 78
    },
    {
      name: "Three.js",
      Icon: GiCube,
      startDate: "2023-04",
      proficiency: 70
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
    <div className="skill-timeline">
      <h2 className="skill-timeline__title">{t("skills.timeline.title")}</h2>
      
      <div className="skill-timeline__container">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-timeline__item">
            <div className="skill-timeline__icon-container">
              <skill.Icon className="skill-timeline__icon" />
              <div className="skill-timeline__connector" />
            </div>
            
            <div className="skill-timeline__content">
              <h3 className="skill-timeline__skill-name">
                {skill.name}
              </h3>
              <span className="skill-timeline__date">
                {formatDate(skill.startDate)}
              </span>
              
              <div className="skill-timeline__progress-container">
                <div 
                  className="skill-timeline__progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                >
                  <span className="skill-timeline__progress-label">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillTimeline; 