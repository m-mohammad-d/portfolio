import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./MyProject.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

function MyProject() {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="my-project"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="my-project__title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("projects.title")}
      </motion.h2>
      <motion.div 
        className="my-project__projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="my-project__project"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/project-1.png"
            alt={t("projects.course.name")}
            className="my-project__image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="my-project__name">{t("projects.course.name")}</h3>
          <p className="my-project__description">
            {t("projects.course.description")}
          </p>
          <div className="my-project__links">
            <motion.a 
              href="https://dotcourse.example.com" 
              className="my-project__link my-project__demo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiExternalLink style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.course.links.demo")}
            </motion.a>
            <motion.a
              href="https://github.com/your-username/dotcourse"
              className="my-project__link my-project__github"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.course.links.source")}
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="my-project__project"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/project-2.png"
            alt={t("projects.nexium.name")}
            className="my-project__image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="my-project__name">{t("projects.nexium.name")}</h3>
          <p className="my-project__description">
            {t("projects.nexium.description")}
          </p>
          <div className="my-project__links">
            <a 
              href="https://nexium.netlify.app/"
              className="my-project__link my-project__demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiExternalLink style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.nexium.links.demo")}
            </a>
            <a
              href="https://github.com/your-username/nexium"
              className="my-project__link my-project__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.nexium.links.source")}
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="my-project__project"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/project-3.png"
            alt={t("projects.azogeh.name")}
            className="my-project__image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="my-project__name">{t("projects.azogeh.name")}</h3>
          <p className="my-project__description">
            {t("projects.azogeh.description")}
          </p>
          <div className="my-project__links">
            <a 
              href="#"
              className="my-project__link my-project__demo"
              onClick={(e) => e.preventDefault()}
              style={{ opacity: 0.7, cursor: 'not-allowed' }}
            >
              <HiExternalLink style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.azogeh.links.demo")}
            </a>
            <a
              href="https://github.com/your-username/azogeh"
              className="my-project__link my-project__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.azogeh.links.source")}
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="my-project__project"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/project-4.png"
            alt={t("projects.threeJs.name")}
            className="my-project__image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="my-project__name">{t("projects.threeJs.name")}</h3>
          <p className="my-project__description">
            {t("projects.threeJs.description")}
          </p>
          <div className="my-project__links">
            <a 
              href="https://m-mohammad-d.github.io/three-js-3d/"
              className="my-project__link my-project__demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiExternalLink style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.threeJs.links.demo")}
            </a>
            <a
              href="https://github.com/your-username/project4"
              className="my-project__link my-project__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.threeJs.links.source")}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MyProject;
