import { useTranslation } from "react-i18next";
import "./MyProject.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

function MyProject() {
  const { t } = useTranslation();

  return (
    <div className="my-project">
      <h2 className="my-project__title">{t("projects.title")}</h2>
      <div className="my-project__projects">
        <div className="my-project__project">
          <img
            src="/project-1.png"
            alt={t("projects.course.name")}
            className="my-project__image"
          />
          <h3 className="my-project__name">{t("projects.course.name")}</h3>
          <p className="my-project__description">
            {t("projects.course.description")}
          </p>
          <div className="my-project__links">
            <a 
              href="https://dotcourse.example.com" 
              className="my-project__link my-project__demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiExternalLink style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.course.links.demo")}
            </a>
            <a
              href="https://github.com/your-username/dotcourse"
              className="my-project__link my-project__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {t("projects.course.links.source")}
            </a>
          </div>
        </div>

        <div className="my-project__project">
          <img
            src="/project-2.png"
            alt={t("projects.nexium.name")}
            className="my-project__image"
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
        </div>

        <div className="my-project__project">
          <img
            src="/project-3.png"
            alt={t("projects.azogeh.name")}
            className="my-project__image"
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
        </div>

        <div className="my-project__project">
          <img
            src="/project-4.png"
            alt={t("projects.threeJs.name")}
            className="my-project__image"
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
        </div>
      </div>
    </div>
  );
}

export default MyProject;
