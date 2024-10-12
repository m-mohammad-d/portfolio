
import { useTranslation } from "react-i18next";
import "./MyProject.css";

function MyProject() {
  const { t } = useTranslation();

  return (
    <div className="my-project">
      <h2 className="my-project__title">{t("projects.title")}</h2>
      <div className="my-project__projects">
        <div className="my-project__project">
          <img
            src="/project-1.png"
            alt=".course"
            className="my-project__image"
          />
          <h3 className="my-project__name">{t("projects.course.name")}</h3>
          <p className="my-project__description">
            {t("projects.course.description")}
          </p>
          <a href="https://dotcourse.example.com">
            {t("projects.course.links.demo")}
          </a>
          <a
            href="https://github.com/your-username/dotcourse"
            className="my-project__github"
          >
            {t("projects.course.links.source")}
          </a>
        </div>
        <div className="my-project__project">
          <img
            src="/project-2.png"
            alt="Nexium"
            className="my-project__image"
          />
          <h3 className="my-project__name">{t("projects.nexium.name")}</h3>
          <p className="my-project__description">
            {t("projects.nexium.description")}
          </p>
          <a href="https://nexium.netlify.app/">
            {t("projects.nexium.links.demo")}
          </a>
          <a
            href="https://github.com/your-username/nexium"
            className="my-project__github"
          >
            {t("projects.nexium.links.source")}
          </a>
        </div>
        <div className="my-project__project">
          <img
            src="/project-3.png"
            alt="Azogeh"
            className="my-project__image"
          />
          <h3 className="my-project__name">{t("projects.azogeh.name")}</h3>
          <p className="my-project__description">
            {t("projects.azogeh.description")}
          </p>
          <a href="#">{t("projects.azogeh.links.demo")}</a>
          <a
            href="https://github.com/your-username/azogeh"
            className="my-project__github"
          >
            {t("projects.azogeh.links.source")}
          </a>
        </div>
        <div className="my-project__project">
          <img
            src="/project-4.png"
            alt="Three.js Project"
            className="my-project__image"
          />
          <h3 className="my-project__name">{t("projects.threeJs.name")}</h3>
          <p className="my-project__description">
            {t("projects.threeJs.description")}
          </p>
          <a href="https://m-mohammad-d.github.io/three-js-3d/">
            {t("projects.threeJs.links.demo")}
          </a>
          <a
            href="https://github.com/your-username/project4"
            className="my-project__github"
          >
            {t("projects.threeJs.links.source")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
