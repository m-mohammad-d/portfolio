// src/components/MySkill.js
import "./MySkill.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFramer, SiTailwindcss, SiGraphql } from "react-icons/si";
import { GiCube } from "react-icons/gi";

interface Skill {
  name: string;
  Icon: any;
  proficiency: number;
}

function MySkill() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skills: Skill[] = [
    {
      name: "HTML",
      Icon: FaHtml5,
      proficiency: 100
    },
    {
      name: "CSS",
      Icon: FaCss3Alt,
      proficiency: 100
    },
    {
      name: "JavaScript",
      Icon: FaJs,
      proficiency: 90
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      proficiency: 75
    },
    {
      name: "React",
      Icon: FaReact,
      proficiency: 70
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      proficiency: 50
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      proficiency: 50
    },
    {
      name: "Framer Motion",
      Icon: SiFramer,
      proficiency: 50
    },
    {
      name: "GraphQL",
      Icon: SiGraphql,
      proficiency: 30
    },
    {
      name: "Git",
      Icon: FaGitAlt,
      proficiency: 30
    },
    {
      name: "Three.js",
      Icon: GiCube,
      proficiency: 30
    }
  ];

  return (
    <motion.div 
      className="my-skill"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className="my-skill__title"
        variants={itemVariants}
      >
        {t("skills.title")}
      </motion.h2>
      
      <div className="my-skill__proficiency">
        <motion.h3 
          className="my-skill__proficiency-title"
          variants={itemVariants}
        >
          {t("skills.proficiency.title")}
        </motion.h3>
        <motion.div 
          className="my-skill__proficiency-grid"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name} 
              className="my-skill__proficiency-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="my-skill__proficiency-header">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.Icon className="my-skill__proficiency-icon" />
                </motion.div>
                <span className="my-skill__proficiency-name">{skill.name}</span>
                <span className="my-skill__proficiency-value">{skill.proficiency}%</span>
              </div>
              <div className="my-skill__proficiency-bar-container">
                <motion.div 
                  className="my-skill__proficiency-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MySkill;
